import React from 'react';
import ItemElement from '../components/ItemElement.jsx';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <ItemElement /> 
      {this.props.params.category}
      </div>
    );
  }
}


export default Category;