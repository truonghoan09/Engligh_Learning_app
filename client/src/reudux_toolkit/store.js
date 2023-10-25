import { configureStore, getDefaultMiddleware}  from '@reduxjs/toolkit'
import getULRReducer from './slices/uploadAndGetURL'
import addIrregularVerbsReducer from './slices/addIrregularVerbs'
import getDataIrrReducer from './slices/getDataIrregularVerbsPage'
import createSagaMiddleware  from 'redux-saga'
import getDataIrreSaga from './saga/getDataIrregularVerbsPageSaga'
import addIrrVerbsSaga from './saga/addIrregularVerbsSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        addIrregularVerbs: addIrregularVerbsReducer,
        getURL: getULRReducer,
        getDataIrr: getDataIrrReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(getDataIrreSaga);
sagaMiddleware.run(addIrrVerbsSaga);