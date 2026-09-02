/**
 * Adds the GitHub Pages repository path in production while preserving
 * simple root-relative URLs during local preview.
 */
export function withSiteBasePath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? ''}${normalizedPath}`;
}

