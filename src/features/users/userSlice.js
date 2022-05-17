import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Jonny", email: "jonny@gmail.com" },
  { id: "2", name: "jenny", email: "jenny@gmail.com" },
  { id: "3", name: "Alex", email: "alex@gmail.com" },
  { id: "4", name: "Anderson", email: "anderson@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("====================================");
      console.log(action);
      console.log("====================================");
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
