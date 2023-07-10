import { LAYOUT } from '../../constants';
import Sort from './sort';

const View = (state = {}) => {
  if (!state) {
    throw new Error('View: stat is required');
  }

  let layout = state.layout ?? LAYOUT.LIST;
  let sort = Sort(state.sort);

  const getLayout = () => layout;

  const setLayout = (newLayout) => {
    layout = newLayout;
  };

  const getSort = () => sort;

  const setSort = (newSort) => {
    sort = Sort(newSort);
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
