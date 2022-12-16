import React,{Component} from 'react';
import Donut from './Donut';
class Doit extends Component{
 constructor(){
    super()
    this.state={
        
        topic:'twitter',
        typegraph:'noncum'
    }
 }
 Handletopic=(event)=>{
    event.preventDefault()
    this.setState({
        topic:event.target.value
    })
    
  }
  Handletypegraph=(event)=>{
    event.preventDefault()
    this.setState({
        typegraph:event.target.value
    })
  }

 render(){
    return(
        <div>

            <label>selector</label>
            <select value={this.state.topic} onChange={this.Handletopic}>
            <option value='twitter'>twitter</option>
            <option value='instagram'>instagram</option>
            </select>
            <select value={this.state.typegraph} onChange={this.Handletypegraph}>
            <option value='noncum'>Noncumulative</option>
            <option value='cum'>cumulative</option>
            
            </select>
            <Donut st={this.state.topic} type={this.state.typegraph}/>
 </div>
 

    )

 }
}
export default Doit