import { Client as Workflowclient } from "@upstash/workflow";
import config from "./config";

export const workflowclient = new Workflowclient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});
