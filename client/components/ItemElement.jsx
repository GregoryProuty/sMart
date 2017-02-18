import React from 'react';


class ItemElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <a>
            <img src="https://img.letgo.com/images/8d/03/35/53/8d03355348607013ca1a038d788ebd30.jpg?impolicy=img_230" alt="silver ray-ban full framed aviator sunglasses with case" />
          </a>
          <div className="product-info">
            <a href="https://us.letgo.com/en/i/silver-ray-ban-full-framed-aviator-sunglasses-with-case_67679e06-f4b0-4fac-abf8-3152e8765328" class="title" title="silver ray-ban full framed aviator sunglasses with case">Silver Ray-Ban Full Framed Aviator Sunglasses With Case</a>
            <span class="city">Sanfran, CA</span>
          </div>
        </div>
      </div>
    );
  }
}


export default ItemElement;