import React, { useContext, useState } from "react";
import noteContext from '../context/notes/noteContext';
function AddNote() {
  const context = useContext(noteContext)
  const {addNote} = context;

  const [note, setnote] = useState({title:"", description:"", tags:""})
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tags);
  }
  const onChange = (e) => {
    setnote({...note, [e.target.name]:[e.target.value]})
  }
  return (
    <>
        <h2 className="d-flex justify-content-center my-3" >Add A Note</h2>
    <div className="container my-4">
      <form>
        <div className="container">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="A Thirsty Crow"
              name="title"
              onChange={onChange}
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control mb-3"
              placeholder="Write Summary or Discription here"
              id="description"
              name="description"
              onChange={onChange}
              style={{height: "200px"}}
            ></textarea>
            <label htmlFor="description">Comments</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="tags"
              name="tags"
              onChange={onChange}
              placeholder="General"
            />
            <label htmlFor="tags">Tags</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Save Note!
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default AddNote
