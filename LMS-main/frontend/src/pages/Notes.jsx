import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles.css";

export default function Notes() {
  const [note, setNote] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/notes/get")
      .then(res => res.json())
      .then(data => {
        if (data.note) setNote(data.note);
      });
  }, []);

  const handleSave = async () => {
    await fetch("http://localhost:5000/notes/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });

    alert("Saved!");
  };

  return (
    <>
      <Navbar />   
      <div className="notes-container">
        <h2>Your Notes</h2>

        <textarea
          className="notes-box"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button onClick={handleSave} className="notes-btn">Save Note</button>
      </div>
    </>
  );
}
