import React from 'react'
import { connect } from 'react-redux'

import store from '../store'
import { increment, decrement } from '../actions/counterAction'
import { fetchApi } from '../actions/api_request'

class Counter extends React.Component{

  constructor(){
    super()
    this.state = {
      _counter: 0,
      _step: 1
    }
  }

  handleChange(e){
    this.setState({
      _step: e.target.value
    })
  }

  render(){
    return(
      <div style={style.container}>
        <h1>{ this.props.counteria }</h1>
        <input type="number" onChange={ (e) => this.handleChange(e) } />
        <button onClick={ () => this.props.tambah(this.state._step) }> Increment </button>
        <button onClick={ () => store.dispatch(decrement) }>Decrement</button>
        <button onClick={ () => this.props.fetchApi() } > FetchAPI </button>

        <h2>List users</h2>
            {this.props.users.map( user => {
              return <div>{user.name}</div>
            })}
      </div>
    )
  }

}

// store.getState().counter
// store.getState() = state
const mapStateToProps = (state) => {
  debugger
  return {
    counteria: state.counter.counter,
    users: state.user.users
  }
}

// store.dispatch(__namaAction__) = dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    tambah: (step) => dispatch( increment(step) ),
    fetchApi: () => dispatch(fetchApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)





const style ={
  container: {
    width: '300px',
    margin: '50px auto',
  }
}
