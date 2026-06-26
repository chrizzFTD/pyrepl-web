# Changelog

## 0.4.0

- Upgraded Pyodide from 0.29.2 (Python 3.13.2) to 314.0.1 (Python 3.14.2).
- The startup banner now reads the Python version from `sys.version` at runtime.
- **Note for consumers:** Pyodide 314 uses a new wheel ABI (`pyemscripten_2026_0`). If you preload PyPI packages via the `packages` attribute, re-test them after upgrading.
