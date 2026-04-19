function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative">
      <input
        readOnly
        value={value}
        placeholder=" "
        className="block w-full px-3 pb-2.5 pt-4 text-sm bg-transparent border border-onyx/50 rounded-lg"
      />
      <label className="absolute text-sm -translate-y-4 scale-75 top-1.5 bg-alabaster px-2">
        {label}
      </label>
    </div>
  );
}

export default ReadOnlyField;
