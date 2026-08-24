---
title: 'AI Assistant'

order: 1
outline: [0, 4]
---

# AI Assistant

The Ultra Tool Kit includes a built-in **AI Assistant** that lets you describe a blockchain transaction in plain English and turns it into a ready-to-sign action — or a multisig proposal — without manually filling in the Transaction Builder.

You describe what you want to do (for example, _"transfer 100 UOS from acc1 to acc2"_), and the assistant figures out the correct contract, action, and fields, validates them against Ultra's on-chain contracts, and hands you a transaction to review and sign. The assistant **never signs on your behalf** — every action is signed by you through your wallet, exactly like any other transaction in the Tool Kit.

## Where to find it

The AI Assistant is available on every page of the Tool Kit. Click the **chat bubble icon** in the top-right of the header (next to the network selector) to open the assistant drawer.

![](/images/toolkit-ai-button.png)

## Requirements

The AI Assistant is gated behind your wallet:

1. **Sign in** — You must be logged in to the Tool Kit with a wallet (Ultra Wallet, Ledger, or Anchor). When you are signed out, the drawer shows a `Sign in` button instead of the message box.

    ![](/images/toolkit-ai-signin.png)

2. **Hold UOS** — Your account needs to hold a minimum amount of UOS to unlock the assistant. If your balance is below the threshold, the drawer tells you how much UOS is required and how much your account currently holds.

3. **Daily budget** — Usage is metered by a small daily budget (shown at the bottom of the drawer). Staking more UOS raises your daily AI budget up to the maximum tier.

## How to use it

1. Open the assistant and type a request in plain English in the message box, for example:

    - _"transfer 100 UOS from acc1 to acc2"_
    - _"buy 1024 bytes of RAM for myaccount"_
    - _"create a proposal to update the permissions on myaccount"_

    Press the send button (or `Cmd/Ctrl + Enter`) to submit.

    ![](/images/toolkit-ai-prompt.png)

2. The assistant replies with one of the following:

    | Reply | What it means |
    | --- | --- |
    | **Action** | One or more validated blockchain actions, shown as `contract::action` with the resolved fields. Review them and click **Sign & submit** (Ultra Wallet / Web Wallet) or sign in the transaction modal (Ledger / Anchor). |
    | **Proposal** | A multisig (`eosio.msig`) proposal. You can edit the proposal name, expiration, and requested approvers before signing with **Sign & submit proposal**. |
    | **Question** | A clarifying question — answer it inline to continue. |
    | **Answer** | An informational answer (for example, an explanation of what a contract does). |
    | **Declined** | The request was out of scope, rate-limited, or your balance/budget was insufficient. The assistant explains why. |

3. Review the action or proposal carefully, then sign it with your wallet. On success, the assistant shows a confirmation with the transaction hash.

    ![](/images/toolkit-ai-action.png)

### Multisig proposals

When your request requires multiple approvers, the assistant returns a **proposal** card instead of a direct action. You can:

-   Set a **proposal name** (max 13 characters).
-   Set an **expiration** (leave blank for 30 days).
-   Add the **requested approvers** — the assistant warns you if an approver account can't be found on-chain.

Then click **Validate** to check the proposal, and **Sign & submit proposal** to publish it for approval. Approving and executing proposals is done from the [Proposals](https://toolkit.ultra.io/) section of the Tool Kit.

![](/images/toolkit-ai-proposal.png)

## Good to know

-   **You are always in control.** The assistant only prepares transactions; nothing is broadcast until you sign it.
-   **Validated against real contracts.** Action names and fields are checked against Ultra's deployed contracts before being shown to you, so the assistant won't invent actions that don't exist.
-   **Reset anytime.** Use the reset button in the drawer header to clear the conversation and start a new session.

## Tutorials & Help

-   [Tutorial - Log in to the Ultra Tool Kit](../../tutorials/fundamentals/tutorial-login-to-toolkit.md)
-   [Introduction to the Ultra Tool Kit](./index.md)
