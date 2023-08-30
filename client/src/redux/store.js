import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import uploadAndGetFileReducer from './reducer/uploadAndGetFileReducer';
import addIrregularVerbsReducer from './reducer/addIrregularVerbsReducer';


const rootReducer = combineReducers({
    uploadAndGetFileReducer, 
    addIrregularVerbsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
