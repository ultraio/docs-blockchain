# Blockchain Documentation

## Installation

**Node V18+ is required.**

If you are using `nvm` use `nvm use 18`.

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

### All Files

**This has live updates, and renders all files.**

```
npm run dev
```

### Experimental

**This does not update live**

```
npm run dev:experimental
```

### Staging

**This does not update live**

```
npm run dev:staging
```

### Mainnet

**This does not update live**

```
npm run dev:mainnet
```

## Build

Builds a static version of the website that can be deployed anywhere.

```
npm run build:all
```

# Extended Functionality

## File Environment Extension Guide

Deployments are based on the name.

Any file with the extension `.experimental.md` or `.mainnet.md` or `.staging.md` will only be deployed to their respective environments.

If the file **does not contain** any of the above extensions, it will be deployed to all environments.

### A Note About Links

When you are linking an `environment extension` file, **DO NOT APPEND** `staging`, `mainnet`, or `experimental`.

This means if you have a file named `test.experimental.md`, you should link it as the following:

```
[My Test File](./test.md);
```

## Environment Sections

If you need one file in `docs` to have specific content for a specific `environment` you can use these tags as long as the changes **do not include** an `environment extension link`.

They support `inline` as well.

**You cannot use links inside of these sections, they are meant for small text edits.**

```html
<Experimental>
Only shows in experimental
</Experimental>

<Staging>
Only shows in staging
</Staging>

<Mainnet>
Only shows in mainnet
</Mainnet>
```

## Environment-Specific Navigation Configuration

For more complex environment-specific navigation changes (such as adding/removing entire menu sections), the documentation system supports environment-specific sidebar and navbar configurations.

### Sidebar Configuration

Located in `/docs/.vitepress/sidebars/`:
- **`base.ts`** - Base sidebar configuration used by all environments
- **`staging.ts`** - Staging-specific additions/overrides
- **`mainnet.ts`** - Mainnet-specific additions/overrides

The system merges base + environment-specific configurations using the `getSidebar()` function:

```typescript
// In config.ts
sidebar: getSidebar('base')        // For base/experimental
sidebar: getSidebar('staging')     // For staging (base + staging additions)
sidebar: getSidebar('mainnet')     // For mainnet (base + mainnet additions)
```

### Navbar Configuration

Located in `/docs/.vitepress/navbars/`:
- **`base.ts`** - Base navbar configuration used by all environments
- **`staging.ts`** - Staging-specific navbar (can override entire sections)
- **`mainnet.ts`** - Mainnet-specific navbar additions/overrides
- **`navbar.ts`** - Contains the `getNavbar()` function that handles environment logic

The system uses environment-specific navbar configurations using the `getNavbar()` function:

```typescript
// In config.ts
nav: getNavbar('base')        // For base/experimental
nav: getNavbar('staging')     // For staging
nav: getNavbar('mainnet')     // For mainnet
```

### When to Use Each Approach

- **Environment tags** (`<Staging>`, `<Mainnet>`, `<Experimental>`): 
  - Use for small text changes within content files
  - **Cannot contain links**
  - Good for environment-specific notes, warnings, or instructions

- **Environment-specific sidebars/navbars**:
  - Use for adding/removing entire navigation sections
  - Can contain links and complex navigation structures
  - Good for environment-specific tutorials, features, or products

### Example Use Cases

**Environment Tags**: Different API endpoints per environment
```html
Base URL: <Staging>https://api.staging.ultra.io</Staging><Mainnet>https://api.ultra.io</Mainnet>
```

**Environment-Specific Navigation**: Adding staging-only tutorials
```typescript
// In staging.ts sidebar
'/tutorials/index': [
    {
        text: 'Ultra Bridge', // Only appears in staging
        items: getMarkdownFiles('/tutorials/ultra-bridge'),
        collapsed: true,
    },
],
```

## File Order Guide

`order` is an optional property in the front matter at the top.

Specifying the order as a lesser number ensures it is higher up in the sidebar.

ie.
- -99999999 - Highest
- 1 - High
- 2 - Medium
- 3 - Low
- 99 - Lowest

```md
---
title: 'Example Markdown File'
order: -999
---

# Example Markdown File

Placeholder
```