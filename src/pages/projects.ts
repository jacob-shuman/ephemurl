import type { APIRoute } from "astro";
import { games, modules, tools } from "../constants";

export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify(
      {
        tools,
        games,
        modules,
      },
      null,
      2
    ),
    { status: 200 }
  );
};
