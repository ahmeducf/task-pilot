import { SORT, ORDERING } from '../constants';

const Sort = (state = {}) => {
  let sortBy = state.sortBy ?? SORT.PRIORITY;
  let ordering = state.ordering ?? ORDERING.DESC;

  const getSortBy = () => sortBy;

  const setSortBy = (newSortBy) => {
    sortBy = newSortBy;
  };

  const getOrdering = () => ordering;

  const setOrdering = (newOrdering) => {
    ordering = newOrdering;
  };

  const toJSON = () => ({
    sortBy,
    ordering,
  });

  return {
    getSortBy,
    setSortBy,
    getOrdering,
    setOrdering,
    toJSON,
  };
};

export default Sort;
