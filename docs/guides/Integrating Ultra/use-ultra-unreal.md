---
title: 'Using the Ultra Unreal Subsystem'
deploy: ['staging', 'mainnet']
outline: [0, 5]
order: 5
---

# Using the Ultra Unreal Subsystem

You'll need a `client_id` for this. To get one, [you can request one directly from Ultra](https://developers.ultra.io/guides/Integrating%20Ultra/requesting-a-client_id.html).

## Configuration

To configure Ultra's Unreal Online Subsystem, you need to edit the DefaultEngine.ini:

```ini
[OnlineSubsystem]
DefaultPlatformService=Ultra ; Set OnlineSubsystemUltra as default online subsystem

[OnlineSubsystemUltra]
bEnabled=true
; Authentication
ClientId="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" ; Mandatory - The Client Id given by Ultra
DispatcherUrl="https://api.ultracloud.ultra.io/dispatcherv2" ; Optional - The dispatcher URL (default: https://api.ultracloud.ultra.io/dispatcherv2)
AuthenticationUrl="https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect" ; Optional - The openid authentication URL (default: https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect)
bUseBrowser=false ; Optional - If true, the browser will be launched to prompt the user credentials otherwise the 'ApplicationProtocol' will be used to handle the login (default: false)
ApplicationProtocol=ultra ; Optional - If set to "ultra", the Ultra launcher will be called to login the user (default: ultra)
```

## Authentication

```
const IOnlineIdentityPtr IdentityInterface = Online->GetIdentityInterface();
FDelegateHandle Handle;
IdentityInterface->AddOnLoginCompleteDelegate_Handle(UserIndex, FOnLoginCompleteDelegate::CreateLambda([IdentityInterface, Handle](int32 LocalUserNum, bool Success, const FUniqueNetId& UserId, const FString& Error)
{
  IdentityInterface->ClearOnLoginCompleteDelegate_Handle(LocalUserNum, Handle);
  FString Nickname = IdentityInterface->GetPlayerNickname(LocalUserNum);
  // do something
}));
IdentityInterface->AutoLogin(UserIndex);
```
