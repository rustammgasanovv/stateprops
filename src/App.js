import React, { Component } from 'react'
import Container from './component/Container'

export class App extends Component {
  state= {
    firstName:'',
    lastName:'',
    ondan:true
  }

  // changeName(e){
  //   this.setState({
  //     firstName: e.target.value
  //   })
  // }

  // changeLastname(e){
  //   this.setState({
  //     lastName: e.target.value
  //   })
  // }


  // changeStateValue(e){
  //   console.log(e.target.name);
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick(){
    if(this.state.ondan ==true){
      this.setState({
        ondan : false
      })
    }else{
      this.setState({
        ondan : true
      })
    }
  }
  
  render() {
    const {firstName, lastName, ondan} = this.state
    return (
      
      <div>
        
        {/* <input type='text' placeholder='firstName' name='firstName' onChange={this.changeStateValue.bind(this)}/> <br /><br />
        <input type='text' placeholder='lastName' name='lastName' onChange={this.changeStateValue.bind(this)}/> */}

        {/* <input type='text' placeholder='firstName' name='firstName' onChange={this.changeStateValue.bind(this)}/> <br /> <br />
        <input type='text' placeholder='lastName' name='lastName' onChange={this.changeStateValue.bind(this)}/>
        <h2>{firstName} {lastName}</h2> */}

        
        <button onClick={this.handleClick.bind(this)}>click</button>
        <div style={{width:'200px', height:'200px', backgroundColor:'red' ,display: ondan== true? "block": "none"}}></div>
        
        {/* <Container /> */}
      </div>
    )
  }
}

export default App