import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-me">About Me</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header;