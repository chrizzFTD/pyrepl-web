# pyrepl-web

An embeddable Python REPL, powered by Pyodide.

[Live demo](https://playground.fastapicloud.dev/)

## Getting started

Include the script and use the `<py-repl>` web component:

```html
<script src="https://cdn.jsdelivr.net/npm/pyrepl-web/dist/pyrepl.js"></script>

<py-repl></py-repl>
```

That's it! No install needed.

## Features

- **Python 3.14** in the browser via WebAssembly (Pyodide)
- **Syntax highlighting** powered by Pygments
- **Tab completion** for modules, functions, and variables
- **Command history** with up/down arrows
- **Smart indentation** for multi-line code
- **Keyboard shortcuts**: Ctrl+L (clear), Ctrl+C (cancel)
- **PyPI packages**: preload popular libraries
- **Startup scripts**: run Python on load to set up the environment
- **Theming**: built-in dark/light themes or fully custom

## Attributes

| Attribute | Description | Default |
|-----------|-------------|---------|
| `theme` | Color theme name (builtin or registered via `window.pyreplThemes`) | `catppuccin-mocha` |
| `packages` | Comma-separated list of PyPI packages and/or local wheel paths to preload | none |
| `repl-title` | Custom title in the header bar | `Python REPL` |
| `src` | Path to a Python startup script (see below) | none |
| `replay-src` | Path to a Python script replayed with `>>>` prompts | none |
| `replay` | Replay `src` with interactive prompts instead of silent load | not set |
| `no-header` | Hide the header bar; Copy/Clear buttons appear as a floating overlay in the top-right corner (boolean attribute) | not set |
| `no-buttons` | Hide copy/clear buttons in the header or floating overlay (boolean attribute) | not set |
| `readonly` | Disable input, display only (boolean attribute) | not set |
| `no-banner` | Hide the Python version startup banner (boolean attribute) | not set |

### Local Pyodide Wheels

Preload a locally hosted wheel alongside PyPI packages. Paths are resolved against the current page URL (same as `src`), so site-relative paths work in flat doc layouts:

```html
<py-repl
  packages="_static/wheels/myext-pyodide.whl, numpy"
  src="_static/bootstrap.py"
></py-repl>
```

Place wheels under your static assets directory (e.g. Sphinx `_static/wheels/`). For nested page hierarchies, use a root-absolute path (`/_static/wheels/foo.whl`) so resolution is independent of page depth.

Micropip requires wheel URIs to use `http:`, `https:`, or `emfs:` schemes — pyrepl-web resolves relative paths automatically before install.

### Startup Scripts

Use `src` to preload a Python script that sets up the environment:

```html
<py-repl src="/scripts/setup.py" packages="pandas"></py-repl>
```

The script runs silently to populate the namespace. If you define a `setup()` function, it will be called after loading and its output is visible in the terminal:

```python
# setup.py
import pandas as pd

df = pd.DataFrame({'name': ['Alice', 'Bob'], 'age': [30, 25]})

def setup():
    print("DataFrame loaded:")
    print(df)
```

Use `replay-src` (or `replay` with `src`) to execute Python as an interactive session — each statement is shown with `>>>` / `...` prompts, syntax highlighting, and live output. When `replay` is set on `src`, the script is replayed visibly and any `setup()` function is **not** called (use `src` without `replay` for silent load + `setup()` output):


```html
<py-repl replay-src="/scripts/demo.py" packages="pandas"></py-repl>
```

Combine silent bootstrap and visible replay:

```html
<py-repl src="/scripts/bootstrap.py" replay-src="/scripts/demo.py"></py-repl>
```

### Theming

Built-in themes: `catppuccin-mocha` (dark, default) and `catppuccin-latte` (light).

#### Custom Themes

Register custom themes via `window.pyreplThemes` before loading the script. Only `background` and `foreground` are required - everything else is automatically derived:

```html
<script>
window.pyreplThemes = {
  'my-theme': {
    background: '#1a1b26',
    foreground: '#a9b1d6',
  }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/pyrepl-web/dist/pyrepl.js"></script>

<py-repl theme="my-theme"></py-repl>
```

**What gets auto-derived from your background color:**
- Terminal colors (red for errors, green for success, etc.) - from catppuccin-mocha (dark) or catppuccin-latte (light)
- Syntax highlighting - uses the matching catppuccin Pygments style
- Header colors - derived from the base theme

#### Theme Properties

| Property | Description |
|----------|-------------|
| `background` | Terminal background color (required) |
| `foreground` | Default text color (required) |
| `headerBackground` | Header bar background (optional) |
| `headerForeground` | Header title color (optional) |
| `promptColor` | Prompt `>>>` color - hex (`#7aa2f7`) or name (`green`, `cyan`) (optional) |
| `pygmentsStyle` | Custom syntax highlighting (optional, see below) |

#### Syntax Highlighting

Syntax highlighting uses [Pygments](https://pygments.org/). The style is chosen automatically:

1. If your theme name matches a [Pygments style](https://pygments.org/styles/) (e.g., `monokai`, `dracula`), that style is used
2. Otherwise, uses `catppuccin-mocha` for dark backgrounds or `catppuccin-latte` for light backgrounds

For full control, provide a `pygmentsStyle` mapping [Pygments tokens](https://pygments.org/docs/tokens/) to colors:

```html
<script>
window.pyreplThemes = {
  'tokyo-night': {
    background: '#1a1b26',
    foreground: '#a9b1d6',
    promptColor: '#bb9af7',
    pygmentsStyle: {
      'Keyword': '#bb9af7',
      'String': '#9ece6a',
      'Number': '#ff9e64',
      'Comment': '#565f89',
      'Name.Function': '#7aa2f7',
      'Name.Builtin': '#7dcfff',
    }
  }
};
</script>
```