import {ORDER,COMPROBANTES} from '../actions/index'

const initialState={
    comprobantes:[],
    filterComprobantes:[],
    allComprobantes:[],
}

function rootReducer(state= initialState, action){
    switch (action.type) {
        case COMPROBANTES:
            return {
                ...state,
                comprobantes: action.payload,
                filterComprobantes: action.payload
            }
        case ORDER:
            const orderName = action.payload === 'Asc' ?
                state.comprobantes.sort(function (a,b) {
                    if(a.name > b.name){
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                }):
                state.comprobantes.sort(function (a,b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
            
                return {
                    ...state,
                    comprobantes: orderName
                }
            
                default:
                     return state;
    }
};

export default rootReducer;