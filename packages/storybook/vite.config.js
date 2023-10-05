import { defineConfig } from 'vite';
import path from "node:path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@us-gov-cdc/cdc-react': path.resolve(__dirname, '../cdc-react/src/components/index.ts'),
      '@us-gov-cdc/cdc-react-icons': path.resolve(__dirname, '../cdc-react-icons/src/components/index.ts'),
      'uswds-core': path.resolve(__dirname, '../cdc-react/node_modules/@uswds/uswds/packages/uswds-core')
    }
  }
});

