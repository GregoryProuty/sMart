import React from 'react';

import Header from './components/Header.jsx';
import CategoriesNav from './components/CategoriesNav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <CategoriesNav />
        {this.props.children}
      </div>
    );
  }
}


export default App;