import type { Preview } from "@storybook/react";

import "../src/stories/storybook.css";
// import "@us-gov-cdc/cdc-react/dist/style.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
