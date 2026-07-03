import { useEffect } from "react";
import { useMatches } from "react-router";

import type { RouteHandle } from "../app/router";

const APP_NAME = "Cafe Ông Bầu";

export default function PageTitle() {
  const matches = useMatches();

  useEffect(() => {
    const currentMatch = [...matches].reverse().find((match) => {
      const handle = match.handle as RouteHandle | undefined;
      return Boolean(handle?.title);
    });

    const handle = currentMatch?.handle as RouteHandle | undefined;

    document.title = handle?.title
      ? `${handle.title} | ${APP_NAME}`
      : APP_NAME;
  }, [matches]);

  return null;
}