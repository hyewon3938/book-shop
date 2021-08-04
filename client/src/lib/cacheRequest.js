import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

export const cacheRequest = axios.create({
  Accept: "application/json",
  headers: { "Cache-Control": "no-cache" },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});
