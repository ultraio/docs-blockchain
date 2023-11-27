---
title: 'Getting Started'
order: -9
oultine: [0, 4]
---

# Before Starting

Install the programs below, most if not all of them are required.

- Google Chrome, or Chromium Equivalent
- [Ultra Wallet Extension](https://chromewebstore.google.com/detail/ultra-wallet/kjjebdkfeagdoogagbhepmbimaphnfln)
- [NodeJS](https://nodejs.org/en/download)
- [VSCode Editor, IDE](https://code.visualstudio.com/)

## Setup

Open up a command line interface in the location where you want to start building a project. For this tutorial we are doing it on a separate drive in a folder called projects.

Run the following command, and type (y) to confirm.

```
npm create vite@latest
```

![](./images/vitepress-create-proceed.png)

![](./images/vitepress-create-after.png)

As you can see, I've created a project utilizing `Vue` with `JavaScript` as the main programming language.

The project title is `ultra-project`.

We now we need to run the commands `vite` printed out to the console.

```sh
cd ultra-project
npm install
npm run dev
```

If successful we should see a new empty project in our browser of choice.

![](./images/vitepress-server-started.png)

If we navigate to the URL printed in the terminal in our browser, you should see a page greeting us.

![](./images/vitepress-new-app.png)

Success! Let's move on to the next steps.