import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      
    },
  },
  reducers: {
    addTopic: (state, action) => {
        console.log(action.payload)
    
        const id = action.payload.id
        state.topics[id] =  action.payload;
        state.topics[id].quizIds = [] ;
        console.log(state.topics)
    },
  },

  extraReducers: (builder) => {
    builder
    .addCase(addQuiz, (state, action) => {
        const topicId = action.payload.topicId;
        console.log(action.payload)
        state.topics[topicId].quizIds.push(action.payload.id)
        console.log("quizIds for" ,topicId, "are ", state.topics[topicId].quizIds)


        
    })
    
  }
});

export const {
    addTopic,
 } = topicsSlice.actions;

export const selectTopic = (state) =>  state.topics.topics;

export default topicsSlice.reducer
