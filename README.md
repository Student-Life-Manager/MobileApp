# Student life manager

## Quick Start

### Prerequisite

Make sure you install the following things before running the project

<br/>
Make:

```
choco install make
```

<br/>

## How to run

<br/>
Step 1: Install all dependencies

```
make install
```

<br/>

Step 2: Duplicate the `.env.development` and rename it as `.env.local`

```
make start
```

<br/>

Step 3: Add the enviroment variables that you got from one of the maintainers in `.env.development`

<br/>

Step 4: Run the project locally

```
make run
```

Step 5: Open the [Expo Go](https://expo.dev/client) app in a mobile phone and scan the QR code in your terminal

<br/><br/>

## Contribution guidelines

<br/>

Every new react native component should have follow this this format for comments. Visit [TSDoc](https://tsdoc.org/) for more information.

````javascript
/**
 * @remarks - general description of the component
 * @param prop1 - description of the property
 * @param prop1 - description of the property
 * @example
 * ```
 * <CustomComponent
 * 	prop1 = {value1}
 * 	prop1 = {value2}
 * />
 * ```
 */
````
