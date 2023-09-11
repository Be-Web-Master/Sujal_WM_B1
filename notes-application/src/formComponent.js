export function FormComponent({ saveNoteData }) {

    return(
        <form id="form" onSubmit={saveNoteData}>
            <input
                type='text'
                placeholder='Title'
                id='inputId'
            />
            <textarea
                rows={5}
                placeholder='Add a note...'
                id='textAreaId'
            ></textarea>
            <button>Add Note</button>
        </form>
    )
}