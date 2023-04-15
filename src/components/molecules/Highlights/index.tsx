interface Props {
  highlights: string[];
}

export default function Highlights({ highlights }: Props) {
  return (
    <div className="mt-10">
      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
          {highlights.map((highlight) => (
            <li key={highlight} className="text-gray-400">
              <span className="text-gray-600">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
