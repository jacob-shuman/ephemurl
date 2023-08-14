import type { APIRoute } from "astro";
import { projects } from "../constants";

export const get: APIRoute = ({ params, request }) => {
  return {
    body: JSON.stringify(projects),
  };
};
