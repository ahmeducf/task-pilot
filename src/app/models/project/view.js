import { LAYOUT } from '../../constants';
import Sort from './sort';

const View = (state = {}) => {
  let layout = state.layout ?? LAYOUT.LIST;
  const sort = Sort(state.sort);

  const getLayout = () => layout;

  const setLayout = (newLayout) => {
    layout = newLayout;
  };

  const getSort = () => sort;

  const setSort = (newSort) => {
    sort.setSortBy(newSort.sortBy);
    sort.setOrdering(newSort.ordering);
  };

  const toJSON = () => ({
    layout,
    sort: sort.toJSON(),
  });

  return {
    getLayout,
    setLayout,
    getSort,
    setSort,
    toJSON,
  };
};

export default View;
