import React from 'react';


class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      this category is 
      {this.props.params.category}
      </div>
    );
  }
}


export default Category;