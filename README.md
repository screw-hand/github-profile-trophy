# Introduction

<p align="center"><img src="logo.png"><p>

> Do you know a version of [Github Profile Trophy (ryo-ma)](https://github.com/ryo-ma/github-profile-trophy)

So, this version will allows you to show all secret trophies instead of hidden it. [Rank Systems](#rank-systems)

It alse reduce their difficulty so you can easily set a nicer profile! [Change logs](#change-logs)

Moreover, in this file some modifications and improvements are added! [Change logs](#change-logs)

## Init Project

This repo is based on the fork [ryo-ma/github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy)
merged with [ucthienphong1120/github-trophies](https://github.com/lucthienphong1120/github-trophies).

```shel
git remote add upstream https://github.com/ryo-ma/github-profile-trophy.git
git fetch upstream -p
git remote add super-upstream https://github.com/lucthienphong1120/github-trophies.git
git fetch super-upstream -p

git merge upstream/master
git pull super-upstream main --allow-unrelated-histories
```

## Quick start

```
![](https://github-profile-trophy.screw-hand.vercel.app/?username=yourusername)
```

[![](https://github-profile-trophy.screw-hand.vercel.app/?username=lucthienphong1120)](https://github-profile-trophy.screw-hand.vercel.app/?username=lucthienphong1120)

About fully usage, you can check [How to use](/USAGE.md).

## Recommand Use

Using the query string parameter of `want[XX]` allows you to get the specified secret trophy unconditionally.

```
https://github-profile-trophy.screw-hand.vercel.app/?username=screw-hand&rank=SECRET&wantMultipleOrganizations=true
```

`want[xx]` full list:
```ts
wantAchieveSuperRank=true
wantMultipleLang=true
wantLongTimeAccount=true
wantAncientAccount=true
wantNewAccount=true
wantMultipleOrganizations=true
```

Specially, using wantALL allows you to use one parameter and get all secret trophies.

```
https://github-profile-trophy.screw-hand.vercel.app/?username=screw-hand&rank=SECRET&wantAll=true
```

Filter out trophies of the specified level (UNKNOWN, C)

```
https://github-profile-trophy.screw-hand.vercel.app/?username=screw-hand&rank=-UNKNOWN,-C
```

## Rank Systems

Base Trophies require

| Name of trophy | C | B | A | AA | AAA | S | SS | SSS | Difficult |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TotalStarTrophy | 1 | 10 | 20 | 50 | 100 | 250 | 500 | 1200 | Normal |
| TotalCommitTrophy | 1 | 10 | 100 | 200 | 500 | 700 | 1000 | 2000 | Normal |
| TotalFollowerTrophy | 1 | 10 | 20 | 50 | 100 | 200 | 500 | 1000 | Very Hard |
| TotalIssueTrophy | 1 | 5 | 10 | 20 | 50 | 100 | 200 | 500 | Hard |
| TotalPullRequestTrophy | 1 | 5 | 10 | 20 | 50 | 100 | 200 | 500 | Hard |
| TotalRepositoryTrophy | 1 | 10 | 20 | 30 | 40 | 50 | 70 | 100 | Easy |

Secret Trophies require 

| Name of trophy | Required to active |
| --- | --- |
| MultipleLangTrophy | at least 5 languages |
| AchieveSuperRankTrophy | have a SSS rank |
| NewAccountTrophy | signed in after 2020 |
| AncientAccountTrophy | signed in before 2010 |
| LongTimeAccountTrophy | more than 3 years |
| MultipleOrganizationsTrophy | joined 3 organizations |

## Self-modify

You'll have to deploy yourself, for [Vercel](/VercelDeployGuide.md) or [localhost](/LocalDeployGuide.md)

## Change logs

- Filter by ranks support UNKOWN
- `want[XX]` and `wantAll` query string to get secret trophy
- show all trophies including secret and unreached (conditions remain the same)
- renewing trophy "AchieveSuperRankTrophy" instead of "AllSuperRankTrophy"
- condition of "AchieveSuperRankTrophy" from `every` to `at least one`
- renewing trophy "NewAccountTrophy" instead of "NewAccountTrophy"
- condition of "NewAccountTrophy" from `==2020` to `>=2020`
- unit system of "LongTimeAccountTrophy" from `pt` to `year(s)`
- condition of "LongTimeAccountTrophy" from `10years` to `3years`
- Open the "wantAllSuperRank" and "wantMultipleLang" trophies by default (conditions is 0)
- conditions of "MultipleOrganizations" from `3` to `1` (open by default)
- change the distance between conditions and reduce the difficulty of "TotalStarTrophy"
  - A Rank from `30` to `25`
  - S Rank from `200` to `250`
  - SS Rank from `700` to `500`
  - SSS Rank from `2000` to `1200`
- change the distance between conditions and reduce the difficulty of "TotalCommitTrophy"
  - S Rank from `1000` to `700`
  - SS Rank from `2000` to `1000`
  - SSS Rank from `4000` to `2000`
- change condition of "TotalFollowerTrophy"
  - SS Rank from `400` to `500`
- change the distance between conditions and reduce the difficulty of "TotalIssueTrophy"
  - B Rank from `10` to `5`
  - A Rank from `20` to `10`
  - AA Rank from `50` to `20`
  - AAA Rank from `100` to `50`
  - S Rank from `200` to `100`
  - SS Rank from `500` to `200`
  - SSS Rank from `1000` to `500`
- change the distance between conditions and reduce the difficulty of "TotalPullRequestTrophy"
  - B Rank from `10` to `5`
  - A Rank from `20` to `10`
  - AA Rank from `50` to `20`
  - AAA Rank from `100` to `50`
  - S Rank from `200` to `100`
  - SS Rank from `500` to `200`
  - SSS Rank from `1000` to `500`
- change the distance between conditions and reduce the difficulty of "TotalRepositoryTrophy"
  - AAA Rank from `50` to `40`
  - S Rank from `80` to `50`
  - SS Rank from `90` to `70`

If you choose to use my deployment, it would be really appreciated if you gave me a star :star:

## See also

> [Github Profile Maker](https://github.com/lucthienphong1120/github-profile-maker)

