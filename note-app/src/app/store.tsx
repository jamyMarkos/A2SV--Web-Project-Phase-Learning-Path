import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/noteTake/NoteSlice";

export const store = configureStore({
  reducer: {
    noteTracker: noteReducer,
  },
});
