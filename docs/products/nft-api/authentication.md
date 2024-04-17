---
title: 'Authentication'
deploy: ['staging', 'mainnet']
order: 2
---

# API Authentication Documentation

## Introduction

Welcome to the API Authentication Documentation for the Ultra API . This document provides guidelines and instructions for managing authentication when interacting with our API.

## How to register

To access our API endpoints, third-party clients must first obtain appropriate credentials depending on their application type.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

### Frontend Application Registration

For frontend applications, you need to obtain a registration token and a unique X-Client-ID. These credentials are essential for authenticating requests and identifying clients accessing our API. To request the registration token and X-Client-ID, please contact our support team at developers@ultra.io. They will guide you through the registration process and provide you with the necessary credentials to integrate with our API securely.

### Backend Application Registration

For backend applications, you'll need a client ID and a client secret. To set up authentication for your backend application, you must implement a client credentials flow. This integration enables your backend application to authenticate users through another backend securely. Please contact our support team at developers@ultra.io. They will guide you through the registration process and provide you with the necessary credentials to integrate with our API securely.

## Authentication Flow

The authentication flow for Ultra API depends on the type of application.

### Frontend Application Authentication Flow

When making requests to API endpoints from a frontend application, follow these steps:

-   Obtain Registration Token: Upon registration, users receive a unique registration token and X-Client-ID associated with their account.

-   Authentication Header: Include the registration token as the authentication bearer in the request header when making API requests. Use the Authorization: Bearer {registration_token} header.

-   Client Identification: Along with the registration token, clients must include their X-Client-ID parameter in the request header to identify themselves to the API.

### Backend Application Authentication Flow

For backend applications, follow these steps:

-   Obtain Client Credentials: Upon registration, obtain a client ID and client secret for your backend application.

-   Configure Backend Application: Configure your backend application for authentication. This typically involves setting up appropriate middleware or libraries to handle authentication using the client ID and client secret.

-   Implement Client Credentials Flow : Implement the authentication flow in your backend application according to the OAuth 2.0 and OpenID Connect specifications. Ensure that your backend application follows best practices for securely handling authentication tokens and user sessions.

## Examples

### Endpoints :

```yaml
# Sandbox:
https://staging.api.ultra.io/graphql
# Production:
https://api.ultra.io/graphql
```

### Login Example Frontend Application (cURL)

```bash
# Frontend Application
curl -X POST \
  -H "Authorization: Bearer {registration_token}" \
  -H "X-Client-ID: YourClientID" \
  https://api.example.com/your-endpoint
```

### Login Example Backend Application (cURL)

```bash
# Backend Application
curl -X POST \
  -H "client_id:YourClientID" \
  -H "client_secret: YourClientSecret" \
  -H "grant_type: client_credentials" \
  -H "scope: YourScope" \
  https://api.example.com/your-endpoint
```

## Error Handling

-   **Invalid Credentials**: When logging in with incorrect registration_token or X-Client-ID, the API responds with 401 Unauthorized.
-   **Unauthorized Access**: When accessing protected endpoints without a valid token, the API responds with 401 Unauthorized.

## Appendix

References

-   OpenID Connect Specifications: [OpenID](https://openid.net/)
-   OpenID Certified Relying Party Libraries : [OpenID Libraries](https://openid.net/developers/certified-openid-connect-implementations/)
