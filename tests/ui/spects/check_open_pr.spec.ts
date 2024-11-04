import { test, expect } from "@playwright/test";
import { fetchOpenPullRequests } from "../../api/request/apiGitHub";
import fs from "fs";
import path from "path";

test("@api Test Case 4 Fetch open pull requests and save to CSV", async ({
  request,
}) => {
  const pullRequests = await fetchOpenPullRequests(request);

  const csvContent =
    "Title,Created Date,Author\n" +
    pullRequests
      .map((pr) => `${pr.title},${pr.created_at},${pr.user}`)
      .join("\n");

  const filePath = path.join("test-results", "open_pull_requests.csv");

  fs.writeFileSync(filePath, csvContent);
  console.log(`CSV file saved at: ${filePath}`);

  expect(pullRequests.length).toBeGreaterThan(0);
});
