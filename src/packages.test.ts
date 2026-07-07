import { describe, expect, test } from "bun:test";
import { resolvePackageRef, resolvePackageRefs } from "./packages";

const base = "http://localhost:8081/getting-started.html";

describe("resolvePackageRef", () => {
  test("leaves PyPI names unchanged", () => {
    expect(resolvePackageRef("numpy", base)).toBe("numpy");
    expect(resolvePackageRef("costa-core", base)).toBe("costa-core");
    expect(resolvePackageRef("pandas[excel]", base)).toBe("pandas[excel]");
    expect(resolvePackageRef("numpy==1.24", base)).toBe("numpy==1.24");
  });

  test("resolves site-relative wheel paths", () => {
    expect(resolvePackageRef("_static/wheels/foo.whl", base)).toBe(
      "http://localhost:8081/_static/wheels/foo.whl",
    );
    expect(resolvePackageRef("/_static/wheels/foo.whl", base)).toBe(
      "http://localhost:8081/_static/wheels/foo.whl",
    );
  });

  test("leaves absolute URLs unchanged", () => {
    const url = "https://cdn.example/w.whl";
    expect(resolvePackageRef(url, base)).toBe(url);
    expect(resolvePackageRef("emfs:/tmp/w.whl", base)).toBe("emfs:/tmp/w.whl");
  });

  test("leaves PEP 508 direct references unchanged", () => {
    const ref = "mypkg @ https://example.com/mypkg-1.0.0-py3-none-any.whl";
    expect(resolvePackageRef(ref, base)).toBe(ref);
  });
});

describe("resolvePackageRefs", () => {
  test("resolves mixed PyPI names and local wheels", () => {
    expect(
      resolvePackageRefs(
        ["numpy", "_static/wheels/foo.whl", "https://cdn.example/w.whl"],
        base,
      ),
    ).toEqual([
      "numpy",
      "http://localhost:8081/_static/wheels/foo.whl",
      "https://cdn.example/w.whl",
    ]);
  });
});
