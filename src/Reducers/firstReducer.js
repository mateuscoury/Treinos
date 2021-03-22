const INITIAL_VALUE = {
    valor : 0
}

const firstReducer = (state=INITIAL_VALUE,action) =>{
    switch(action.type){
        case 'MULTIPLICA':
        return {...state,valor:action.payload * action.multiplica}
        default :
        return state
    }
}

export default firstReducer