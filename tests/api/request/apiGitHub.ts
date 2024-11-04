import { APIRequestContext } from "@playwright/test";
import { executeRequest } from "../../utils/apiRequestUtils";
import { buildUrl } from "../../utils/urlBuider";

type PullRequest = {
  title: string;
  created_at: string;
  user: string;
};

const GITHUB_API_BASE_URL = "https://api.github.com"; // normaly this url should be in .env file

export async function fetchOpenPullRequests(
  apiRequest: APIRequestContext,
  repo = "appwrite/appwrite"
) {
  let allPullRequests: PullRequest[] = [];
  let page = 1;

  while (true) {
    const url = buildUrl(GITHUB_API_BASE_URL, `/repos/${repo}/pulls`, {
      state: "open",
      per_page: 100,
      page,
    });
    const response = await executeRequest(apiRequest, url, "get");
    const pullRequests = await response.json();

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
