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

let ListId = 3;
const listsReducer = (state = initList, action) => {
  if (action.type === "CREATE_LIST") {
    const newList = {
      id: ListId,
      title: action.payload.title,
      cards: []
    };
    ListId += 1;
    return [...state, newList];
  }
  return state;
};

export default combineReducers({ lists: listsReducer });
