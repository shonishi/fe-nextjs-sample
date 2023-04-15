import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

interface Props {
  colors: {
    name: string;
    class: string;
    selectedClass: string;
  }[];
}

export default function Colors({ colors }: Props) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-900">Color</h3>
      <RadioGroup
        value={selectedColor}
        onChange={setSelectedColor}
        className="mt-4"
      >
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
