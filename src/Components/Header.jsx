import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username
        }   
    }
    render(){
        const {username} = this.state;
        return(
            <div className="bs-example headerDiv background_clr">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand">{username}</a>

                    <div>
                        <div className="navbar-nav ml-auto">
                            <Link to="/login">
                                <div className="logoutDiv"><button>Logout</button></div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;

