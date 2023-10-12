# CDC React Component Library

This is a React component library for official CDC sites. At its core, it uses the official USWDS styles. It is written in TypeScript and built with Vite.

**General disclaimer** This repository was created for use by CDC programs to collaborate on public health related projects in support of the [CDC mission](https://www.cdc.gov/about/organization/mission.htm). GitHub is not hosted by the CDC, but is a third party website used by CDC and its partners to share information and collaborate on software. CDC use of GitHub does not imply an endorsement of any one particular service, product, or enterprise.

## Using Components

Each component exported in the `src/components` folder can be used like any other React component. For example, here's how one would use the `Button` component:

```TypeScript
import { Button } from "@us-gov-cdc/cdc-react"

function MyApp() {
  return <Button>Hello, World!</Button>
}
```

Visit the [live Storybook site](https://cdcgov.github.io/cdc-react/) for props, documentation, and more usage examples for each component.

## Running Unit Tests

This project uses Vitest to run unit tests against its components and utilties. Run unit tests with the command `yarn test`.

## Building the Project

This project uses Vite to compile and build the TypeScript. Simply run `yarn build` to start this process. This will create a `dist` subdirectory with the production-ready JS code..
