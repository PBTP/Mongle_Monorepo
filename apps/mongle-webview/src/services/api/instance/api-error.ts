interface ApiErrorProps {
  message: string;
  status: number;
}

export class ApiError extends Error {
  name: string;
  status: number;

  constructor({ message, status }: ApiErrorProps) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}
