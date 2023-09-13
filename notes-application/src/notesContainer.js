import { useSelector, useDispatch } from 'react-redux';
import { ButtonComponent } from './buttonComponent';
import { noteActions, notesActions } from "./redux/slice";
import { NotesComponent } from './notesComponent';

 export function NotesContainer() {

    const  notesArr =  useSelector((state)=>{
        return (state.allNotes);
    })

    const dispatch = useDispatch();
    const { setNoteUpdation, setNoteTitle, setNoteDescription, setIndex } = noteActions;
    const { deleteNote } = notesActions;    
    return(
        <div className='container'>
            {
                notesArr.map((elem, idx)=>{
                  return (
                      <div className='content' id={idx}>
                          <NotesComponent obj={elem} index={idx}/>
                          <ButtonComponent index={idx} btnType={"onclick"} btnText={"Edit"} onClick={() => {
                                dispatch(setNoteUpdation(true));
                                dispatch(setNoteTitle(elem.title));
                                dispatch(setNoteDescription(elem.description));
                                dispatch(setIndex(idx))
                            }} />
                          <ButtonComponent index={idx} btnType={"onclick"} btnText={"Delete"} onClick={() =>    { 
                            dispatch(deleteNote(idx));
                            }} />
                      </div>
                    )
                })
            }
        </div>
    )
}
