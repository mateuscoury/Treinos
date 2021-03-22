import React from 'react'
import { connect } from 'react-redux'
import actionss from '../Actions/index'

class Home extends React.Component{
    constructor(){
        super()
        this.state ={
            numero:0
        }
    }
    render(){
        const {total,enviarNumero}= this.props
     
        return(
            <div>
                <input type='text' onChange={(e)=>this.setState({numero:e.target.value})}/>
                <input type='text'  onChange={(e)=>this.setState({multiplica:e.target.value})}/>
                <button onClick={()=>enviarNumero(this.state.numero,this.state.multiplica)}>Aqui</button>
                    <h1>{total}</h1>
                    <button type='button' onClick={()=>this.props.history.push('/dictionary')}>Dictionary Page</button>
            </div>
        )
    }
}
const mapStateToProps =(state)=>({
    total:state.firstReducer.valor

})
const mapDispatchToProps= (dispatch)=>({
    enviarNumero :(numero1,numero2)=>dispatch(actionss(numero1,numero2))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)