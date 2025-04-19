export const routes = {
  home: '/',
  episodes: '/episodes',
} as const;

export type RouteKey = keyof typeof routes;

export function createPageUrl(key: RouteKey): string {
  return routes[key];
}

// Helper to check if a route exists
export function isValidRoute(path: string): boolean {
  return Object.values(routes).includes(path);
} 