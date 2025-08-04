// API Response types

export interface IPagination {
  page: number;
  pageSize: number;
  total: number;
  pages: number;
}

export interface IPaginationMeta {
  pagination: IPagination;
}

export interface IApiResponse<D, M = IPaginationMeta> {
  data: D;
  meta: M;
}
export interface ErrorType {
  field: string;
  message: string;
}
export interface ResponseErrorType {
  data?: {
    errors?: ErrorType[];
    id: string;
    message: string;
    errorCode?: string;
  };
  meta?: unknown;
  message?: string;
}

export interface PayloadError {
  error: ResponseErrorType;
}

// Pagination types
export interface IParams {
  page?: number;
  pageSize?: number;
  search?: string;
}
