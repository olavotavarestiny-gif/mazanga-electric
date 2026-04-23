export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("244")) {
    return `+244 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9, 12)}`.trim();
  }
  return value;
}
