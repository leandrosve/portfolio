import { twMerge } from 'tailwind-merge';

const joinClasses = (...list: (string | null | undefined)[]) => {
  return twMerge(list.filter((c) => !!c).join(' '));
};

const printIf = (value: string | null | undefined, condition: unknown, def?: string | null | undefined) => {
  if (condition) return value ?? '';
  return def ?? '';
};

export { joinClasses, printIf };
