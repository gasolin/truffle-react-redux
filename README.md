# Truffle-React-Redux

The `truffle-react-redux` provide the template(box) for your next dapp with React and Redux. The project have preconfigured React and Redux basic settings. The template separate the concern of `contracts` and `web` frontend as sub projects and include glue scripts to bridge the both sides.

* `contracts/` This project was bootstrapped with [truffle init](http://truffleframework.com/docs/getting_started/project) command
* `web/` This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* glue scripts: help manage `contracts` and  `web` sub projects by install dependency modules and copy compiled JSON into `web/` project.

## Installation

1. Install `Truffle` and `Lerna` globally.
    ```sh
    npm install -g truffle lerna
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```sh
    truffle unbox gasolin/truffle-react-redux
    ```

3. Glue script allow you to install `contracts/` and `web/` project dependencies at once via [lerna bootstrap](https://github.com/lerna/lerna#bootstrap)

    ```sh
    npm run bootstrap

    # or you can install dependency modules in sub projects via separate commands
    cd contracts && npm install
    cd ../web && npm install
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

## Dependencies

### whole project

* [lerna](https://github.com/lerna/lerna#bootstrap) Manage `contracts/` and `web/` project.

### contracts sub project

* [truffle](http://truffleframework.com/): Build, debug, deploy the smart contracts

### web sub project

* [Create React App](https://github.com/facebookincubator/create-react-app): Create React apps with no build configuration
* redux & react-redux: State management
