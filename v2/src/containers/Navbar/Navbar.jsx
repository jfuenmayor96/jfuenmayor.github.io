import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar ">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#top"><img src={require('../../assets/Navbar/logo-blackfilled.png')} alt="Logo"/></a>
                        </div>
                    
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li class='navbar-item'><a href='#about'><span><i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i> ABOUT ME</span></a></li>
                                <li class='navbar-item'><a href='#projects'><span><i className="fa fa-cogs fa-2x" aria-hidden="true"></i> PROJECTS</span></a></li>
                                <li class='navbar-item'><a href='#under-development'><span>CONTACT</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;