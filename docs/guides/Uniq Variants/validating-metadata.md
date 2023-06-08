---
title: 'Validating Metadata'
deploy: ['staging', 'mainnet']
---


# Validating Metadata

The factory metadata contains information about each file, including its integrity. This integrity is established by calculating a hash using the SHA256 algorithm, which is typically represented in hex format. Additionally, the type of hash used is usually SHA256 for uniqs created on Ultra.

However, it is important to discuss the specific methods employed to generate these SHA256 values in the first place.

## Why SHA256?

SHA256 become a popular and widely adopted cryptographic hash function. 

Its speed and efficiency are quite good when generating hash values.

SHA256 is easily implementable in all programming languages with minimal effort.

## Integrity Building Process

1. Walk through each object in the metadata and determine if it is a `StaticResource`.

```ts
export interface StaticResource {
    contentType: MimeTypes | null;
    uris: string[];
    integrity: {
        type: 'SHA256';
        hash: string;
    } | null;
}
```

2. If the `integrity` in a `StaticResource` is set to `null` then we need to generate it.
3. We loop through each of the `uris` and generate a `hash` for each `uri` and append it to a single `string`.

```ts
let contentHashes = '';
for (let i = 0; i < someData.uris.length; i++) {
    const newHash = someHashBuilder(someData.uris[i]); // Usually checks if local or external
    contentHashes += newHash;
}
```

4. We generate a `SHA256` of the `contentHashes`.
5. We append that `SHA256` hash and generate the `integrity` for that `StaticResource` in the file.
6. Repeat until all `StaticResource` objects have integrity generated.
7. Hash the contents of the metadata file (`json`) and that will be the `hash` that you pass to the chain.

## Create HASH from File

In most cases we use the standard `crypto` [library the comes with NodeJS](https://nodejs.org/api/crypto.html#class-hash).

However there is a fairly simple process for generating the `hash` data.

### TS/JS Example

```ts
const stream = fs.createReadStream(someFilePath);
const hash = createHash('sha256', { encoding: 'hex' });
stream.pipe(hash);

await new Promise((resolve: Function) => {
    stream.on('end', () => {
        resolve();
    });
});

return hash.read();
```

## Create HASH from External Content

In some cases we have `external` content that needs to be hashed as well. This means that the file is already uploaded on an external server somewhere and we need to fetch the content and create a `hash` from that data.

We **do not format** anything that comes back from a URL; we ensure that the response is okay and assume the content is correct.

### TS/JS Example

```ts
const response = await fetch(url);
if (!response.ok) {
    return undefined;
}

const hash = createHash('sha256', { encoding: 'hex' });
response.body.pipe(hash);

await new Promise((resolve: Function) => {
    response.body.on('end', () => {
        resolve();
    });
});

return hash.read();
```

## Single File Verification

To verify a single `.json` file along with its data, it is advisable to use the hash that is available on-chain and compare it with the contents of the file. By hashing the contents of the `.json` file and verifying it against the chain, you can ensure the validity of the entire file and its contents. 

However, if you require more extensive verification, you will need to inspect each `uri` and validate the contents of all `uris` that are present in `uris` property, and then follow the aforementioned steps to ensure the validity of the data.
