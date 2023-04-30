import Overviews from '@/src/containers/templates/Overviews';
import { setLoadData } from '@/src/ducks/overviews/slice';
import { wrapper } from '@/src/ducks/store';
import { fetchProductOverviews } from '@/src/repository/client/fetchProductOverviews';

export default function SsrPage() {
  return <Overviews />;
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const loadData = await fetchProductOverviews();
  store.dispatch(setLoadData(loadData));
  return {
    props: {},
  };
});
