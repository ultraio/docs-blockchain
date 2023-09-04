---
title: 'Getting the Ultra Unreal Subsystem'
deploy: ['staging', 'mainnet']
outline: [0, 5]
order: 4
---

# Getting the Ultra Unreal Subsystem

To connect the Ultra client to your Unity-based game, you must use our Ultra Unreal Subsystem. The subsystem passes the user's wallet id and an auth token into Unreal from Ultra's client. This is used to connect to Braincloud's SDK and authenticate.

Before you get started, please make sure to get your [client_id](./requesting-a-client_id.md), as you'll need this to be able to use the Ultra Unity Plugin.

## Getting the Ultra Unreal Subsystem

We provide access to the Ultra Unity plugin via a public repository.

[Download the Ultra Unreal Subsystem here](https://github.com/ultraio/UltraUnrealOnlineSubsystem)

## Installing the Ultra Unreal Subsystem

The Ultra Unreal Subsystem is not published to any registry so you will have to manually install the package:

-   Clone the Repository
-   Add the plugin to your project YourProjectName/Plugins/OnlineSubsystemUltra
-   Start Unreal Editor
-   Go to Edit / Plugins
-   Search OnlineSubsystemUltra
-   Enable the plugin
-   Setup OnlineSubsystemUltra in DefaultEngine.ini (see Configuration below for more details)
