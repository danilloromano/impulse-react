import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logoHeader from '../images/imageNav.png';

export default class HeaderCustom extends Component{

    render() {
		return (
            <header className="header">
                <div className="top-bar"></div>
                <div className="navWrapper">
                    <div className="menu-bar-wrapper">
                        <div className="container">
                            <div className="header-inner">
                                <div className="site-logo-title">
                                    <img className="" role="presentation"  src={logoHeader}/>
                                </div>
                                <nav className="primary-menu">
                                    <ul className="menu-list">
                                        <li className="menu-link"><Link to="/" className="menu-link">Home</Link></li>
                                        <li className="menu-link"><Link to="/autor" className="menu-link">Usuarios</Link></li>
                                        <li className="menu-link"><Link to="/livro" className="menu-link">Produtos</Link></li>                   
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
		);
	}
}