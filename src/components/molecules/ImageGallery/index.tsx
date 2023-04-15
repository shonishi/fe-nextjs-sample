import NextImage from 'next/image';

interface Props {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: Props) {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <NextImage
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-cover object-center"
          fill
        />
      </div>
      {images.length > 1 && (
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <NextImage
              src={images[1].src}
              alt={images[1].alt}
              className="h-full w-full object-cover object-center"
              fill
            />
          </div>
          {images.length > 2 && (
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <NextImage
                src={images[2].src}
                alt={images[2].alt}
                className="h-full w-full object-cover object-center"
                fill
              />
            </div>
          )}
        </div>
      )}
      {images.length > 3 && (
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <NextImage
            src={images[3].src}
            alt={images[3].alt}
            className="h-full w-full object-cover object-center"
            fill
          />
        </div>
      )}
    </div>
  );
}
