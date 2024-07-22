export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export function generateId(): string {
  return new Date().getTime().toString();
}
