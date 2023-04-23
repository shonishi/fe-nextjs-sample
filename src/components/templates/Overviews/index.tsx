import { useOverviewsViewModel } from '@/src/ducks/overviews/hooks';
import { default as OverviewsOrganisms } from '../../organisms/Overviews';

export default function Overviews({
  loadData,
  changeColor,
  changeSize,
}: ReturnType<typeof useOverviewsViewModel>) {
  return <OverviewsOrganisms {...{ loadData, changeColor, changeSize }} />;
}
