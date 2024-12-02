interface ApiErrorProps {
  message: string;
  statusCode: number;
}

export class ApiError extends Error {
  name: string;
  statusCode: number;

  constructor({ message, statusCode }: ApiErrorProps) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
  }
}
