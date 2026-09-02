import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// GITHUB PAGES: The repository name becomes the public URL path.
// If the repository is renamed, GitHub Actions supplies the new name automatically.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'CADG2026';
const githubPagesBasePath = `/${repositoryName}`;
const githubOwner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? 'SeongUkMoon';
const githubPagesUrl = `https://${githubOwner.toLowerCase()}.github.io${githubPagesBasePath}`;

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        // An absolute asset URL keeps the exported _next directory at the
        // artifact root, which is how GitHub Pages serves project sites.
        assetPrefix: githubPagesUrl,
        trailingSlash: false,
      }
    : {}),
  env: {
    NEXT_PUBLIC_SITE_BASE_PATH: isGitHubPages ? githubPagesBasePath : '',
  },
};

export default nextConfig;

