import { APIRequestContext } from "@playwright/test";

type PullRequest = {
  title: string;
  created_at: string;
  user: string;
};

const GITHUB_API_BASE_URL = "https://api.github.com";

function buildPullRequestUrl(repo: string, page: number) {
  return `${GITHUB_API_BASE_URL}/repos/${repo}/pulls?state=open&per_page=100&page=${page}`;
}

export async function fetchOpenPullRequests(
  apiRequest: APIRequestContext,
  repo = "appwrite/appwrite"
) {
  let allPullRequests: PullRequest[] = [];
  let page = 1;

  while (true) {
    const url = buildPullRequestUrl(repo, page);
    const pullRequests = await fetchPage(apiRequest, url);

    if (pullRequests.length === 0) break;

    allPullRequests = allPullRequests.concat(
      pullRequests.map((pr) => ({
        title: pr.title,
        created_at: pr.created_at,
        user: pr.user.login,
      }))
    );

    page++;
  }

  return allPullRequests;
}

async function fetchPage(apiRequest: APIRequestContext, url: string) {
  const response = await apiRequest.get(url);

  if (!response.ok()) {
    throw new Error(
      `Failed to fetch PRs: ${response.status()} ${response.statusText()}`
    );
  }

  return response.json();
}
