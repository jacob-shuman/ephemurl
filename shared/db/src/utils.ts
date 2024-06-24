import { customAlphabet } from "nanoid";

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export function generateId() {
  return customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz")();
}
