interface Props {
  details: string;
}

export default function Details({ details }: Props) {
  return (
    <div className="mt-10">
      <h2 className="text-sm font-medium text-gray-900">Details</h2>
      <div className="mt-4 space-y-6">
        <p className="text-sm text-gray-600">{details}</p>
      </div>
    </div>
  );
}
