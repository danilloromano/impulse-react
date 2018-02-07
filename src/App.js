import React, { Component } from 'react';
import HeaderCustom from './componentes/headerCustom';

class App extends Component {

  render() {    
    return (        
      <div id="layout">
        <HeaderCustom/>
            <div id="main" className="mainContent">
                {this.props.children}
            </div>
      </div>     
    );
  }
}

export default App;
