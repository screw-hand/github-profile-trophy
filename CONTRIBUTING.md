# Contribution Guide

## Environment

* Deno >= v1.9.2
* [Vercel](https://vercel.com/)
* GitHub API v4

## Development In vscode

[Using Visual Studio Code | Manual | Deno](https://deno.com/manual@v1.34.2/references/vscode_deno)
install vscode extensions: [Deno - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

`.vscode/.settings.json`
```json
{
  "deno.enable": true,
  "deno.unstable": true
}
```

open the repo with vscode.

## Local Run

Create `.env` file to project root directory, and write your GitHub token to the `.env` file.
Please select the authority of `repo` when creating token.

```properties
GITHUB_TOKEN1=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GITHUB_TOKEN2=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# if using GitHub Enterprise:
# (this env var defaults to https://api.github.com/graphql)
GITHUB_API=https://github.example.com/api/graphql
```

Run local server.

```sh
./bin/dev
```

or

```sh
deno run --allow-net --allow-read --allow-env debug.ts
```

Open localhost from your browser.

http://localhost:8080/?username=screw-hand

## Editor config

Read the [.editorconfig](./.editorconfig)

## Run deno lint

If you want to contribute to my project, you should check the lint with the following command.

```sh
./bin/lint
```

```sh
deno lint --unstable
```
