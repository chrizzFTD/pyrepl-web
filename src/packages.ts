const ABSOLUTE_SCHEME = /^(https?:|emfs:)/i;

/**
 * Resolve a package reference for micropip.install().
 *
 * PyPI names are returned unchanged. Site-relative wheel paths are resolved
 * against baseUrl (defaults to document.baseURI), matching fetch() behavior.
 */
export function resolvePackageRef(
  pkg: string,
  baseUrl: string | URL = document.baseURI,
): string {
  if (ABSOLUTE_SCHEME.test(pkg)) return pkg;
  if (pkg.includes(" @ ")) return pkg;
  if (!pkg.includes("/") && !pkg.endsWith(".whl")) return pkg;
  return new URL(pkg, baseUrl).href;
}

export function resolvePackageRefs(
  packages: string[],
  baseUrl: string | URL = document.baseURI,
): string[] {
  return packages.map((pkg) => resolvePackageRef(pkg, baseUrl));
}
