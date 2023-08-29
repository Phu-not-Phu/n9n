export type FormExport<T> = Partial<{
  [P in keyof T]: T[P] | null;
}>;
