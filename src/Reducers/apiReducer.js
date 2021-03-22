

const INITIAL_VALUE = {
    palavra:[]
}

const apiReducer = (state=INITIAL_VALUE,action) =>{
    switch(action.type){
        case 'APIREQUEST':
        return  state
        case 'APIVALOR':
        return {...state,palavra:[action.payload]}
        default:
            return state

    }
}

export default apiReducer