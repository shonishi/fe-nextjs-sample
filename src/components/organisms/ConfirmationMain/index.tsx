import Breadcrumbs from '../../molecules/Breadcrumbs';
import ImageGallery from '../../molecules/ImageGallery';
import Reviews from '../../molecules/Reviews';
import Colors from '../../molecules/Colors';
import Sizes from '../../molecules/Sizes';
import Description from '../../molecules/Description';
import Highlights from '../../molecules/Highlights';
import Details from '../../molecules/Details';

const product = {
  id: 4,
  name: 'あひるちゃん 5羽セット',
  price: '500円',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'おもちゃ', href: '#' },
    { id: 2, name: '赤ちゃん・幼児', href: '#' },
    { id: 3, name: 'お風呂用', href: '#' },
  ],
  images: [
    {
      src: 'https://www.pakutaso.com/shared/img/thumb/PAK74_ahirucyansusumu_TP_V.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://www.pakutaso.com/shared/img/thumb/PAK85_enjinahirucyan_TP_V.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://www.pakutaso.com/shared/img/thumb/PAK88_amazonst_TP_V.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://www.pakutaso.com/shared/img/thumb/NKJ56_dateahiru_TP_V.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    {
      name: 'Pale white',
      class: 'bg-yellow-50',
      selectedClass: 'ring-gray-400',
    },
    { name: 'Yellow', class: 'bg-yellow-100', selectedClass: 'ring-gray-400' },
    {
      name: 'Dark yellow',
      class: 'bg-yellow-300',
      selectedClass: 'ring-gray-900',
    },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'あひるのフィギュアです。お風呂に浮かべて楽しいひと時をお過ごしください。',
  highlights: [
    'お風呂に浮く',
    '握ると音がする',
    'お子様の筋力強化に',
    'シリコン製',
  ],
  details:
    'シリコン製のため耐久力が高く、小傷が入りにくいため衛生面でも安心です。音を出すにはある程度の力で握る必要がありますので、楽しみながらお子様の筋力を強化することができます。各種サイズをご用意しておりますので、お子様の手の大きさに合う物をお選びいただけます。',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

export default function ConfirmationMain() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumbs
          breadcrumbs={product.breadcrumbs.concat([
            { id: product.id, name: product.name, href: product.href },
          ])}
        />
        <ImageGallery images={product.images} />
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>
            <Reviews reviews={reviews} />
            <form className="mt-10">
              <Colors colors={product.colors} />
              <Sizes sizes={product.sizes} />
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <Description description={product.description} />
            <Highlights highlights={product.highlights} />
            <Details details={product.details} />
          </div>
        </div>
      </div>
    </div>
  );
}
