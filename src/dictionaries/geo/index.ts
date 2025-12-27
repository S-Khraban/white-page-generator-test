import { ES } from "./ES.js";
import { MX } from "./MX.js";

export function getGeoDict(geo: string) {
  switch (geo) {
    case "MX":
      return MX;
    case "ES":
    default:
      return ES;
  }
}
