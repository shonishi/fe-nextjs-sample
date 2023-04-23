import { default as OverviewsTemplates } from '@/src/components/templates/Overviews';
import { useOverviewsViewModel } from '@/src/ducks/overviews/hooks';

export default function Overviews() {
  const { loadData, changeColor, changeSize } = useOverviewsViewModel();
  return <OverviewsTemplates {...{ loadData, changeColor, changeSize }} />;
}
