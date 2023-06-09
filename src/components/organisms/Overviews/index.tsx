import Breadcrumbs from '../../molecules/Breadcrumbs';
import Colors from '../../molecules/Colors';
import Description from '../../molecules/Description';
import Details from '../../molecules/Details';
import Highlights from '../../molecules/Highlights';
import ImageGallery from '../../molecules/ImageGallery';
import Reviews from '../../molecules/Reviews';
import Sizes from '../../molecules/Sizes';
import { useOverviewsViewModel } from '@/src/ducks/overviews/hooks';

export default function Overviews({
  loadData,
  changeColor,
  changeSize,
}: ReturnType<typeof useOverviewsViewModel>) {
  if (!loadData) {
    return <></>;
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        <Breadcrumbs
          breadcrumbs={loadData.breadcrumbs.concat([
            { id: loadData.id, name: loadData.name, href: loadData.href },
          ])}
        />
        <ImageGallery images={loadData.images} />
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {loadData.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {loadData.price}
            </p>
            <Reviews reviews={loadData.reviews} />
            <form className="mt-10">
              <Colors
                colors={loadData.colors}
                selectedColorId={loadData.selectedColorId}
                changeColor={changeColor}
              />
              <Sizes
                sizes={loadData.sizes}
                selectedSizeId={loadData.selectedSizeId}
                changeSize={changeSize}
              />
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <Description description={loadData.description} />
            <Highlights highlights={loadData.highlights} />
            <Details details={loadData.details} />
          </div>
        </div>
      </div>
    </div>
  );
}
