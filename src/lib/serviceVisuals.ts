// Cycles services through the brand's three approved gradient pairings so
// each service card gets a visually distinct but on-system background,
// even for services without a dedicated photo.

const gradients = [
  "bg-gradient-teal-gold",
  "bg-gradient-gold-light",
  "bg-gradient-gold-rust",
] as const;

export function serviceGradient(index: number): string {
  return gradients[index % gradients.length];
}
