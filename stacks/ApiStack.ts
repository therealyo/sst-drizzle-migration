import {
  Api,
  Function,
  Script,
  StackContext,
  dependsOn,
  use,
} from "sst/constructs";
import { Database } from "./Database";
import { MigrationScript } from "./MigrationScript";

export function ApiStack({ stack }: StackContext) {
  dependsOn(MigrationScript);

  const api = new Api(stack, "test-api", {
    routes: {
      "GET /": "src/testEndpoint.handler",
    },
  });

  stack.addOutputs({
    url: api.url,
  });
}
