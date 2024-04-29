## Getting Started

This repo is forked from [fazt/nodejs-mysql-links](https://github.com/fazt/nodejs-mysql-links). Compared with the original repo,

- Port is changed to 80 for production
- Add SSL when connecting to Azure MySql to follow Azure security practice

### Prepare

Prepare Code to Cloud environment by following the steps below, or check [Code to Cloud readme](https://github.com/Azure/codeToCloud) to learn more.

1. Install VSCode-Insider.
2. Install extension Github Copilot, Github Copilot Chat and login to Copilot.
3. Clone the Code to Cloud project and checkout to stable branch.
   ```cmd
   git clone https://github.com/Azure/codeToCloud.git
   git checkout stable
   ```
4. Open the project with VSCode-Insider
   ```cmd
   code-insiders --enable-proposed-api Microsoft.codetocloud codeToCloud/
   ```
5. Install dependencies via `npm install` at the project root folder.
6. Run `Debug` task to start a debug window.
7. In debug VSCode window, open the project you want to test with CodeToCloud
8. In debug Copilot chat window, run `@codetocloud /recommend`
9. In debug Copilot chat window, run `@codetocloud /generate`

### Path 1. azd

1. Clone repo

```cmd
git clone https://github.com/houk-ms/nodejs-mysql-links
```

2. Init the repo with `azd init`

```cmd
cd nodejs-mysql-links/
azd init
```

3. Deploy to Azure

```cmd
azd up
```

### Path 2. CodeToCloud + azd

1. Clone repo

```cmd
git clone https://github.com/houk-ms/nodejs-mysql-links
```

2. Open the project in debug VSCode Insider window, init the repo with CodeToCloud.

   * `@codetocloud /recommend`: run this command in Github Copilot to analyze codes and get recommended azure services
   * `@codetocloud /generate`: run this command to generate bicep files and make the repo azd compatible
3. Deploy to Azure

```cmd
azd up
```
