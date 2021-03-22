import React,{useState} from 'react'

const setElements = (clicks,setClicks)=>{
    return(<>
      <h1>{clicks}</h1>
            <button onClick={()=>setClicks(clicks+10)}>Botao 10</button>
        </>
    )
}

function Hooks ({history}){ // declaracao de funcao e props como parametro
    console.log(history)
    const [click,setClick] = useState(0) // state hooks define o state ,e setstate 
    const [clicks,setClicks] = useState(0)
    const [create,createset] = useState(false)
 
    return(
        <div>
<h1>{click}</h1>
<button onClick={()=>setClick(click+1)}>Add ONE</button>
<button onClick={()=>createset(true)}>make Button</button>
{create === true && setElements(clicks,setClicks)}
<button onClick={()=>history.push('/')}>HOME</button>

 
    


        </div>
    )
}

export default Hooks