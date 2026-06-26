"""Sphinx directive for embedding pyrepl-web interactive REPLs."""

from __future__ import annotations

import html
from pathlib import Path
from typing import TYPE_CHECKING, ClassVar

from docutils import nodes
from docutils.parsers.rst import directives
from sphinx.util import logging
from sphinx.util.docutils import SphinxDirective

if TYPE_CHECKING:
    from sphinx.application import Sphinx

logger = logging.getLogger(__name__)


def _flag_or_default(value: bool | None, default: bool) -> bool:
    if value is None:
        return default
    return value


def _merge_packages(*values: str) -> str:
    packages: list[str] = []
    seen: set[str] = set()
    for value in values:
        for package in value.split(","):
            package = package.strip()
            if package and package not in seen:
                seen.add(package)
                packages.append(package)
    return ",".join(packages)


class pyrepl_web(nodes.General, nodes.Element):
    """Container node for a pyrepl-web REPL."""


class PyReplDirective(SphinxDirective):
    """Embed an interactive Python REPL powered by pyrepl-web."""

    has_content = True
    required_arguments = 0
    optional_arguments = 0
    final_argument_whitespace = True
    option_spec: ClassVar[dict] = {
        "packages": directives.unchanged,
        "theme": directives.unchanged,
        "title": directives.unchanged,
        "height": directives.unchanged,
        "src": directives.unchanged,
        "no-header": directives.flag,
        "no-buttons": directives.flag,
        "no-banner": directives.flag,
        "readonly": directives.flag,
    }

    def run(self) -> list[nodes.Node]:
        env = self.env
        if not hasattr(env, "pyrepl_pages"):
            env.pyrepl_pages = set()
        if not hasattr(env, "pyrepl_startup_scripts"):
            env.pyrepl_startup_scripts = {}

        env.pyrepl_pages.add(env.docname)

        height = self.options.get("height", env.config.pyrepl_web_height)
        theme = self.options.get("theme", env.config.pyrepl_web_theme)
        title = self.options.get("title")
        packages = _merge_packages(
            env.config.pyrepl_web_packages,
            self.options.get("packages", ""),
        )
        no_header = _flag_or_default(
            self.options.get("no-header"),
            env.config.pyrepl_web_no_header,
        )
        no_buttons = self.options.get("no-buttons") is not None
        no_banner = self.options.get("no-banner") is not None
        readonly = self.options.get("readonly") is not None

        src = self.options.get("src")
        if src:
            startup_src = src
        elif self.content:
            counter = getattr(env, "pyrepl_counter", 0) + 1
            env.pyrepl_counter = counter
            script_name = f"{env.docname.replace('/', '-')}-{counter}.py"
            startup_src = f"_static/pyrepl/{script_name}"
            env.pyrepl_startup_scripts[script_name] = "\n".join(self.content) + "\n"
        else:
            startup_src = None

        node = pyrepl_web("")
        node["height"] = height
        node["theme"] = theme
        node["title"] = title
        node["packages"] = packages
        node["no_header"] = no_header
        node["no_buttons"] = no_buttons
        node["no_banner"] = no_banner
        node["readonly"] = readonly
        node["src"] = startup_src
        return [node]


def visit_pyrepl_web(self: nodes.NodeVisitor, node: pyrepl_web) -> None:
    attrs: list[str] = []

    if node["theme"]:
        attrs.append(f'theme="{html.escape(node["theme"], quote=True)}"')
    if node["packages"]:
        attrs.append(f'packages="{html.escape(node["packages"], quote=True)}"')
    if node["title"]:
        attrs.append(f'repl-title="{html.escape(node["title"], quote=True)}"')
    if node["src"]:
        attrs.append(f'src="{html.escape(node["src"], quote=True)}"')
    if node["no_header"]:
        attrs.append("no-header")
    if node["no_buttons"]:
        attrs.append("no-buttons")
    if node["no_banner"]:
        attrs.append("no-banner")
    if node["readonly"]:
        attrs.append("readonly")

    pyrepl_attrs = " ".join(attrs)
    style = f'height:{html.escape(node["height"], quote=True)};width:100%'

    self.body.append(
        f'<div class="pyrepl-sphinx" style="{style}">'
        f"<py-repl {pyrepl_attrs}></py-repl>"
        f"</div>\n"
    )


def depart_pyrepl_web(self: nodes.NodeVisitor, node: pyrepl_web) -> None:
    pass


def _copy_bundled_assets(app: Sphinx) -> None:
    if app.builder.format != "html":
        return

    static_dir = Path(__file__).parent / "static"
    dest = Path(app.outdir) / "_static" / "pyrepl-web"
    dest.mkdir(parents=True, exist_ok=True)

    for source in sorted(static_dir.iterdir()):
        if source.is_file():
            (dest / source.name).write_bytes(source.read_bytes())


def _write_startup_scripts(app: Sphinx, exception: Exception | None) -> None:
    if exception is not None:
        return

    scripts = getattr(app.env, "pyrepl_startup_scripts", {})
    if not scripts:
        return

    dest = Path(app.outdir) / "_static" / "pyrepl"
    dest.mkdir(parents=True, exist_ok=True)
    for name, content in scripts.items():
        (dest / name).write_text(content, encoding="utf-8")


def _on_html_page_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict,
    doctree: nodes.document,
) -> None:
    pages = getattr(app.env, "pyrepl_pages", set())
    if pagename not in pages:
        return

    js_url = app.config.pyrepl_web_js
    if js_url is None:
        js_url = "_static/pyrepl-web/pyrepl.js"

    css_url = "_static/pyrepl-web/pyrepl-docs.css"

    script_files = list(context.get("script_files", []))
    if js_url not in script_files:
        script_files.append(js_url)
    context["script_files"] = script_files

    css_files = list(context.get("css_files", []))
    if css_url not in css_files:
        css_files.append(css_url)
    context["css_files"] = css_files


def setup(app: Sphinx) -> dict:
    app.add_config_value("pyrepl_web_js", None, "html", types=[str, type(None)])
    app.add_config_value("pyrepl_web_theme", "catppuccin-latte", "html")
    app.add_config_value("pyrepl_web_no_header", True, "html")
    app.add_config_value("pyrepl_web_packages", "", "html")
    app.add_config_value("pyrepl_web_height", "24rem", "html")

    app.add_node(
        pyrepl_web,
        html=(visit_pyrepl_web, depart_pyrepl_web),
        latex=(visit_pyrepl_web, depart_pyrepl_web),
        text=(visit_pyrepl_web, depart_pyrepl_web),
    )
    app.add_directive("py-repl", PyReplDirective)

    app.connect("builder-inited", _copy_bundled_assets)
    app.connect("build-finished", _write_startup_scripts)
    app.connect("html-page-context", _on_html_page_context)

    return {
        "version": "0.4.0",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
