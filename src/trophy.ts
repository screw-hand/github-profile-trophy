import { getTrophyIcon, getNextRankBar } from "./icons.ts";
import { CONSTANTS, RANK, abridgeScore, RANK_ORDER } from "./utils.ts";
import { Theme } from "./theme.ts";

class RankCondition {
  constructor(
    readonly rank: RANK,
    readonly message: string,
    readonly requiredScore: number,
  ) {}
}

<<<<<<< HEAD
=======
let wantAchieveSuperRank = false;
let wantMultipleLang = true;
let wantLongTimeAccount = true;
let wantAncientAccount = false;
let wantNewAccount = false;
let wantMultipleOrganizations = true;
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87

export class Trophy {
  rankCondition: RankCondition | null = null;
  rank: RANK = RANK.UNKNOWN;
  topMessage = "Unknown";
  bottomMessage = "0";
  title = "";
  filterTitles: Array<string> = [];
  hidden = false;
  constructor(
    private score: number,
    private rankConditions: Array<RankCondition>,
  ) {
    this.bottomMessage = abridgeScore(score);
    this.setRank();
  }
  setRank() {
    const sortedRankConditions = this.rankConditions.sort((a, b) =>
      RANK_ORDER.indexOf(a.rank) - RANK_ORDER.indexOf(b.rank)
    );
    // Set the rank that hit the first condition
    const rankCondition = sortedRankConditions.find((r) =>
      this.score >= r.requiredScore
    );
    if (rankCondition != null) {
      this.rank = rankCondition.rank;
      this.rankCondition = rankCondition;
      this.topMessage = rankCondition.message;
    }
  }
  private calculateNextRankPercentage() {
    if (this.rank === RANK.UNKNOWN) {
      return 0;
    }
    const nextRankIndex = RANK_ORDER.indexOf(this.rank) - 1;
    // When got the max rank
    if (nextRankIndex < 0 || this.rank === RANK.SSS) {
      return 1;
    }
    const nextRank = RANK_ORDER[nextRankIndex];
    const nextRankCondition = this.rankConditions.find((r) =>
      r.rank == nextRank
    );
    const distance = nextRankCondition!.requiredScore -
      this.rankCondition!.requiredScore;
    const progress = this.score - this.rankCondition!.requiredScore;
    const result = progress / distance;
    return result;
  }
  render(theme: Theme,
    x = 0,
    y = 0,
    panelSize = CONSTANTS.DEFAULT_PANEL_SIZE,
    noBackground = CONSTANTS.DEFAULT_NO_BACKGROUND,
    noFrame = CONSTANTS.DEFAULT_NO_FRAME,
  ): string {
    const { BACKGROUND: PRIMARY, TITLE: SECONDARY, TEXT, NEXT_RANK_BAR } = theme;
    const nextRankBar = getNextRankBar(
      this.title,
      this.calculateNextRankPercentage(),
      NEXT_RANK_BAR,
    );
    return `
        <svg
          x="${x}"
          y="${y}"
          width="${panelSize}"
          height="${panelSize}"
          viewBox="0 0 ${panelSize} ${panelSize}"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            rx="4.5"
            width="${panelSize - 1}"
            height="${panelSize - 1}"
            stroke="#e1e4e8"
            fill="${PRIMARY}"
            stroke-opacity="${noFrame ? '0' : '1'}"
            fill-opacity="${noBackground ? '0' : '1'}"
          />
          ${getTrophyIcon(theme, this.rank)}
          <text x="50%" y="18" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji" font-weight="bold" font-size="13" fill="${SECONDARY}">${this.title}</text>
          <text x="50%" y="85" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji" font-weight="bold" font-size="10.5" fill="${TEXT}">${this.topMessage}</text>
          <text x="50%" y="97" text-anchor="middle" font-family="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji" font-weight="bold" font-size="10" fill="${TEXT}">${this.bottomMessage}</text>
          ${nextRankBar}
        </svg>
        `;
  }
}

export class MultipleLangTrophy extends Trophy{
  constructor(score: number){
    const rankConditions = [
      new RankCondition(
        RANK.SECRET,
        "Rainbow Lang User",
<<<<<<< HEAD
        10,
=======
        (wantMultipleLang) ? 5 : 10,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
    ];
    super(score, rankConditions);
    this.title = "MultiLanguage";
    this.filterTitles = ["MultipleLang", "MultiLanguage"];
<<<<<<< HEAD
    this.hidden = true;
  }
}

export class AllSuperRankTrophy extends Trophy{
=======
    this.hidden = false;
  }
}

