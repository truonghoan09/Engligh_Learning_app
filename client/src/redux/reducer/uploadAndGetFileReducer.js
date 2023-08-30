import { GET_URL_FILE_FAILURE, UPLOAD_AND_GET_FILE_SUCCESS, UPLOAD_FILE_FAILURE, UPLOAD_FILE_REQUEST } from "../type";

const initialState = {
    loading: false,
    payload: {
        url: null,
        status: null,
    },
    error: null,
  };
  

const uploadAndGetFileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_FILE_REQUEST:
            return {...state, loading: true, payload: null, error: null}
        case UPLOAD_FILE_FAILURE:
            return {...state, loading: false, payload: null, error: action.error}
        case GET_URL_FILE_FAILURE:
            return {...state, loading: false, payload: null, error: action.error}
        case UPLOAD_AND_GET_FILE_SUCCESS:
            return {...state, loading: false, payload: action.payload, error: null}
        default:
            return state; 
    }
}

export default uploadAndGetFileReducer;