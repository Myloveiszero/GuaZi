import React from 'react';
import './Header.css';

function Header() {

    return(
           <header>
                <div className="header-position">南昌</div>
                <div className="header-input">搜索您要的车</div>
                <span className="header-help"></span>
            </header>
   )
}

export default Header;