export class AchieveSuperRankTrophy extends Trophy{
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  constructor(score: number){
    const rankConditions = [
      new RankCondition(
        RANK.SECRET,
<<<<<<< HEAD
        "S Rank Hacker",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "AllSuperRank";
    this.filterTitles = ["AllSuperRank"];
    this.bottomMessage = "All S Rank"
    this.hidden = true;
  }
}
export class Joined2020Trophy extends Trophy{
=======
        "SSS Rank Hacker",
        (wantAchieveSuperRank) ? 0 : 1,
      ),
    ];
    super(score, rankConditions);
    this.title = "AchieveSSSRank";
    this.filterTitles = ["AchieveSuperRank"];
    this.bottomMessage = "Have SSS Rank";
    this.hidden = false;
  }
}
export class NewAccountTrophy extends Trophy{
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  constructor(score: number){
    const rankConditions = [
      new RankCondition(
        RANK.SECRET,
        "Everything started...",
<<<<<<< HEAD
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "Joined2020";
    this.filterTitles = ["Joined2020"];
    this.bottomMessage = "Joined 2020"
    this.hidden = true;
=======
        (wantNewAccount) ? 0 : 1,
      ),
    ];
    super(score, rankConditions);
    this.title = "NewUser";
    this.filterTitles = ["NewUser"];
    this.bottomMessage = "After 2020";
    this.hidden = false;
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  }
}
export class AncientAccountTrophy extends Trophy{
  constructor(score: number){
    const rankConditions = [
      new RankCondition(
        RANK.SECRET,
        "Ancient User",
<<<<<<< HEAD
        1,
=======
        (wantAncientAccount) ? 0 : 1,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
    ];
    super(score, rankConditions);
    this.title = "AncientUser";
    this.filterTitles = ["AncientUser"];
<<<<<<< HEAD
    this.bottomMessage = "Before 2010"
    this.hidden = true;
=======
    this.bottomMessage = "Before 2010";
    this.hidden = false;
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  }
}
export class LongTimeAccountTrophy extends Trophy{
  constructor(score: number){
    const rankConditions = [
      new RankCondition(
        RANK.SECRET,
        "Village Elder",
<<<<<<< HEAD
        10,
=======
        (wantLongTimeAccount) ? 0 : 3,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
    ];
    super(score, rankConditions);
    this.title = "LongTimeUser";
    this.filterTitles = ["LongTimeUser"];
<<<<<<< HEAD
    this.hidden = true;
  }
}
=======
    this.bottomMessage = score + ((score>0) ? "years" : "year");
    this.hidden = false;
  }
}

>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
export class MultipleOrganizationsTrophy extends Trophy{
  constructor(score: number){
    const rankConditions = [
      new RankCondition(
        RANK.SECRET,
        // or if this doesn't render well: "Factorum"
        "Jack of all Trades",
<<<<<<< HEAD
        3,
=======
        (wantMultipleOrganizations) ? 1 : 3,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
    ];
    super(score, rankConditions);
    this.title = "Organizations";
    this.filterTitles = ["Organizations", "Orgs", "Teams"];
<<<<<<< HEAD
    this.hidden = true;
  }
}

export class OGAccountTrophy extends Trophy{
  constructor(score: number){
    const rankConditions = [
      new RankCondition(
        RANK.SECRET,
        "OG User",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "OGUser";
    this.filterTitles = ["OGUser"];
    this.bottomMessage = "Joined 2008"
    this.hidden = true;
  }
}

export class TotalReviewsTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(
        RANK.SSS,
        "God Reviewer",
        70,
      ),
      new RankCondition(
        RANK.SS,
        "Deep Reviewer",
        57,
      ),
      new RankCondition(
        RANK.S,
        "Super Reviewer",
        45,
      ),
      new RankCondition(
        RANK.AAA,
        "Ultra Reviewer",
        30,
      ),
      new RankCondition(
        RANK.AA,
        "Hyper Reviewer",
        20,
      ),
      new RankCondition(
        RANK.A,
        "Active Reviewer",
        8,
      ),
      new RankCondition(
        RANK.B,
        "Intermediate Reviewer",
        3,
      ),
      new RankCondition(
        RANK.C,
        "New Reviewer",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "Reviews";
    this.filterTitles = ["Review", "Reviews"];
=======
    this.hidden = false;
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
  }
}

export class TotalStarTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(
        RANK.SSS,
        "Super Stargazer",
<<<<<<< HEAD
        2000,
=======
        1200,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.SS,
        "High Stargazer",
<<<<<<< HEAD
        700,
=======
        500,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.S,
        "Stargazer",
<<<<<<< HEAD
        200,
=======
        250,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AAA,
        "Super Star",
        100,
      ),
      new RankCondition(
        RANK.AA,
        "High Star",
        50,
      ),
      new RankCondition(
        RANK.A,
        "You are a Star",
<<<<<<< HEAD
        30,
=======
        25,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.B,
        "Middle Star",
        10,
      ),
      new RankCondition(
        RANK.C,
        "First Star",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "Stars";
    this.filterTitles = ["Star", "Stars"];
  }
}

export class TotalCommitTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(
        RANK.SSS,
        "God Committer",
<<<<<<< HEAD
        4000,
=======
        2000,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.SS,
        "Deep Committer",
<<<<<<< HEAD
        2000,
=======
        1000,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.S,
        "Super Committer",
<<<<<<< HEAD
        1000,
=======
        700,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AAA,
        "Ultra Committer",
        500,
      ),
      new RankCondition(
        RANK.AA,
        "Hyper Committer",
        200,
      ),
      new RankCondition(
        RANK.A,
        "High Committer",
        100,
      ),
      new RankCondition(
        RANK.B,
        "Middle Committer",
        10,
      ),
      new RankCondition(
        RANK.C,
        "First Commit",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "Commits";
    this.filterTitles = ["Commit", "Commits"];
  }
}

