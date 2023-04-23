import { RadioGroup } from '@headlessui/react';

export interface Props {
  colors: {
    id: number;
    name: string;
    class: string;
    selectedClass: string;
  }[];
  selectedColorId: number;
  changeColor: (e: { id: number }) => {
    payload: number;
    type: string;
  };
}

export default function Colors({
  colors,
  selectedColorId,
  changeColor,
}: Props) {
  const selectedColor = colors.find((color) => color.id === selectedColorId);
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Color</h3>
      <RadioGroup value={selectedColor} onChange={changeColor} className="mt-4">
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <div className="flex items-center space-x-3">
          {colors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ active, checked }) =>
                [
                  color.selectedClass,
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : '',
                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {color.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={[
                  color.class,
                  'h-8 w-8 rounded-full border border-black border-opacity-10',
                ].join(' ')}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
