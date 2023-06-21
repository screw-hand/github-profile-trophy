type Language = { name: string };
type Stargazers = { totalCount: number };
type Repository = {
  languages: { nodes: Language[] };
  stargazers: Stargazers;
};
export type GitHubUserRepository = {
  repositories: {
    totalCount: number;
    nodes: Repository[];
  };
};

export type GitHubUserIssue = {
  openIssues: {
    totalCount: number;
  };
  closedIssues: {
    totalCount: number;
  };
};

export type GitHubUserPullRequest = {
  pullRequests: {
    totalCount: number;
  };
};

export type GitHubUserActivity = {
  createdAt: string;
  contributionsCollection: {
    totalCommitContributions: number;
    restrictedContributionsCount: number;
<<<<<<< HEAD
    totalPullRequestReviewContributions: number;
=======
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  };
  organizations: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
};
export class UserInfo {
  public readonly totalCommits: number;
  public readonly totalFollowers: number;
  public readonly totalIssues: number;
  public readonly totalOrganizations: number;
  public readonly totalPullRequests: number;
<<<<<<< HEAD
  public readonly totalReviews: number;
=======
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  public readonly totalStargazers: number;
  public readonly totalRepositories: number;
  public readonly languageCount: number;
  public readonly durationYear: number;
  public readonly ancientAccount: number;
<<<<<<< HEAD
  public readonly joined2020: number;
  public readonly ogAccount: number;
=======
  public readonly newAccount: number;
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  constructor(
    userActivity: GitHubUserActivity,
    userIssue: GitHubUserIssue,
    userPullRequest: GitHubUserPullRequest,
    userRepository: GitHubUserRepository,
  ) {
    const totalCommits =
      userActivity.contributionsCollection.restrictedContributionsCount +
      userActivity.contributionsCollection.totalCommitContributions;
    const totalStargazers = userRepository.repositories.nodes.reduce(
      (prev: number, node: Repository) => {
        return prev + node.stargazers.totalCount;
      },
      0,
    );

    const languages = new Set<string>();
    userRepository.repositories.nodes.forEach((node: Repository) => {
      if (node.languages.nodes != undefined) {
        node.languages.nodes.forEach((node: Language) => {
          if (node != undefined) {
            languages.add(node.name);
          }
        });
      }
    });
<<<<<<< HEAD
    const durationTime = new Date().getTime() -
      new Date(userActivity.createdAt).getTime();
    const durationYear = new Date(durationTime).getUTCFullYear() - 1970;
    const ancientAccount =
      new Date(userActivity.createdAt).getFullYear() <= 2010 ? 1 : 0;
    const joined2020 = new Date(userActivity.createdAt).getFullYear() == 2020
      ? 1
      : 0;
    const ogAccount =
      new Date(userActivity.createdAt).getFullYear() <= 2008 ? 1 : 0;

=======
    const durationTime = new Date().getTime() - new Date(userActivity.createdAt).getTime();
    const durationYear = new Date(durationTime).getUTCFullYear() - 1970;
    const ancientAccount = new Date(userActivity.createdAt).getFullYear() <= 2010 ? 1 : 0;
    const newAccount = new Date(userActivity.createdAt).getFullYear() >= 2020 ? 1 : 0;
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    this.totalCommits = totalCommits;
    this.totalFollowers = userActivity.followers.totalCount;
    this.totalIssues = userIssue.openIssues.totalCount + userIssue.closedIssues.totalCount;
    this.totalOrganizations = userActivity.organizations.totalCount;
    this.totalPullRequests = userPullRequest.pullRequests.totalCount;
<<<<<<< HEAD
    this.totalReviews = userActivity.contributionsCollection.totalPullRequestReviewContributions;
=======
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
    this.totalStargazers = totalStargazers;
    this.totalRepositories = userRepository.repositories.totalCount;
    this.languageCount = languages.size;
    this.durationYear = durationYear;
    this.ancientAccount = ancientAccount;
<<<<<<< HEAD
    this.joined2020 = joined2020;
    this.ogAccount = ogAccount;
=======
    this.newAccount = newAccount;
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  }
}
