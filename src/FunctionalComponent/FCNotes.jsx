import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function FCNotes(props) {


    return (
        <div>
           <h2>Notes</h2>
           <div className="box">
           {props.notes.map((note,index)=>{
               return(
                   <div className="card">{note.title}--{note.description} <button style={{marginLeft: 15}} onClick={()=> props.removeNote(index)}>     X</button></div>
               )
           })} <br/>
           </div>
        <Link to="/main">To add more notes, click here !</Link>

        </div>
    )
}
