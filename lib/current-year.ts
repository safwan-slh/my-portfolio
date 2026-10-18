import { cacheLife } from "next/cache"

/**
 * The copyright year is captured into the static shell at prerender time
 * and refreshed at most once per day. Reading `new Date()` directly during
 * a prerender is not allowed when Cache Components is enabled.
 */
export async function getCurrentYear() {
  "use cache"
  cacheLife("days")

  return new Date().getFullYear()
}