import React,{ Component} from 'react'
import axios from 'axios'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      dotas: []
    }
  }


  componentDidMount () {
    axios.get('http://api.herostats.io/heroes/all')
      .then(response => {
        this.setState({
          dotas: response.data
        })
      })
      .catch(err => {

      })
  }

  render() {
    const { dotas } = this.state
    console.log('-------------------1', dotas[1])

    return (
      <div>
        <h1>{dotas["1"]}</h1>
        <ul>
          { dotas.map( (hero, index) => {
            return (
              <li>{JSON.stringify(dotas[index.toString()])}</li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}
export default App;

