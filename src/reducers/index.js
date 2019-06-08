import { combineReducers } from "redux";

const initList = [
  {
    title: "List 1",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Meow"
      },
      {
        id: 1,
        text: "Hov Hov"
      }
    ]
  },
  {
    title: "List 2",
    id: 1,
    cards: [
      {
        id: 0,
        text: "Hey"
      },
      {
        id: 1,
        text: "Heya"
      },
      {
        id: 2,
        text: "Hallo"
      }
    ]
  }
];

const listsReducer = (list = initList, action) => {
  if (action.type === "CREATE_LIST") {
    return action.payload;
  }
  return list;
};

export default combineReducers({ lists: listsReducer });
