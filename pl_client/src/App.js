import React, { Component } from 'react'
import ShowsContainer from './components/ShowsContainer';
import SuperfansContainer from './components/SuperfansContainer';

class App extends Component {
  render() {
    return (
      <div>
        < ShowsContainer />
        < SuperfansContainer />
      </div>
    )
  }
}

export default App;
