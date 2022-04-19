import React from 'react';

import woman from '../images/mulher-com-telescopio.gif';

class Header extends React.Component {
  render() {
    return (
      <header className="header-Solar-System">
        <h1>
          Sistema Solar
        </h1>
        <img
          className="telescope-Woman"
          src={ woman }
          alt="mulher-com-telescopio.gif"
        />
      </header>
    );
  }
}

export default Header;
