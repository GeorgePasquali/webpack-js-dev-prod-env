# webpack-js-dev-prod-env

This is a development environment based on webpack.
It is good for developing js libraries and apps using
es6/babel. 

## The scripts is supports

```
  "scripts": {
    "prestart": "babel-node buildScripts/startMessageScript.js",
    "start": "npm-run-all --parallel security-check open:src lint:watch",
    "open:src": "babel-node buildScripts/srcServer.js",
    "lint": "esw webpack.config.* src buildScripts --color",
    "lint:watch": "npm run lint -- --watch",
    "test": "echo \"Pretend That We Are Testing...\"",
    "security-check": "nsp check",
    "clean-dist": "rimraf ./dist && mkdir dist",
    "prebuild": "npm-run-all security-check clean-dist test lint",
    "build": "babel-node buildScripts/build.js",
    "postbuild": "babel-node buildScripts/distServer.js"
  },
```

- Use "npm start" to start the development environment

- Use "npm run build" to create a build of the project ready for production 


## Prerequisites

What things you need to install the software and how to install them

* [Node.js](https://nodejs.org/en/download/) - Needed for the development server.

* [Visual Studio Code](https://nodejs.org/en/download/) - Needed for the development server.

* [NPM (node package manager)](https://www.npmjs.com/) - Needed for the development server.(v5 + recommended)



## Updating global dependancies

> **Node** comes with npm installed so you should have a version of **npm**. 
> However, **npm** gets updated MORE frequently than **Node** does, so you'll want to make sure it's the latest version.

run:
```
npm install npm@latest -g
```
to get the latest version of npm
This is critical in order to install the right node dependencies.


## Installing

To install the node modules run:

```
npm install

```

> After the installation of **node_modules** is complete you should
> run "npm start" to run the node scripts. While this may take a while 
> if there are no problems during compilation you should have
> the app hosted in a testing environment on **localhost:3000**.

## Installing a new node module

A package can be downloaded with the command
```
 npm install <package_name>
```
This will create the node_modules directory in your current directory(if one doesn't exist yet), 
and will download the package to that directory.


## Configuring Code Format 

> To create a global team configuration for the formatting of the text in the code 
> we use the **".editorconfig"** file.

As mentioned below the **EditorConfig** plugin for VS Code is required.

## Configuring ES Lint

SLint is designed to be completely configurable, meaning you can turn off every rule and run only with basic syntax validation, or mix and match the bundled rules and your custom rules to make ESLint perfect for your project. There are two primary ways to configure ESLint:

Configuration Comments - use JavaScript comments to embed configuration information directly into a file.
Configuration Files - use a JavaScript, JSON or YAML file to specify configuration information for an entire directory (other than your home directory) and all of its subdirectories. This can be in the form of an .eslintrc.* file or an eslintConfig field in a package.json file, both of which ESLint will look for and read automatically, or you can specify a configuration file on the command line.

If you have a configuration file in your home directory (generally ~/), ESLint uses it only if ESLint cannot find any other configuration file.

There are several pieces of information that can be configured:

Environments - which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.
Globals - the additional global variables your script accesses during execution.
Rules - which rules are enabled and at what error level.
All of these options give you fine-grained control over how ESLint treats your code.

### Specifying Parser Options
ESLint allows you to specify the JavaScript language options you want to support. By default, ESLint expects ECMAScript 5 syntax. You can override that setting to enable support for other ECMAScript versions as well as JSX by using parser options.

Please note that supporting JSX syntax is not the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn’t recognize. We recommend using eslint-plugin-react if you are using React and want React semantics. By the same token, supporting ES6 syntax is not the same as supporting new ES6 globals (e.g., new types such as Set). For ES6 syntax, use { "parserOptions": { "ecmaVersion": 6 } }; for new ES6 global variables, use { "env": { "es6": true } } (this setting enables ES6 syntax automatically). Parser options are set in your .eslintrc.* file by using the parserOptions property. The available options are:

ecmaVersion - set to 3, 5 (default), 6, 7, 8, or 9 to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), or 2018 (same as 9) to use the year-based naming.
sourceType - set to "script" (default) or "module" if your code is in ECMAScript modules.
ecmaFeatures - an object indicating which additional language features you’d like to use:
globalReturn - allow return statements in the global scope
impliedStrict - enable global strict mode (if ecmaVersion is 5 or greater)
jsx - enable JSX
Here’s an example .eslintrc.json file:

```
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2
    }
}
```
more on https://eslint.org/docs/user-guide/configuring



