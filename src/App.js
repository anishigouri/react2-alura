import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';

/*
  this.props.params.login - Parametro passado na URL
*/
class App extends Component {
  render() {
    return (
      <div id='root'>
        <div className='main'>
          <Header />
          <Timeline login={this.props.params.login} />
        </div>
      </div>
    );
  }
}

export default App;
