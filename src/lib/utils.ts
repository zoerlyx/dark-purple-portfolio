export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatIndex(idx: number): string {
  return String(idx + 1).padStart(2, '0');
}
