import type { APIRoute } from "astro";
import { tools } from "../constants";

export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify(tools),
  };
};
