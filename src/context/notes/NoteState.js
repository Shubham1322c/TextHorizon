import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
  const host = "http://localhost:5000";
    let notesInitial = [];
      const [notes, setnotes] = useState(notesInitial)


      // fetch notes function
      const getNote = async () => {
        // api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNWFhZGVhYWE0NjUyM2FkYTQ2MDQxIn0sImlhdCI6MTY5MzQ2NTgxMX0.YtiO_wQP_tA7lnsGFxNWvMmsmgkB_PBNDteMPPQYSJA"
          }
        });
        const json = await response.json();
        console.log(json)
        setnotes(json);
      }


      // Add notes function
      const addNote = async (title, description, tags) => {
        // api call
        const response = await fetch(`${host}/api/notes/addnotes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNWFhZGVhYWE0NjUyM2FkYTQ2MDQxIn0sImlhdCI6MTY5MzQ2NTgxMX0.YtiO_wQP_tA7lnsGFxNWvMmsmgkB_PBNDteMPPQYSJA"
          },
          body: JSON.stringify({title, description, tags})
        });
        let note = {
          "_id": "64fe93ee68219d45cf0d3e987",
          "user": "64e5aadeaaa46523ada46041",
          "title": title,
          "description": description,
          "tags": tags,
          "__v": 0
        };

        setnotes(notes.concat(note));
      }





      //delete a note
      const deleteNote = (id) => {
        //TODO : Api call
        console.log(id)
        const newNotes = notes.filter((note) => {return note._id !== id})
        setnotes(newNotes)
      }





      //edit a note
      const editNote = async (id, title, description, tags) => {
        // api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNWFhZGVhYWE0NjUyM2FkYTQ2MDQxIn0sImlhdCI6MTY5MzQ2NTgxMX0.YtiO_wQP_tA7lnsGFxNWvMmsmgkB_PBNDteMPPQYSJA"
          },
          body: JSON.stringify({title, description, tags})
        });
        const json = await response.json();


        //edit note in clinet
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tags = tags;
          }
        }
      }
      

    return(
        <NoteContext.Provider value={{notes, deleteNote, editNote, addNote, getNote}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;