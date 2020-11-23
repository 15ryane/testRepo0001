import { ENV } from "./general";

export const HOST_MAP = {
  "prospects-api": {
    local: "https://prospects-staging.getspruce.com",
    staging: "https://prospects-staging.getspruce.com",
    prod: "https://prospects.getspruce.com"
  },
  gql: {
    local: "http://localhost:9000/graphql",
    staging:
      "https://api-staging.getspruce.com/graphql",
    prod: "https://api.getspruce.com/graphql"
  }
};

export const getHostBase = (host: keyof typeof HOST_MAP) => {
  if (!HOST_MAP[host]) throw new Error(`${host} is an invalid host.`);
  return HOST_MAP[host][ENV];
};
