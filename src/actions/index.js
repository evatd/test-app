const createList = list => {
  return {
    type: "CREATE_LIST",
    payload: list
  };
};

export { createList };
