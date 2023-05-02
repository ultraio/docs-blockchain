# Blockchain Documentation

## Installation

**Node V16+ is required.**

If you are using `nvm` use `nvm use 16`.

```
npm i
```

## Preview

After running the command below the documentation usually opens in the browser under [http://localhost:5173/](http://localhost:5173/).

Always use `experimental` for general document writing. The files update instantly in the browser.

**Tips**

-   It is **highly recommended** to turn on `disable cache` in your Browser while working on documentation.

![](https://i.imgur.com/hWf6Xod.png)

-   If you create any new pages you will need to stop vitepress, and restart the preview.
-   You can actively preview changes to a single document in the browser while a dev command is running, meaning the page auto-refreshes.

### Experimental

```
npm run dev
```

### Staging

```
npm run dev:staging
```

### Mainnet

```
npm run dev:mainnet
```

## Build

Builds a static version of the website that can be deployed anywhere.

You can also build all versions with `npm run build:all`.

### Experimental

```
npm run build
```

### Staging

```
npm run build:staging
```

### Mainnet

```
npm run build:mainnet
```

## File Deployment Guide

Each file has a `deploy` property in the front matter tag at the top of the file. 

If you wish to deploy to other environments do the following:

```md
---
title: 'Example Markdown File'
order: 0
deploy: ['staging', 'mainnet']
---

# Example Markdown File

Placeholder
```

## File Order Guide

`order` is an optional property in the front matter at the top.

Specifying the order as a greater number ensures it is higher up in the sidebar.

However, if you want to go lower you can specify a negative number.

The max value ranges between `-9007199254740991` <-> `9007199254740991`.

```md
---
title: 'Example Markdown File'
order: 0
deploy: ['staging', 'mainnet']
---

# Example Markdown File

Placeholder
```
