import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {

    },
  },
  reducers: {
    addCard: (state, action) => {
        const id = action.payload.id;
        state.cards[id] = action.payload;
    }
  },
});

export const {
    addCard,
 } = cardsSlice.actions;
 
 

export const selectCards = (state, id) =>  state.cards.cards[id]

export default cardsSlice.reducer
