import { nanoid } from "nanoid";

type ApiClientOptions = RequestInit & {
  params?: Record<string, string | number | boolean | undefined>;
};

function buildUrl(path: string, params?: ApiClientOptions["params"]) {
  const url = new URL(
    path,
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  );

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    }
  }

  return url.toString();
}

export async function apiClient<T>(
  path: string,
  { params, headers, ...init }: ApiClientOptions = {},
): Promise<T> {
  const response = await fetch(buildUrl(path, params), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Request-Id": nanoid(),
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed (${response.status})`);
  }

  return response.json() as Promise<T>;
}
