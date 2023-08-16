import { useState } from "react";
import { addNote, editNote, deleteNote, NoteInt } from "./NoteSlice";
import { useSelector, useDispatch } from "react-redux";

const NoteTake = () => {
  const { noteList } = useSelector((store) => (store as any).noteTracker);
  const dispatch = useDispatch();
  const [editingNote, setEditingNote] = useState<NoteInt>();
  const [newNote, setNewNote] = useState<string>("");
  const handleAdd = (ev: any) => {
    ev.preventDefault();
    const note = {
      id: Math.floor(Math.random() * 1000),
      text: newNote,
    };
    dispatch(addNote(note));
    setNewNote("");
  };

  const handleEdit = () => {
    dispatch(editNote(editingNote));
    setEditingNote(undefined);
  };
  return (
    <div className="container mx-auto">
      <div className="shadow-lg border rounded-lg max-w-screen-xs p-6 mt-8">
        <h2 className="text-center font-bold text-slate-800 py-2 px-2 text-4xl">
          Note Tracker
        </h2>
        <div>
          <form className="grid grid-cols-12 items-center mb-12">
            <input
              type="text"
              className="px-3 col-span-10 py-1 border border-gray-200 outline-none"
              onChange={(e) => setNewNote(e.target.value)}
              value={newNote}
              required
            />
            <button
              className="text-center col-span-2 font-semibold bg-[#999] py-2 px-3 rounded-lg mx-3 hover:scale-115 hover:opacity-80"
              type="submit"
              onClick={handleAdd}
              disabled={editingNote !== undefined}
            >
              Add Note
            </button>
          </form>
        </div>

        <ul className="grid grid-cols-3 gap-5">
          {noteList!.map((note: NoteInt) => (
            <div className="flex justify-between items-center">
              {editingNote && editingNote.id === note.id ? (
                <form>
                  <input
                    type="text"
                    className="px-3 col-span-10 py-1 border border-gray-200 outline-none"
                    value={editingNote.text}
                    onChange={(e) =>
                      setEditingNote({ ...editingNote, text: e.target.value })
                    }
                  />
                  <button
                    className="text-center col-span-2 font-semibold bg-[#999] py-2 px-3 rounded-lg mx-3 hover:scale-115 hover:opacity-80"
                    type="button"
                    value={"something"}
                    onClick={handleEdit}
                  >
                    Save
                  </button>
                  <button
                    className="text-center col-span-2 font-semibold bg-[#999] py-2 px-3 rounded-lg mx-3 hover:scale-115 hover:opacity-80"
                    type="button"
                    onClick={() => setEditingNote(undefined)}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <li className="bg-gradient-to-br from-[#166534] text-white to-[#059669] p-3 h-40 flex flex-col justify-between">
                  <p key={note.id} className="word-break">
                    {note.text}
                  </p>
                  <div className="flex justify-between">
                    <button
                      className="text-center aspect-auto col-span-2 font-semibold bg-green-500 text-white px-3 rounded-lg mx-3 hover:scale-115 hover:opacity-80"
                      onClick={() => {
                        setEditingNote(note);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-center aspect-auto col-span-2 font-semibold bg-green-500 text-white px-3 rounded-lg mx-3 hover:scale-115 hover:opacity-80"
                      onClick={() => dispatch(deleteNote(note.id))}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteTake;
