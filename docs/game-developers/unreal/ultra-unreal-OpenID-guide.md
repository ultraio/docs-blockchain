---
title: 'Ultra Unreal OpenID guide'

outline: [0, 5]
order: 5
---

# Ultra Unreal OpenID guide

If you're a developer working on Unreal, have an established game, and would like to deploy your game to Ultra Games, then this guide is for you.

You'll be using OpenID to connect via Epic's Online Service.

To have access to Ultra's OpenID, each development partner must [request a client_id](../web/get-client-id.md) from Ultra.

## 1. Select Product Settings

![](/images/ultra-unreal-OpenID-guide/image2.png)

## 2. Select Identity Providers

![](/images/ultra-unreal-OpenID-guide/image5.png)

## 3. Add Identity Provider

![](/images/ultra-unreal-OpenID-guide/image4.png)

## 4. Select OpenID

Input the following
![](/images/ultra-unreal-OpenID-guide/image3.png)

Easy copying:

-   issuer - https://auth.ultra.io/auth/realms/ultraio
-   jwks_uri - https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect/certs

## 5.Set it in your Sandboxes so that you can use it

Set the Sandbox
![](/images/ultra-unreal-OpenID-guide/image1.png)

Make sure to select Ultra.io!
![](/images/ultra-unreal-OpenID-guide/image6.png)
