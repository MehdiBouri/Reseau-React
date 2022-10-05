import { fetchHydra, hydraDataProvider } from '@api-platform/admin';
import { parseHydraDocumentation } from '@api-platform/api-doc-parser';

const entrypoint = 'https://127.0.0.1:8000/api';
const dataProvider = hydraDataProvider({
  entrypoint,
  httpClient: fetchHydra,
  apiDocumentationParser: parseHydraDocumentation,
  mercure: true,
  useEmbedded: false,
});

export default { entrypoint, dataProvider };
