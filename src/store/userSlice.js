import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    cartinfo: [
      {
        name: "title1",
        image: "http://loremflickr.com/640/480/abstract",
      },      {
        name: "title2",
        image: "http://loremflickr.com/640/480/animals",
      },      {
        name: "title3",
        image: "http://loremflickr.com/640/480/sports",
      },      {
        name: "title4",
        image: "http://loremflickr.com/640/480/abstract",
      },      {
        name: "title5",
        image: "http://loremflickr.com/640/480/food",
      },      {
        name: "title6",
        image: "http://loremflickr.com/640/480/abstract",
      },      {
        name: "title7",
        image: "http://loremflickr.com/640/480/people",
      },      {
        name: "title8",
        image: "http://loremflickr.com/640/480/technics",
      },      {
        name: "title9",
        image: "http://loremflickr.com/640/480/cats",
      },      {
        name: "title10",
        image: "http://loremflickr.com/640/480/abstract",
      }
    ],
    deletecart: true,
  },
  reducers: {
    update: (state, action) => {
      state.cartinfo[0].name = action.payload.name;
      state.cartinfo[1].name = action.payload.name;
      state.cartinfo[2].name = action.payload.name;
      state.cartinfo[3].name = action.payload.name;
      state.cartinfo[4].name = action.payload.name;
      state.cartinfo[5].name = action.payload.name;
      state.cartinfo[6].name = action.payload.name;
      state.cartinfo[7].name = action.payload.name;
      state.cartinfo[8].name = action.payload.name;
      state.cartinfo[9].name = action.payload.name;
    },
    remove: (state) => {
      state.deletecart = false;
    },
  },
});

export const { update, remove } = userSlice.actions;

export default userSlice.reducer;

