export type Country = {
  name: string;
  code: string;
  label: string;
  // x/y are percentage positions calibrated to public/images/global-network-map.jpg.
  // If that image is ever replaced, these will need recalibrating.
  x: number;
  y: number;
};

// Placeholder markets for the first prototype — not verified company offices.
// Swap this list to update every marker, tooltip and chip across the site.
export const countries: Country[] = [
  { name: "United States", code: "US", label: "Cloud & AI Engineering", x: 24, y: 33 },
  { name: "Mexico", code: "MX", label: "Nearshore Delivery", x: 23, y: 47 },
  { name: "Argentina", code: "AR", label: "Software Engineering", x: 28, y: 76 },
  { name: "United Kingdom", code: "UK", label: "Digital Consulting", x: 48, y: 25 },
  { name: "UAE", code: "AE", label: "Enterprise Solutions", x: 58, y: 41 },
  { name: "India", code: "IN", label: "Technology & Software Solutions", x: 64, y: 46 },
];
