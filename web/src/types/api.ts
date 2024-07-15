export type JSONResponse<T> = {
  error?: boolean;
  message?: string;
  content?: T;
};
