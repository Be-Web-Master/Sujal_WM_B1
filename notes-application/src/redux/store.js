import { configureStore } from '@reduxjs/toolkit';
import { allNotesReducers, noteReducers } from './slice';

export default configureStore({
    reducer: {
        allNotes: allNotesReducers,
        note: noteReducers,
    }
})