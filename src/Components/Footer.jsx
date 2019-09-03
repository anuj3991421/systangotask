import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pathname: this.props.location.pathname,
        }   
    }
    render(){
        return(
            <div className="bs-example">
                <nav className="navbar fixed-bottom navbar-expand-sm footer-nav background_clr">
                    
                </nav>
            </div>
        )
    }
}

export default Footer;

