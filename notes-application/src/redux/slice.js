import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "notes",
    initialState: [],
    reducers: { 
        addNewNote: (state, action) => {
            let { title, description } =action.payload;
            title = title.payload;
            description = description.payload;
            state.push({ title: title, description: description })
            return state;
        },

        deleteNote: (state, action) => {
            state.splice(action.payload, 1);
            return state;
        },

        updateNote: (state, action) => {
            const { title, description, id } = action.payload;
            const DataArr = state.map((elem,idx)=>{
                if(id===idx) return { title: title, description: description}
                else return elem;
            })
            return DataArr;
        }
    }
});

export const inputSlice = createSlice({
    name: "note",
    initialState : {title: "", description: "", update: false, id: 0},
    reducers : {
        setNoteTitle : (state, action) => {
            state.title = action;  
            return state;
        },

        setNoteDescription: (state, action) => {
            state.description = action;
            return state;
        },
        setNoteUpdation: (state, action) => {
            state.update = action;
            return state;
        },
        setIndex: (state, action )=>{
            state.id = action;
            return state;
        }
        
    }
});


export const { actions: notesActions, reducer: allNotesReducers } = noteSlice;
export const { actions: noteActions, reducer: noteReducers } = inputSlice;
