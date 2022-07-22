export function MakeNumberHumanReadable(value: number): [number, string] {
  if (value > 1000 * 1000 * 1000 * 1000) {
    return [value / (1000 * 1000 * 1000 * 1000), "T"];
  } else if (value > 1000 * 1000 * 1000) {
    return [value / (1000 * 1000 * 1000), "G"];
  } else if (value > 1000 * 1000) {
    return [value / (1000 * 1000), "M"];
  } else if (value > 1000) {
    return [value / 1000, "k"];
  } else {
    return [value, ""];
  }
}

export function CreateHumanReadableString(value: number, unit: string, decimals?: number) {
  const [convertedValue, prefix] = MakeNumberHumanReadable(value);
  return `${convertedValue.toFixed(decimals || 1)} ${prefix}${unit}`;
}
