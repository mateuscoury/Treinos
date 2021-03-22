

export const multiplicaAction = (valor,multiplicaNumber)=>({
type:'MULTIPLICA',
payload:valor,
multiplica:multiplicaNumber

})



const apiRequest = ()=>({
    type:'APIREQUEST'
})
const apiValue = (palavra) =>({
    type:'APIVALOR',
    payload:palavra
})

const callAPI = (lingua,palavra)=>
     async (dispatch)=>{
        dispatch(apiRequest())
        const apicall = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${lingua}/${palavra}`)

        const json = await apicall.json()
       
 
        
        
        dispatch(apiValue(json))
    
}



export default callAPI