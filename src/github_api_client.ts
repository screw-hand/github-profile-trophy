import { soxa } from "../deps.ts";
import { UserInfo } from "./user_info.ts";
<<<<<<< HEAD
import { CONSTANTS } from "./utils.ts";
=======
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
import type {
  GitHubUserActivity,
  GitHubUserIssue,
  GitHubUserPullRequest,
  GitHubUserRepository,
} from "./user_info.ts";

export class GithubAPIClient {
<<<<<<< HEAD
  constructor(
    private apiEndpoint: string = CONSTANTS.DEFAULT_GITHUB_API,
  ) {
  }
  async requestUserInfo(
=======
  constructor() {
  }
  async requestUserInfo(
    token: string | undefined,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    username: string,
  ): Promise<UserInfo | null> {
    // Avoid timeout for the Github API
    const results = await Promise.all([
<<<<<<< HEAD
      this.requestUserActivity(username),
      this.requestUserIssue(username),
      this.requestUserPullRequest(username),
      this.requestUserRepository(username),
=======
      this.requestUserActivity(token, username),
      this.requestUserIssue(token, username),
      this.requestUserPullRequest(token, username),
      this.requestUserRepository(token, username),
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    ]);
    if (results.some((r) => r == null)) {
      return null;
    }
    return new UserInfo(results[0]!, results[1]!, results[2]!, results[3]!);
  }
  private async requestUserActivity(
<<<<<<< HEAD
=======
    token: string | undefined,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    username: string,
  ): Promise<GitHubUserActivity | null> {
    const query = `
        query userInfo($username: String!) {
          user(login: $username) {
            createdAt
            contributionsCollection {
              totalCommitContributions
              restrictedContributionsCount
<<<<<<< HEAD
              totalPullRequestReviewContributions
=======
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
            }
            organizations(first: 1) {
              totalCount
            }
            followers(first: 1) {
              totalCount
            }
          }
        }
        `;
<<<<<<< HEAD
    return await this.request(query, username);
  }
  private async requestUserIssue(
=======
    return await this.request(query, token, username);
  }
  private async requestUserIssue(
    token: string | undefined,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    username: string,
  ): Promise<GitHubUserIssue | null> {
    const query = `
        query userInfo($username: String!) {
          user(login: $username) {
            openIssues: issues(states: OPEN) {
              totalCount
            }
            closedIssues: issues(states: CLOSED) {
              totalCount
            }
          }
        }
        `;
<<<<<<< HEAD
    return await this.request(query, username);
  }
  private async requestUserPullRequest(
=======
    return await this.request(query, token, username);
  }
  private async requestUserPullRequest(
    token: string | undefined,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    username: string,
  ): Promise<GitHubUserPullRequest | null> {
    const query = `
        query userInfo($username: String!) {
          user(login: $username) {
            pullRequests(first: 1) {
              totalCount
            }
          }
        }
        `;
<<<<<<< HEAD
    return await this.request(query, username);
  }
  private async requestUserRepository(
=======
    return await this.request(query, token, username);
  }
  private async requestUserRepository(
    token: string | undefined,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    username: string,
  ): Promise<GitHubUserRepository | null> {
    const query = `
        query userInfo($username: String!) {
          user(login: $username) {
            repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
              totalCount
              nodes {
                languages(first: 3, orderBy: {direction:DESC, field: SIZE}) {
                  nodes {
                    name
                  }
                }
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
        `;
<<<<<<< HEAD
    return await this.request(query, username);
  }
  private async request(
    query: string,
    username: string,
  ) {
    const tokens = [
      Deno.env.get("GITHUB_TOKEN1"),
      Deno.env.get("GITHUB_TOKEN2"),
    ];
    const variables = { username: username };
    let response;
    for (const token of tokens) {
      response = await soxa.post(
        this.apiEndpoint,
        {},
        {
          data: { query: query, variables },
          headers: { Authorization: `bearer ${token}` },
        },
      ).catch((error) => {
        console.error(error.response.data);
      });
      if (response.data.data !== undefined) {
        break;
      }
=======
    return await this.request(query, token, username);
  }
  private async request(
    query: string,
    token: string | undefined,
    username: string,
  ) {
    const variables = { username: username };
    const response = await soxa.post(
      "https://api.github.com/graphql",
      {},
      {
        data: { query: query, variables },
        headers: { Authorization: `bearer ${token}` },
      },
    ).catch((error) => {
      console.error(error.response.data.errors[0].message);
    });
    if (response.status != 200) {
      console.error(`Status code: ${response.status}`);
      console.error(response.data);
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    }
    return response.data.data.user;
  }
}