export class TotalFollowerTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(
        RANK.SSS,
        "Super Celebrity",
        1000,
      ),
      new RankCondition(
        RANK.SS,
        "Ultra Celebrity",
<<<<<<< HEAD
        400,
=======
        500,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.S,
        "Hyper Celebrity",
        200,
      ),
      new RankCondition(
        RANK.AAA,
        "Famous User",
        100,
      ),
      new RankCondition(
        RANK.AA,
        "Active User",
        50,
      ),
      new RankCondition(
        RANK.A,
        "Dynamic User",
        20,
      ),
      new RankCondition(
        RANK.B,
        "Many Friends",
        10,
      ),
      new RankCondition(
        RANK.C,
        "First Friend",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "Followers";
    this.filterTitles = ["Follower", "Followers"];
  }
}

export class TotalIssueTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(
        RANK.SSS,
        "God Issuer",
<<<<<<< HEAD
        1000,
=======
        500,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.SS,
        "Deep Issuer",
<<<<<<< HEAD
        500,
=======
        200,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.S,
        "Super Issuer",
<<<<<<< HEAD
        200,
=======
        100,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AAA,
        "Ultra Issuer",
<<<<<<< HEAD
        100,
=======
        50,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AA,
        "Hyper Issuer",
<<<<<<< HEAD
        50,
=======
        20,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.A,
        "High Issuer",
<<<<<<< HEAD
        20,
=======
        10,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.B,
        "Middle Issuer",
<<<<<<< HEAD
        10,
=======
        5,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.C,
        "First Issue",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "Issues";
    this.filterTitles = ["Issue", "Issues"];
  }
}

export class TotalPullRequestTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(
        RANK.SSS,
        "God Puller",
<<<<<<< HEAD
        1000,
=======
        500,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.SS,
        "Deep Puller",
<<<<<<< HEAD
        500,
=======
        200,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.S,
        "Super Puller",
<<<<<<< HEAD
        200,
=======
        100,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AAA,
        "Ultra Puller",
<<<<<<< HEAD
        100,
=======
        50,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AA,
        "Hyper Puller",
<<<<<<< HEAD
        50,
=======
        20,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.A,
        "High Puller",
<<<<<<< HEAD
        20,
=======
        10,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.B,
        "Middle Puller",
<<<<<<< HEAD
        10,
=======
        5,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.C,
        "First Pull",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "PullRequest";
    this.filterTitles = ["PR", "PullRequest", "Pulls", "Puller"];
  }
}

export class TotalRepositoryTrophy extends Trophy {
  constructor(score: number) {
    const rankConditions = [
      new RankCondition(
        RANK.SSS,
        "God Repo Creator",
        100,
      ),
      new RankCondition(
        RANK.SS,
        "Deep Repo Creator",
<<<<<<< HEAD
        90,
=======
        70,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.S,
        "Super Repo Creator",
<<<<<<< HEAD
        80,
=======
        50,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AAA,
        "Ultra Repo Creator",
<<<<<<< HEAD
        50,
=======
        40,
>>>>>>> 8ed4ccda2839a520a250184eba4bf67c7626cb87
      ),
      new RankCondition(
        RANK.AA,
        "Hyper Repo Creator",
        30,
      ),
      new RankCondition(
        RANK.A,
        "High Repo Creator",
        20,
      ),
      new RankCondition(
        RANK.B,
        "Middle Repo Creator",
        10,
      ),
      new RankCondition(
        RANK.C,
        "First Repository",
        1,
      ),
    ];
    super(score, rankConditions);
    this.title = "Repositories";
    this.filterTitles = ["Repo", "Repository", "Repositories"];
  }
}
