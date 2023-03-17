import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return {};
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

const initialState = {
  userInfo: fetchFromLocalStorage(),
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const userItem = action.payload;
      state.userInfo = userItem;
      storeInLocalStorage(state.userInfo);
    },
    updateUser: (state, action) => {},
  },
});

export const userAction = UserSlice.actions;
export default UserSlice;
