import { ADD_USERS } from "../actions/types";

const initialState = {
  userList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        userList: state.userList.concat(action.data),
      };

    default:
      return state;
  }
};

export default usersReducer;
