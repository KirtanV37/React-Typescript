import { AUTH_ROUTES, PLAIN_ROUTES, PRIVATE_ROUTES } from "../routing/routes";
import { APP_TITLE } from "../utils/constants";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useDocumentTitle } from "@mantine/hooks";

const usePageData = () => {
  const location = useLocation();

  const title = useMemo(() => {
    interface Route {
      url: string;
      title: string;
      [key: string]: any;
    }
    const transformRoutes = (data: Record<string, any>): Array<Route> => {
      return Object.values(data).filter(
        (route) =>
          typeof route.url === "string" && typeof route.title === "string"
      );
    };

    const routes = [
      ...transformRoutes(PLAIN_ROUTES),
      ...transformRoutes(AUTH_ROUTES),
      ...transformRoutes(PRIVATE_ROUTES),
    ];

    return (
      routes?.find(({ url }) => url === location?.pathname)?.title || APP_TITLE
    );
  }, [location?.pathname]);

  useDocumentTitle(title);
  return [title];
};

export default usePageData;

/*
routes as objects goes in as the 'data' params.
returns the array of only object's value.
and those objects are returned which has url, title as key, if not then not returned, if there any then goes into the rest.
from here it becomes an array and it filters in which url & title key has a value of string type.
*/

/**
 * Transforms a route configuration object into a flat array of valid route entries.
 *
 * @param data - An object whose values are route configuration objects.
 * Each value may include properties like `url`, `title`, `path`, etc.
 *
 * @returns An array of route objects where:
 * - Each object has both a `url` and `title` key
 * - Both `url` and `title` must be of type `string`
 *
 * All other entries (objects missing either `url` or `title`, or with incorrect types)
 * are filtered out and excluded from the result.
 *
 * Example:
 * Input:
 * {
 *   HOME: { url: '/', title: 'Home' },
 *   LAYOUT: { path: '/' },
 *   LOGIN: { url: '/login' }, // Missing title -> excluded
 * }
 *
 * Output:
 * [
 *   { url: '/', title: 'Home' }
 * ]
 */

/**
 * TL;DR 🧠
Routes go in as an object of objects

The function extracts values only (Object.values(...))

Then filters to only those objects that have both url and title as strings

Result is a clean Route[] array 💥
 */
