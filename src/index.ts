import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Octokit } from "@octokit/core";
import {
  createAckEvent,
  createDoneEvent,
  createErrorsEvent,
  createTextEvent,
  getUserMessage,
  verifyAndParseRequest,
} from "@copilot-extensions/preview-sdk";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to the Copilot Extension template! 👋");
});

app.post("/", async (c) => {
  // Identify the user, using the GitHub API token provided in the request headers.
  const tokenForUser = c.req.header("X-GitHub-Token") ?? "";

  const body = await c.req.text();
  const signature = c.req.header("github-public-key-signature") ?? "";
  const keyID = c.req.header("github-public-key-identifier") ?? "";

  const { isValidRequest, payload } = await verifyAndParseRequest(
    body,
    signature,
    keyID,
    {
      token: tokenForUser,
    }
  );

  if (!isValidRequest) {
    console.error("Request verification failed");
    c.header("Content-Type", "text/plain");
    c.status(401);
    c.text("Request could not be verified");
    return;
  }

  if (!tokenForUser) {
    return c.text(
      createErrorsEvent([
        {
          type: "agent",
          message: "No GitHub token provided in the request headers.",
          code: "MISSING_GITHUB_TOKEN",
          identifier: "missing_github_token",
        },
      ])
    );
  }

  const octokit = new Octokit({ auth: tokenForUser });
  const user = await octokit.request("GET /user");
  const prompt = getUserMessage(payload);

  return c.text(
    createAckEvent() +
      createTextEvent(
        `Welcome ${user.data.login}! It looks like you asked the following question, "${prompt}". This is a GitHub Copilot extension template, so it's up to you to decide what you want to implement to answer prompts.`
      ) +
      createDoneEvent()
  );
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
