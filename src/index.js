import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './comp/SeasonDisplay'
import Spinner from './comp/Spinner'

class App extends React.Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  renderContent () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please allow location request' />
  }

  render () {
    return <div className='border red'>{this.renderContent}</div>
  }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
