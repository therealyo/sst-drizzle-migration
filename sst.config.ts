import { SSTConfig } from "sst";
import { Database } from "./stacks/Database";
import { MigrationScript } from "./stacks/MigrationScript";
import { ApiStack } from "./stacks/ApiStack";

export default {
  config(_input) {
    return {
      name: "test-migration-deployment",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Database);
    app.stack(MigrationScript);
    app.stack(ApiStack);
  },
} satisfies SSTConfig;
