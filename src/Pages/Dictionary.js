import React from 'react'
import { connect } from 'react-redux'
import actionns from '../Actions'
import '../css.css'


class Dictionary extends React.Component{
    constructor(){
        super()
        this.state = ({
            palavrar:'en_US',
            lingua:''
        })
    }

    playAudio (){
    const audio = document.querySelector('audio')
      audio.play()
       
    }
    render(){

        const {palavras,procura} = this.props
        const {palavrar,lingua} = this.state
     const idiomas = ['en_US','pt-BR','ja','fr','es']
  const array = palavras[0]
  

        
        return(
            <div >
                <label>
                    Palavra

                   <input type='text' onChange={(e)=>this.setState({lingua:e.target.value})}/>

                </label>
                   <label>
                    Idioma
                    <select onChange={(e)=>this.setState({palavrar:e.target.value})}>
{idiomas.map(idi=><option>{idi}</option>)}
                    </select>
                   </label>
                
                <button onClick={()=>procura(palavrar,lingua)}>Procura</button>
                {array && array.map(({word,meanings,phonetics})=>{
                    return (
                        <>
                        <h1>{word}</h1>

                        {meanings.map(({definitions})=>{
                            return (
                                definitions.map(({definition})=>{
return(
<ul>
                                <li>{definition}</li>
                                </ul>

   )   }
                                )
                            )
                        }
                        )}
                     {phonetics.map(({audio,text})=>{
                         return(
                             <>
                           <audio src={audio}></audio>
                           <button onClick={this.playAudio}>play</button>
                             <p>{text}</p>
                             </>
                         )

                     })}
                       
                        
                        </>
                    )
                })}
          
               
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    palavras:state.apiReducer.palavra
})

const mapDispatchToProps = (dispatch) =>({
    procura:(palavra,lingua)=>dispatch(actionns(palavra,lingua))
})
export default connect(mapStateToProps,mapDispatchToProps)(Dictionary)