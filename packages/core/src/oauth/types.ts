export type PlaudOAuthAppConfig = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  /** File name under ~/.plaud/ (default: tokens-mcp.json — compatible with @plaud-ai/mcp) */
  tokenFile: string;
  apiBase?: string | undefined;
  authorizationUrl?: string | undefined;
  tokenUrl?: string | undefined;
  refreshUrl?: string | undefined;
  extraHeaders?: Record<string, string> | undefined;
  /** Appended to the auth URL as `&...` (e.g. support-given query). Env: `PLAUD_OAUTH_AUTH_EXTRA`. */
  authorizationQueryExtra?: string | undefined;
};

export type PlaudTokenSet = {
  access_token: string;
  refresh_token?: string | undefined;
  token_type: string;
  expires_at?: number | undefined;
};
