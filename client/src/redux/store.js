import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import uploadAndGetFileReducer from './reducer/uploadAndGetFileReducer';
import addIrregularVerbsReducer from './reducer/addIrregularVerbsReducer';
import getDataIrregularVerbsPageReducer from './reducer/getDataIrregularVerbsPageReducer';


const rootReducer = combineReducers({
    uploadAndGetFileReducer, 
    addIrregularVerbsReducer,
    getDataIrregularVerbsPageReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
