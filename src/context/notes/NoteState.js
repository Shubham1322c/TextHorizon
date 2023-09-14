import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    let notesInitial = [
        {
          "_id": "64f5781e6640a0effcec355b6",
          "user": "64e5aadeaaa46523ada46041",
          "title": "my title",
          "description": "Dil Main Mere Hai Dar De Disco",
          "tags": "General",
          "__v": 0
        },
        {
          "_id": "64fe93ee682819d45cf0de987",
          "user": "64e5aadeaaa46523ada46041",
          "title": "Dar De Disco",
          "description": "Dil Main Mere Hai Dar De Disco",
          "tags": "General",
          "__v": 0
        },
        {
          "_id": "64f5781e6646a0effcec355b6",
          "user": "64e5aadeaaa46523ada46041",
          "title": "my title",
          "description": "Dil Main Mere Hai Dar De Disco",
          "tags": "General",
          "__v": 0
        },
        {
          "_id": "64fe93ee682119d45cf0de987",
          "user": "64e5aadeaaa46523ada46041",
          "title": "Dar De Disco",
          "description": "Dil Main Mere Hai Dar De Disco",
          "tags": "General",
          "__v": 0
        },
        {
          "_id": "64f5781e664a0effce2c355b6",
          "user": "64e5aadeaaa46523ada46041",
          "title": "my title",
          "description": "Dil Main Mere Hai Dar De Disco",
          "tags": "General",
          "__v": 0
        },
        {
          "_id": "64fe93ee68219d45cf0d3e987",
          "user": "64e5aadeaaa46523ada46041",
          "title": "Dar De Disco",
          "description": "Dil Main Mere Hai Dar De Disco",
          "tags": "General",
          "__v": 0
        }
      ];
      const [notes, setnotes] = useState(notesInitial)


      // Add notes function
      const addNote = (title, description, tags) => {
        //TODO : APi call
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
      const editNote = () => {

      }
      

    return(
        <NoteContext.Provider value={{notes, deleteNote, editNote, addNote}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState;