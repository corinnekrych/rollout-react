import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from'./components/card'
import {getOptions} from './rollout'
import Alert from "./components/alert";
const Rox = require('rox-browser')

class App extends React.Component {
  constructor() {
    super()
    this.options = getOptions('freeze', this.onFlagChange)

    this.state = {
      featureA: undefined,
      featureB: undefined,
      featureC: undefined,
      alert: false
    }

  }
  onFlagChange = () => {
    this.setState({
      alert: true
    })
  }
  unfreeze = () => {
    Rox.unfreeze()  // Unfreeze so that SSE push notification changed the localStorage
    this.updateDisplay()
  }
  updateDisplay = async() => {
    let featureA = Rox.dynamicApi.isEnabled('demo.featureA', true);
    console.log(`featureA == ${featureA}`)
    let featureB = Rox.dynamicApi.isEnabled('demo.featureB', true);
    console.log(`featureB == ${featureB}`)
    let featureC = Rox.dynamicApi.isEnabled('demo.featureC', true);
    console.log(`featureC == ${featureC}`)
    this.setState({
      featureA,
      featureB,
      featureC,
      alert: false
    })
  }

  async componentDidMount() {
    console.log('Call setup 1')
    await Rox.setup(process.env.REACT_APP_ROX_APP_KEY, this.options)
    this.updateDisplay()

    const r = Rox.flags
    r.forEach(e => console.log(`::::::flags: ${JSON.stringify(e)}`))

  }
  close = () => {
    this.setState({alert: false})
  }

  render() {
    return (
        <div className="App">
          <header>
            <h1 className="display-3 text-center my-4">Rollout Demo</h1>

            <hr/>
          </header>
          <div className="container">
            <Alert display={this.state.alert} onClose={this.close} onUnfreeze={this.unfreeze} />

            <br/>
            <br/>

            <Card flag={this.state.featureA} name={"Feature A"}/>

            <br/>
            <br/>

            <Card flag={this.state.featureB} name={"Feature B"}/>
            <br/>
            <br/>

            <Card flag={this.state.featureC} name={"Feature C"}/>
          </div>
        </div>
    )
  }
}

export default App;

