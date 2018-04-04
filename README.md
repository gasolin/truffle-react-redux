# Truffle-Contracts-Web-DApp

The `truffle-contracts-web-dapp` provide the template for your next dapp. It separate the concern of contracts and web frontend and include the glue scripts to bridge both sides.

* `contracts/` This project was bootstrapped with `truffle init`
* `web/` This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Installation


1. Install Truffle globally.
    ```sh
    npm install -g truffle
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```sh
    truffle unbox gasolin/truffle-contracts-web-dapp
    ```

## Contracts development

Enter `contracts/` folder

1. Run the development console.
    ```sh
    truffle develop
    ```

2. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`. Smart contract changes must be manually recompiled and migrated.
    ```sh
    compile
    migrate

    # If outside the development console..
    npm run build
    ```

3. Glue scripts can copy compiled JSON files into `web/src/lib` to access contract.

```sh
npm run deploy
```

4. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
  ```sh
  # If inside the development console.
  test

  # If outside the development console..
  truffle test

  # glue script
  npm run test
  ```



## Web development

Enter `web/` folder

1. Run the front-end hot reloading in `web/` (outside the truffle development console).
    ```sh
    // Serves the front-end on http://localhost:8080
    npm run start
    ```

2. Build the web project for production.

```sh
npm run build
```

3. Create-react-app can run tests within src/ folder.

```
npm run test
```
