export type PostError<T> = {
  [K in keyof T]?: string[];
};
