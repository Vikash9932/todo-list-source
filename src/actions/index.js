export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};

export const filterList = (category) => {
  return {
    type: 'FILTER_LIST',
    payload: category,
  };
};
