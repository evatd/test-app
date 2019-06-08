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
  switch (action.type) {
    // A new list starts with an empty cards array
    // increment a list id by one, so it's unique
    // spead our current lists (initial data) and add new lists
    case "CREATE_LIST": {
      const { title } = action.payload;
      const newList = {
        title,
        id: ListId,
        cards: []
      };
      ListId += 1;
      return [...state, newList];
    }
    default:
      return state;
  }
};

export default combineReducers({ lists: listsReducer });
