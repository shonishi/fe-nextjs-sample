import Overviews from '@/src/containers/templates/Overviews';
import { setLoadData } from '@/src/ducks/overviews/slice';
import { wrapper } from '@/src/ducks/store';
import { fetchProductOverviews } from '@/src/repository/client/fetchProductOverviews';
import { GetServerSideProps } from 'next';

export default function SsrPage() {
  return <Overviews />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    const loadData = await fetchProductOverviews();
    store.dispatch(setLoadData(loadData));
    return {
      props: {},
    };
  });
