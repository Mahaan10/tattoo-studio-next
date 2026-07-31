interface StatusBadgeProps<T extends string> {
  status: T;
  styles: Record<
    T,
    {
      label: string;
      className: string;
      icon: React.ReactNode;
    }
  >;
}

function StatusBadge<T extends string>({
  status,
  styles,
}: StatusBadgeProps<T>) {
  const config = styles[status];

  if (!config) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${config.className}`}
    >
      {config.icon}
      <span>{config.label}</span>
    </div>
  );
}

export default StatusBadge;
