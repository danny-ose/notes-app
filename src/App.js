import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "React is awesome!!", date: "03/09/2023" },
    { id: nanoid(), text: "Luffy is the Pirate King!!", date: "04/09/2023" },
    {
      id: nanoid(),
      text: "Messi is the greatest soccer player!!",
      date: "05/09/2023",
    },
    {
      id: nanoid(),
      text: "Eminem is a legendary rapper!!",
      date: "06/09/2023",
    },
    {
      id: nanoid(),
      text: "Chioma is my ride or die!!",
      date: "06/09/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
