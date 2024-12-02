export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiClientOptions extends Omit<RequestInit, 'method'> {
  method?: HttpMethod;
  baseUrl?: string;
  params?: Record<string, string>;
}

export interface ApiResponse<T> {
  message: string;
  data?: T;
  statusCode: number;
  secretMessage?: string;
}
