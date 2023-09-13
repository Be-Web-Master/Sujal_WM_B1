import { noteActions } from "./redux/slice";
import { useSelector, useDispatch } from "react-redux";
export function InputComponent(props) {
    const { inputType } = props;

    const currentNoteState = useSelector(state=>{
        return state.note;
    })
  
    const dispatch = useDispatch();
    const { setNoteTitle , setNoteDescription} = noteActions;
    return (
        <>
            {
                inputType === 'title' ?
                    <input type='text' placeholder="Title" value={currentNoteState.title.payload} onChange={(e)=>{
                        dispatch(setNoteTitle(e.target.value))
                    }}/>
                    : <textarea placeholder="Add description....." value={currentNoteState.description.payload} onChange={(e) => {
                        dispatch(setNoteDescription(e.target.value))
                    }}></textarea>
            }
        </>
    )

}