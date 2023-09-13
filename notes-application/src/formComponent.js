import { InputComponent } from "./inputComponent";
import { ButtonComponent } from "./buttonComponent";
import { notesActions } from "./redux/slice";
import { noteActions } from "./redux/slice";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";


export function FormComponent() {

    const [index, setIndex] = useState(0);
    const currentNote = useSelector(state => {
        return state.note;
    })

    
    const dispatch = useDispatch();
    const { addNewNote, updateNote } = notesActions;
    const { setNoteUpdation, setNoteTitle, setNoteDescription } = noteActions;
    const update = currentNote.update.payload;

    return (
        <form id={index} onSubmit={(e) => { e.preventDefault(); }
        }>
            <InputComponent inputType={"title"} />
            <InputComponent inputType={"des"} />


            {
                update ?
                    <>
                        <ButtonComponent btnText="Update" onClick={() => {
                            dispatch(setNoteUpdation(false));
                            dispatch(updateNote({ title: currentNote.title.payload, description:currentNote.description.payload, id:currentNote.id.payload}))
                            dispatch(setNoteTitle(""));
                            dispatch(setNoteDescription(""));
                        }} />

                        <ButtonComponent btnText="Cancel" />
                    </>
                    : <ButtonComponent btnText="Create" onClick={() => {
                        setIndex(index + 1);
                        dispatch(addNewNote(currentNote));
                        dispatch(setNoteTitle(""));
                        dispatch(setNoteDescription(""));
                    }} />
            }
        </form>
    )
}