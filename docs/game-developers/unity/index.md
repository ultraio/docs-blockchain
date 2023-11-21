---
title: 'Getting the Ultra Unity Plugin'

outline: [0, 5]
order: 2
---

# Getting the Ultra Unity Plugin

To connect the Ultra client to your Unity-based game, you must use our Unity plugin. The plugin passes the user's wallet id and an auth token into Unity from Ultra's client. This is used to connect to Braincloud's SDK and authenticate.

Before you get started, please make sure to get your [client_id](../web/get-client-id.md), as you'll need this to be able to use the Ultra Unity Plugin.

## Getting the Ultra Unity Plugin

We provide access to the Ultra Unity plugin via a public repository.

[Download the Unity plugin here](https://github.com/ultraio/unity-auth-plugin)

## Installing the Ultra Unity Plugin

The Ultra Unity Plugin is based on UPM (Unity Package Manager). As of now it's not published to any registry so you will have to manually install the package with one of the following approaches:

### With a clone of the repository

-   Open the Package Manager (Window > Package Manager)
-   Click the `+` icon and select `Add package from disk`
-   Select the root folder of the plugin

### With a git URL

-   Open the Package Manager (Window > Package Manager)
-   Click the `+` icon and select `Add Package from git URL`

### Unity Compatibility

The plugin has been created and tested with Unity 2021.

## Example Project

We provide an example project which you can download and explore. It not only uses the Ultra Unity Plugin, but also integrates

[Bombers Example Project](https://github.com/ultraio/unity-bombers)

We need to cover:

-   What is the Unity plugin
-   What does the Unity plugin do?
-   where to get the unity plugin
-   how to install it
-   how to use it to connect to the ultra client
    -   what do you need? (auth links, client_id)
