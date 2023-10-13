# CDC React Icons

Welcome the the CDC Icon React Component library!

![Icon Gallery](https://raw.githubusercontent.com/CDCgov/cdc-react/main/packages/cdc-react-icons/assets/icons.png)

This is a set of SVG-based icons for use in any React application. Each icon is exported as a separate React component. So you only need to import the icons your component needs.

## Usage

Here is an example of using an icon from this library in your app:

```TypeScript
import { Icons } from "@us-gov-cdc/cdc-react-icons"

function MyApp() {
  return (
    <nav>
      <Icons.Menu />
    </nav>
  )
}
```

See the [Storybook Icon Page](https://cdcgov.github.io/cdc-react/?path=/story/components-icon--all) for a list of all icons and their names..
