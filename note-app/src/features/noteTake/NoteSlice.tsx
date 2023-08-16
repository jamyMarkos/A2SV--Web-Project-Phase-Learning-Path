import { createSlice } from "@reduxjs/toolkit";
export interface NoteInt {
  id: number;
  text: string;
}

export interface RootState {
  noteList: NoteInt[];
}
const initialState: RootState = {
  noteList: [],
};

export const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.noteList.push(action.payload);
    },
    editNote: (state, action) => {
      const edit = state.noteList.find((note) => {
        return note.id == action.payload.id;
      });
      edit!.text = action.payload.text;
    },
    deleteNote: (state, action) => {
      state.noteList = state.noteList.filter(
        (note) => note.id != action.payload
      );
    },
  },
});

export const { addNote, editNote, deleteNote } = NoteSlice.actions;
export default NoteSlice.reducer;
