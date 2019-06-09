const createList = title => {
  console.log("action", title);
  // payload: title is an option, then title will be accessed as action.payload
  // We want a separate property for it,
  // when accessing it in the reducer like title: action.payload.title,
  // NOT title: action.payload. More specific.
  // so we make title an object below: { title}
  //  this way,payload will be an object = payload: { 'hii' }
  return {
    type: "CREATE_LIST",
    payload: { title }
  };
};

export { createList };
