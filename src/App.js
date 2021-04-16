import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import {Component} from 'react'
import {createStore} from 'redux'

class App extends Component {
  
state={
  count:0
}


  add1=()=>{
    
    console.log("value incremented")
    store.dispatch(increment())
    console.log(store.getState())
    this.setState({count:store.getState()})
    
  }
  sub1=()=>{
    
    console.log("value decremented")
    store.dispatch(decrement())
    console.log(store.getState())
    this.setState({count:store.getState()})
  }
  render(){
    return (
    <div className="App">
      <button onClick={this.add1}>add</button>
      <div>{count}</div>
      <button onClick={this.sub1}>sub</button>
    </div>
    )
  }
}

const increment =()=>{
  return {
    type:"INCR"
  }
}


const decrement =()=>{
  return {
    type:"DECR"
  }
}

const reducerCount=(state=0,action)=>{
  switch(action.type){
    case 'INCR':
      return state+1
    case 'DECR':
      return state-1
    
  }
}

let store=createStore(reducerCount)
let count=0
store.subscribe(()=>{
  count=store.getState()
})

export default App;
