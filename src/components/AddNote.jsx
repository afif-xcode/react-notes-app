import React, { useState } from "react";
import "./Note.css";
const AddNote = (props) => {
  const [noteText, setNoteText] = useState();
  const charlimit = 200;
  const handleChange = (event) => {
    if(charlimit - event.target.value.length >=0){
      setNoteText(event.target.value);
    }else{
      alert("Reached 200 words limit!");
    }
  };
  const handleSaveClick = ()=>{
    props.handleAddNote(noteText);
    setNoteText('');
  }
  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        wrap='hard'
        placeholder="Type your notes here...."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        {/* <span>{charlimit-noteText.length} Remaining</span> */}
        <button className="save-btn" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
