export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md border border-ink/8 bg-white px-6 py-8 text-center shadow-card">
      <div className="text-gradient-gold-light font-display text-4xl font-bold md:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-ink-muted">{label}</div>
    </div>
  );
}
