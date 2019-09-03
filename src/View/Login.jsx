import React from 'react';
import { connect } from 'react-redux';
import Faker from 'faker';
import {addUserData} from '../Store/actions/userActions';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onSubmit = () => {
        const { addUserData } = this.props;
        const { username } = this.state;
            addUserData({
                username, 
                userimage: Faker.internet.avatar(),
                firstname: Faker.name.firstName(1),
                lastname: Faker.name.lastName(1), 
                userdetail: Faker.lorem.sentence(30), 
            });
            this.props.history.push(`/${this.state.username}`);
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Sign In</h3>
                            </div>
                            <div className="card-body">
				                <form onSubmit={this.onSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input onChange={this.onChange} name="username" type="text" className="form-control" placeholder="User Name"/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-key"></i></span>
                                        </div>
                                        <input onChange={this.onChange} name="password" type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
	addUserData: (user) => dispatch(addUserData(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);