# stkvt.worlds Common

The `@alien-worlds/stkvt-worlds-common` package is a comprehensive set of components designed to seamlessly integrate blockchain contracts into our projects. This package serves as a foundational element, providing essential functionalities for interacting with blockchain contracts and retrieving data.

_The code within this package is auto-generated using our tool, [AlienGen](https://github.com/Alien-Worlds/aliengen). AlienGen automates the generation process, ensuring consistency and accuracy throughout the codebase. This approach allows us to maintain an efficient and reliable workflow when working with blockchain contracts._

## Dependencies

This package is dependent on the following packages:

- [@alien-worlds/api-core](https://github.com/Alien-Worlds/api-core)
- [@alien-worlds/eos](https://github.com/Alien-Worlds/eos)
- [@alien-worlds/eosio-contract-types](https://github.com/Alien-Worlds/eosio-contract-types)
- [@alien-worlds/storage-mongodb](https://github.com/Alien-Worlds/storage-mongodb)

## Table of Contents

- [Contract contents](#contract-contents)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Contract contents:

The code is based on the ABI of the contract, the list of included actions and tables can be found here [https://wax.bloks.io/account/stkvt.worlds](https://wax.bloks.io/account/stkvt.worlds)

## Features

- **Contract Service**: Allows users to fetch contract information and statistics. It provides convenient methods to retrieve data from the contract tables.

- **Data Sources**: Data sources `StkvtWorldsActionMongoSource` and `StkvtWorldsDeltaMongoSource`, which enable access to the underlying mongodb action and delta collections. Data source is an integral part of the repositories.

- **Repositories**: Repositories `StkvtWorldsActionRepository` and `StkvtWorldsDeltaRepository` that facilitate CRUD operations for actions and deltas stored in the database.

- **Entities and Types**: The package provides predefined entities and types that correspond to the contract structure. These entities and types offer a standardized way to handle contract data within our projects.

## Getting Started

To start utilizing the `@alien-worlds/stkvt-worlds-common` package, follow these steps:

1. Install the package by running:

```
yarn add @alien-worlds/stkvt-worlds-common
```

2. Import the necessary components into your project:

```typescript
import * as StkvtWorldsContract from '@alien-worlds/stkvt-worlds-common';
```

## Contributing

We appreciate your feedback and encourage you to submit any issues or valid requests you encounter while using this package. Please note that, due to the auto-generated nature of the code, we will not be merging any pull requests directly. However, we highly value your feedback and welcome any issues or valid requests you encounter while working with this package. Your inputs will be considered for future improvements and enhancements in the AlienGen tool, allowing us to generate more refined and fixed content.

## License

This project is licensed under the terms of the MIT license. For more information, refer to the [LICENSE](./LICENSE) file.
