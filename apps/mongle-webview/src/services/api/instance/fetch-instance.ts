import { getUserAuth } from '@/stores/useAuthStore';
import { ApiClientOptions, ApiResponse } from '../../types/instance';
import { ApiError } from './api-error';

interface CreateApiConfig {
  serverToken?: string;
}

const createApi = (config: CreateApiConfig = {}) => {
  return async <T>(url: string, options: ApiClientOptions = {}): Promise<T> => {
    const {
      baseUrl = process.env.NEXT_PUBLIC_API_URL,
      params,
      ...fetchOptions
    } = options;

    const queryParams = params
      ? '?' + new URLSearchParams(params).toString()
      : '';
    const fullUrl = `${baseUrl}${url}${queryParams}`;
    const token = config.serverToken || getUserAuth().accessToken;

    const headers = new Headers({
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    });

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    try {
      const response: Response = await fetch(fullUrl, {
        ...fetchOptions,
        headers,
        credentials: 'include',
      });

      const parsedResponse = await response.json();

      const responseData: ApiResponse<T> = {
        data: parsedResponse?.data,
        message: parsedResponse?.message || 'SUCCESS',
        status: response.status,
      };

      if (!response.ok) {
        console.log('ERROR');
        console.error(responseData.message);
        throw new ApiError({
          message: responseData.message || 'API request failed',
          status: responseData.status,
        });
      }

      return responseData as T;
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(error.message);
        throw error;
      }
      if (error instanceof Error) {
        console.error('ERROR', fullUrl);
        console.error(error.message);
        throw error;
      }
      throw new Error('An unknown error occurred');
    }
  };
};

export default createApi;
