import { 
    GET_DATA_IRREGULAR_VERBS_PAGE_REQUEST, 
    GET_DATA_IRREGULAR_VERBS_PAGE_SUCCESS, 
    GET_DATA_IRREGULAR_VERBS_PAGE_FAILURE 
} from "../type";

const initalState = {
    loading: false,
    data: null,
    subData: null,
    error: null,
};

const getDataIrregularVerbsPageReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_DATA_IRREGULAR_VERBS_PAGE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_DATA_IRREGULAR_VERBS_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                subData: action.subPayload
            }
        case GET_DATA_IRREGULAR_VERBS_PAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default getDataIrregularVerbsPageReducer;
