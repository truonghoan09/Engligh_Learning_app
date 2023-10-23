// import { ADD_IRREGULAR_VERBS_REQUEST, ADD_IRREGULAR_VERBS_SUCCESS, ADD_IRREGULAR_VERBS_FAILURE } from "../type";
// const initalState = {
//     loading: false,
//     data: null,
//     error: null
// };

// const addIrregularVerbsReducer = (state = initalState, action) => {
//     switch (action.type) {
//         case ADD_IRREGULAR_VERBS_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             }
//         case ADD_IRREGULAR_VERBS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 data: action.payload
//             }
//         case ADD_IRREGULAR_VERBS_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.error
//             }
//         default:
//             return state;
//     }
// }

// export default addIrregularVerbsReducer;
