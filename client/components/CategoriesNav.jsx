import React from 'react';
import { Link } from 'react-router';

const CategoryList = ({active, children, to}) => (
    <li>
      <Link to={to}>
            {children}
      </Link>
    </li>
)

class CategoriesNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="row">
        <CategoryList to={'/fashion-accessories'}>Fashion and Accessories</CategoryList>
        <CategoryList to={'/home-garden'}>Home and Garden</CategoryList>
        <CategoryList to={'/electronics'}>Electronics</CategoryList>
        <CategoryList to={'/baby-child'}>Baby and Child</CategoryList>
        <CategoryList to={'/cars-motors'}>Cars and Motors</CategoryList>
        <CategoryList to={'/sports-leisure-games'}>Sports, Leisure and Games</CategoryList>
        <CategoryList to={'/movies-books-music'}>Movies, Books and Music</CategoryList>
        <CategoryList to={'/other'}>Other</CategoryList>
      </ul>
    );
  }
}


export default CategoriesNav;


// Fashion and Accessories
// Home and Garden
// Electronics
// Baby and Child
// Cars and Motors
// Sports, Leisure and Games
// Movies, Books and Music
// Other