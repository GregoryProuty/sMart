import React from 'react';
import { Link } from 'react-router'
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">sMart</a>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="What are you looking for?" />
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>              
              <div className="navbar-right">
              <button type="button" className="btn btn-default navbar-btn">Log in</button>
              <a type="button" className="btn btn-default navbar-btn" href="#/PostItem">Sell Your Stuff</a>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;