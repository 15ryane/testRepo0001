export const CONTAINER_NAME = "<UI_NAME>";
export const FIGMA = "<UI_NAME_SHORT>"; // DON'T FORGET TO CHANGE THIS AS WELL

export const ENV = (() => {
  if (window.location.hostname.includes("localhost")) {
    return "local";
  } else if (window.location.hostname.includes("ops-staging.getspruce.com")) {
    return "staging";
  } else if (window.location.hostname.includes("ops.getspruce.com")) {
    return "prod";
  } else {
    throw Error("Couldn't determine your environment.");
  }
})();

export const VERSION = (() => {
  if (ENV === "local") return ENV;
  return `${GIT_HASH.substring(0, 5)}-${ENV.substring(0, 4)}`;
})();

export const FORMAT_DATETIME = "Y-MM-DD HH:mm:ss";
export const FORMAT_DATE = "Y-MM-DD";
export const FORMAT_TIME = "h:mm A";
