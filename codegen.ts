import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: "https://fairland-resort-api-c5b3bb10838f.herokuapp.com/graphql",
  documents: "src/**/**/*.gql",
  generates: {
    "src/services/graphql/": {
      preset: "client",
    },
  },
};

export default config;
