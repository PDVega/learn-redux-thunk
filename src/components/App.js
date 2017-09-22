import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import store from '../store'
import { Provider } from 'react-redux'

/*import TodoList from './TodoList'
import Home from './Home'
import About from './About'
import TodoDetail from './TodoDetail'
*/

import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Counter/>
      </Provider>
    )
  }
}



const style ={
  box: {
    width: '48%',
    float: 'left',
    height: '400px',
    border: '1px solid #eee'
  },

  container: {
    width: '300px',
    margin: '50px auto',
  },

  menu: {
    display: 'inline-block'
  }

}
export default App;




/*<Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <ul style={style.menu}>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/todos"> Todos </Link></li>
            <li><Link to="/about"> About </Link></li>
          </ul>
          <div style={style.box}>
          <Route path="/todos" component={TodoList}/>
            <Route exact path="/" component={Home} />
          </div>
          <div style={style.box}>
            <Route exact path="/about" component={About}/>
            <Route exact path="/todos/:todoName" component={TodoDetail}/>
          </div>
        </div>
      </Router>*/
