---
title: 'Uniq First-Hand Purchase Example Project'

order: 4
---


# Uniq First-Hand Purchase Example Project

This page covers an example project that lets users buy, swap or exchange their Uniqs using first hand purchase functionality. For installation instructions refer to the repository itself.

Code is available here: https://github.com/ultraio/example-first-hand-purchase

## Use cases

- This project provides a reference implementation for integrating first hand purchase functionality into your web-based solution.

- Parts of the implementation can be extracted and reused as needed or you can simply update the code to your needs and deploy it as is.

- If your project requires users to be able to get Uniqs in any way without having a backend then this example project can benefit you as it operates as a static website and interacts with Ultra Blockchain directly.

- Since some of the settings of token factories are fixed during creation and cannot be changed you could utilize first-hand purchase functionality to let users exchange their token from existing factory to a new factory. This new factory could have different values for immutable settings (such as transferability window or tradeability window) and by exchanging a token you will effectively change those values.

## How it works

Following steps are performed to get the user from the stage of loading the page up to a point of successfully getting a new Uniq:

- User is first prompted to connect the [Ultra Wallet Extension](../../../products/ultra-wallet/index.md). This is used to figure out the user's blockchain account name and what network he is connected to. Most users will be using the Mainnet but for testing and validation purposes Testnet may be used. This is already supported so no need to do any extra steps besides selecting the correct environment in the wallet extension

- Factory ID must be provided next to specify which factory should be utilized to get purchase options from. As there potentially could be a high number of factories with purchase options available this filtering step is necessary for smooth operation. Additionally it is an unlikely scenario that you don't know which factories you are integrating with. In case it is not true you can adjust the code so it scans all the possible purchase option entries

- User inventory is scanned to figure out which Uniqs user already has and which can be used for any first-hand purchase as a form of payment or proof of ownership

- Then user is presented with only the purchase options that he has Uniqs available for (and options which require Uniqs as a form of payment or a proof to begin with). The additional UOS/USD price will be listed as well for user awareness.

- After user selects a first hand purchase option he will need to specify which Uniqs should be used as a payment or a proof of ownership. Uniqs used for `burn` or `transfer` will be take from user inventory later on when transaction is executed

- The final step is for user to sign a transaction. In case something goes wrong a pop up will be created stating a reason for a failure in a short form. This behavior and messaging can be updated based on your needs.

## How to integrate or modify

With this example project you have primarily two options:

1. Modify the project directly
    - In this case you don't need any extra steps besides just introducing the changes you are interested in
    - The changes you may want to add include: styling changes, updating logic for filtering of purchase options, adding custom logic or actions into assembled transaction to integrate with any other smart contract
2. Take out the necessary parts out of the implementation or use it as a reference
    - In case you believe the project does too much for what you need then you can analyze the code and take only parts of the implementation

## How to deploy

In case you decide to go with modifying the example project instead of integrating parts of it you can use the provided GitHub workflow within the repository as a reference. Workflow runs the build step which will generate the HTML files and associated JavaScript source code after which it can be deployed to any hosting solution of your choice including GitHub Pages.

Since this example project works as a static website with no backend you should have no problem hosting, operating or distributing it.