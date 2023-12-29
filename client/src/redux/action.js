import {storage} from "../App.jsx"
import { getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { ADD_IRREGULAR_VERBS_FAILURE, ADD_IRREGULAR_VERBS_REQUEST, ADD_IRREGULAR_VERBS_SUCCESS, GET_DATA_IRREGULAR_VERBS_PAGE_FAILURE, GET_DATA_IRREGULAR_VERBS_PAGE_REQUEST, GET_DATA_IRREGULAR_VERBS_PAGE_SUCCESS, GET_URL_FILE_FAILURE, UPLOAD_AND_GET_FILE_SUCCESS, UPLOAD_FILE_FAILURE, UPLOAD_FILE_REQUEST } from "./type.js";
import axios from "axios";

export const uploadAndGetURL = (file, status) => async (dispatch) => {
    dispatch({ type: UPLOAD_FILE_REQUEST });
    try {
        const storageRef = ref(storage, `Sound_IrregularVerbs/${file.name}`);   
        await uploadBytes(storageRef, file)
        try {
            getDownloadURL(storageRef).then((url) => {
                dispatch({type: UPLOAD_AND_GET_FILE_SUCCESS, payload: {url: url, status: status}});
            })
        } catch (error) {
            dispatch({type: GET_URL_FILE_FAILURE, error: error.message})
        }
    } catch (error) {
        dispatch({ type: UPLOAD_FILE_FAILURE, error: error.message });
    }
};

export const addIrregularVerbs = (data) => {
	return async (dispatch) => {
        dispatch({type: ADD_IRREGULAR_VERBS_REQUEST})
        try {
            let response = await fetch ("https://ubiquitous-concha-792ae6.netlify.app/.netlify/functions/addIrregularVerbs", {
                method: 'post',
                body: JSON.stringify({     
                    data: data,
                })
            })
            dispatch({type: ADD_IRREGULAR_VERBS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: ADD_IRREGULAR_VERBS_FAILURE , error: error.message})
        }
    }
};



export const getDataIrregularVerbsPage = () => {
	return async (dispatch) => {
        dispatch({type: GET_DATA_IRREGULAR_VERBS_PAGE_REQUEST})
        try {
            let response = await axios ({
                method: 'get',
                url: 'https://ubiquitous-concha-792ae6.netlify.app/.netlify/functions/getDataIrregularVerbsPage',
                responseType: 'json',
            })
            console.log(response);
            dispatch({type: GET_DATA_IRREGULAR_VERBS_PAGE_SUCCESS, payload: response.data, subPayload: response.subData})
        } catch (error) {
            dispatch({type: GET_DATA_IRREGULAR_VERBS_PAGE_FAILURE , error: error.message})
        }
    }
};