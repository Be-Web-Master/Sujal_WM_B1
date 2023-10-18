import './App.css';
import { useEffect, useState } from "react";
import { CreateNotesUI } from './createNotesUI';
import { FormComponent } from './formComponent';


function getLocalData() {
    const noteList = localStorage.getItem("noteState");
    if(noteList) {
        return JSON.parse(localStorage.getItem("noteState"))
    } else return [] ;
}

export default function CreateNewNotes() {

    let [note, setNote] = useState(getLocalData());
    const defaultText = document.getElementById("defaultText");
    if(note.length>0 && defaultText) defaultText.style.display = "none";

    useEffect(() => {
        localStorage.setItem('noteState', JSON.stringify(note));
    }, [note]);

    function saveNoteDataFunc(event) {
        event.preventDefault();
        let titleVal = event.target.children[0].value;
        let descriptionVal = event.target.children[1].value;
        if (!titleVal && !descriptionVal) return alert("Note is empty");
        const newNote = [...note, { title: titleVal, description: descriptionVal }];
        setNote(newNote);
        event.target.children[0].value = '';
        event.target.children[1].value = '';
    }


    function deleteNoteFunc(event) {
        const newNote = [...note];
        newNote.splice(event.target.id, 1)
        setNote(newNote);
    }

    function editNoteFunc(event, option) {
        const contentId = document.getElementsByName("content")[event.target.id];
        const saveBtn = document.getElementsByName("saveBtn")[event.target.id];

        if(option === "edit") {
            contentId.setAttribute("contentEditable", "true")
            saveBtn.style.display = "inline";
        }
        else {
            contentId.removeAttribute("contentEditable", "false");
            saveBtn.style.display = "none";
        }
    }

    function saveEditedNoteInStorageFunc(event) {
        const editedTitle = event.target.children[0].innerText;
        const editedDes = event.target.children[1].innerText;
        const newNote = [...note]
        newNote.splice(event.target.id, 1, { title: editedTitle, description: editedDes })
        setNote(newNote);
    }
    
    return (
        <div >
            <div className='header'>
                <FormComponent saveNoteData={saveNoteDataFunc}/>
            </div>
            <div id='cardBoxId'>{
                note.map((notesObj, index) => {
                    console.log([notesObj])
                    return(
                        <CreateNotesUI 
                            elem={notesObj} 
                            idx={index} 
                            deleteNote={deleteNoteFunc} 
                            editNote={editNoteFunc} saveEditedNoteInStorage={saveEditedNoteInStorageFunc} 
                        />)
                })
            }</div>
            <h3 id='defaultText'>Your notes will appear here</h3>
        </div>
    );
}
