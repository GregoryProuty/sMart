import React from 'react';
import { Menu } from 'semantic-ui-react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item header>SMart</Menu.Item>
        <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        <Menu.Item name='Log in' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
        <Menu.Item name='Sell Your Stuff' active={activeItem === 'locations'} onClick={this.handleItemClick} />
      </Menu>      
    );
  }
}

export default Header;


        // <nav className="navbar navbar-default">
        //   <div className="container-fluid">
        //     <div className="navbar-header">
        //       <a className="navbar-brand" href="#">sMart</a>
        //       <form className="navbar-form navbar-left" role="search">
        //         <div className="form-group">
        //           <input type="text" className="form-control" placeholder="What are you looking for?" />
        //         </div>
        //         <button type="submit" className="btn btn-default">Search</button>
        //       </form>              
        //       <div className="navbar-right">
        //       <button type="button" className="btn btn-default navbar-btn">Log in</button>
        //       <button type="button" className="btn btn-default navbar-btn">Sell Your Stuff</button>
        //       </div>
        //     </div>
        //   </div>
        // </nav>