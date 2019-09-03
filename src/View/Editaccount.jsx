import React from 'react';
import { connect } from 'react-redux';
import Leftpanel from "../View/Leftpanel";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {addUserData} from '../Store/actions/userActions';

class EditAccount extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstname: this.props.userData.firstname,
            lastname: this.props.userData.lastname
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    // Redirect to Feed Layout
    gotoFeeds = () => {
        const {userData} = this.props;
        this.props.history.push({
            pathname: `/${userData.username}`,
        });
    }

    onSubmit = () => {
        const { addUserData, userData } = this.props;
        addUserData({
            username: userData.username, 
            userimage: userData.userimage,
            firstname: this.state.firstname,
            lastname: this.state.lastname, 
            userdetail: userData.userdetail, 
        });
        this.props.history.push(`/${userData.username}`);
    }

    render(){
        const {userData} = this.props;
        return(
            <>
                <Header location={this.props.location} username={userData.username}  />
                <div className="container-fluid">
                    <div className="row" style={{paddingTop: 25, paddingBottom: 25}}>
                        <div className="col-12 col-xl-2">
                            <Leftpanel location={this.props.location} userData={userData} gotoFeeds={this.gotoFeeds} />
                        </div>
                        <div className="col-12 col-xl-7">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" id="firstname" defaultValue={userData.firstname} name="firstname" placeholder="Enter first name" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" defaultValue={userData.lastname} name="lastname" placeholder="Enter last name" onChange={this.onChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer location={this.props.location} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    userData: state.auth.userData,
});
const mapDispatchToProps = (dispatch) => ({
    addUserData: (user) => dispatch(addUserData(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);