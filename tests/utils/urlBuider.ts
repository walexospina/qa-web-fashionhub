export function buildUrl(
  baseUrl: string,
  path: string,
  queryParams: Record<string, string | number | boolean> = {}
): string {
  const url = new URL(path, baseUrl);

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value.toString());
    }
  });

  return url.toString();
}
