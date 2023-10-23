import { configureStore}  from '@reduxjs/toolkit'
import getULRReducer from './slices/uploadAndGetURL'
import addIrregularVerbsReducer from './slices/addIrregularVerbs'
import getDataIrrReducer from './slices/getDataIrregularVerbsPage'


export const store = configureStore({
    reducer: {
        addIrregularVerbs: addIrregularVerbsReducer,
        getURL: getULRReducer,
        getDataIrr: getDataIrrReducer
    }
})
