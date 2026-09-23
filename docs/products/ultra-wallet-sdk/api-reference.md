---
title: 'API Reference'

order: 9
outline: [0, 3]
---

# API Reference

Everything below can be imported from `@ultraos/wallet-sdk`.

```ts
import {
    UltraWalletSDK,
    ResponseStatus,
    SdkErrorCode,
    SDK_ERROR_MESSAGE,
    type UltraWalletSdkOptions,
    type ConnectParams,
    type ConnectResult,
    type BlockchainTransaction,
    type SignTransactionOptions,
    type SignTransactionResult,
    type UltraResponse,
} from '@ultraos/wallet-sdk';
```

## UltraWalletSDK

```ts
class UltraWalletSDK {
    constructor(options?: UltraWalletSdkOptions);

    // Connection
    connect(params?: ConnectParams): Promise<UltraResponse<ConnectResult>>;
    disconnect(): Promise<UltraResponse<boolean>>;

    // Signing
    signMessage(message: string): Promise<UltraResponse<SignMessageResult>>;
    signTransaction(
        transaction: BlockchainTransaction | BlockchainTransaction[],
        options?: SignTransactionOptions,
    ): Promise<UltraResponse<SignTransactionResult>>;

    // Accounts (extension only)
    getAccounts(): Promise<UltraResponse<AccountInfo[]>>;
    getSelectedAccount(): Promise<UltraResponse<AccountInfo>>; // null at runtime when untrusted/locked
    getAvailableAuthorizations(): Promise<UltraResponse<AvailableAuth[]>>;

    // Networks
    getChainId(): Promise<UltraResponse<string>>;
    getNetwork(): Promise<UltraResponse<NetworkDetails>>; //    extension only
    getNetworks(): Promise<UltraResponse<NetworkDetails[]>>; // extension only
    switchNetwork(chainId: string): Promise<UltraResponse<void>>; // extension only

    // Events (extension only)
    on(event: WalletEventType, callback: (data: any) => void): void;
    off(event: WalletEventType, callback: (data: any) => void): void;

    // Lifecycle
    dispose(): void;
}
```

| Method | Guide |
| ------ | ----- |
| `connect`, `disconnect` | [Connecting](./connecting.md) |
| `signMessage`, `signTransaction` | [Signing](./signing.md) |
| `getAccounts`, `getSelectedAccount`, `getAvailableAuthorizations`, `getChainId`, `getNetwork`, `getNetworks`, `switchNetwork` | [Accounts & Networks](./accounts-and-networks.md) |
| `on`, `off` | [Events](./events.md) |
| `dispose` | [Getting Started → Cleaning up](./getting-started.md#cleaning-up) |

## Options

```ts
interface UltraWalletSdkOptions {
    /** 'mainnet' (default), 'testnet', or a custom Web Wallet URL. */
    environment?: 'mainnet' | 'testnet' | string;
    /** Force a provider instead of auto-detecting window.ultra. */
    provider?: 'web' | 'extension';
}
```

## Responses

```ts
interface UltraResponse<T = any> {
    status: ResponseStatus; // always 'success' on a resolved promise
    data: T;
    message?: string;
    code?: number;
}

enum ResponseStatus {
    SUCCESS = 'success',
    FAIL = 'fail',
    ERROR = 'error',
}
```

## Connection types

```ts
interface ConnectParams {
    onlyIfTrusted?: boolean;
    referralCode?: string;
    /** Must start with 'message:', '0x' or 'UOSx'. */
    nonce?: string;
}

type ConnectResult = {
    /** The connected account NAME (not a chain id); equals selectedAccount.accountName. Only field the Web Wallet returns besides publicKey. */
    blockchainid: string;
    /** @deprecated Prefer selectedAccount.permissions[n].publicKeys */
    publicKey: string;
    accounts?: AccountInfo[]; //       extension only
    selectedAccount?: AccountInfo; //  extension only
    network?: NetworkInfo; //          extension only
    nonce?: string; //                 when a nonce was passed
    signedNonce?: string; //           when a nonce was passed
};
```

The SDK types also declare `ConnectParams.requireAttestation` and `ConnectResult.attestation`. They are marked `@experimental`, are not supported for integration yet, and are intentionally left out of this documentation.

## Account & network types

```ts
interface AccountInfo {
    accountName: string;
    permissions: PermissionInfo[];
}

interface PermissionInfo {
    name: string; //         e.g. 'active'
    publicKeys: string[];
}

interface AvailableAuth {
    accountName: string;
    permission: string;
    publicKey: string;
}

interface NetworkInfo {
    name: string;
    chainId: string;
}

interface NetworkDetails {
    name: string;
    chainId: string;
    nodeUrl: string;
    isCustom?: boolean;
}

type WalletEventType = 'accountChanged' | 'networkChanged' | 'disconnect';
```

## Transaction types

```ts
interface BlockchainTransaction {
    contract: string;
    action: string;
    data: any;
    authorization?: StructuredAuthorization[];
    /** @deprecated Use `authorization`. Web Wallet releases before September 2026 read only this field. */
    authorizations?: string[];
}

interface StructuredAuthorization {
    actor: string;
    permission: string;
}

interface SignTransactionOptions {
    /** Return the signed transaction without broadcasting it. */
    signOnly?: boolean;
}

interface SignTransactionResult {
    transactionHash?: string;
    /** signOnly: authorizations the wallet could not sign, as 'account@permission'. */
    unsignedAuth?: string[];
    processed?: {
        id: string;
        block_num: number;
        block_time: string;
        producer_block_id: string | null;
        receipt: { status: string; cpu_usage_us: number; net_usage_words: number };
        elapsed: number;
        net_usage: number;
        scheduled: boolean;
        action_traces: ActionTrace[];
        account_ram_delta: any | null;
        except: any | null;
        error_code: number | null;
    };
}

interface SignMessageResult {
    signature: string;
}
```

With `signOnly: true`, `data` is the signed transaction (`expiration`, `ref_block_num`, `ref_block_prefix`, `actions`, `signatures`, …), not the shape above. See [Sign without broadcasting](./signing.md#sign-without-broadcasting).

## Error codes

```ts
enum SdkErrorCode {
    USER_REJECTED_REQUEST = 4001,
    WALLET_HANDSHAKE_TIMEOUT = 4300,
    WALLET_WINDOW_UNAVAILABLE = 4301,
    WEB_WALLET_UNAVAILABLE = 4302, // 0.6.1+
    REQUESTED_RESOURCE_NOT_AVAILABLE = 32002,
    UNKNOWN_ERROR = -32604,
}

const SDK_ERROR_MESSAGE: Record<SdkErrorCode, string>;
```

The wallet error codes are listed in [Errors](./errors.md#wallet-error-codes).
