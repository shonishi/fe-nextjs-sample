import Breadcrumbs from '../../molecules/Breadcrumbs';
import ImageGallery from '../../molecules/ImageGallery';
import Reviews from '../../molecules/Reviews';
import Colors from '../../molecules/Colors';
import Sizes from '../../molecules/Sizes';
import Description from '../../molecules/Description';
import Highlights from '../../molecules/Highlights';
import Details from '../../molecules/Details';
import { useAppDispatch, useAppSelector } from '@/src/ducks/hooks';
import { selectOverviews } from '@/src/ducks/overviews/slice';
import { useEffect, useState } from 'react';
import { load } from '@/src/ducks/overviews/asyncActions';

export default function OverviewsMain() {
  const loadData = useAppSelector(selectOverviews).loadData;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      dispatch(load());
      setLoading(true);
    }
  }, [loading, dispatch]);

  if (loadData == null) {
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
              <Colors colors={loadData.colors} />
              <Sizes sizes={loadData.sizes} />
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
