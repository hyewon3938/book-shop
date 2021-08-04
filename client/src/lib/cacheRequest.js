import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

export const cacheRequest = axios.create({
  Accept: "application/json",
  headers: { "Cache-Control": "no-cache,no-store,must-revalidate" },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false }),
});
