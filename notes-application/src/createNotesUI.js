

export function CreateNotesUI(props) {
    const { elem, idx, saveEditedNoteInStorage, deleteNote, editNote } = props;

    return(
        <div className='card'>
            <div className='content' name='content' onBlur={saveEditedNoteInStorage} id={idx}>
                <h4 className='title'>{elem.title}</h4>
                <div className='description'>{elem.description}</div>
            </div>
            <div className='optionMenu'>
                <span id={idx} name="deleteBtn" onClick={deleteNote}> Delete </span>
                <span id={idx} name="editBtn" onClick={(e) => { editNote(e, "edit") }}>Edit</span>
                <span id={idx} name="saveBtn" onClick={(e) => { editNote(e, "save") }}>Save</span>
            </div>
        </div>)
}