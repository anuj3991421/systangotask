import React from 'react';
import { connect } from 'react-redux';
import Faker from 'faker';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Loader from 'react-loader-spinner';
import Leftpanel from "../View/Leftpanel";
import {addUserData} from '../Store/actions/userActions';

class Dashboard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            feeds: [],
            isLoading: false,
            filtertext: '',
            connectionFiltertext: '',
            connections: []
        }

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.refs.iScroll.addEventListener("scroll", () => {
          if (
            this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=
            this.refs.iScroll.scrollHeight
          ) {
            this.loadData();
          }
        });
        for (let i = 0; i < 9; i++) {
            const connection = {
                firstname: Faker.name.firstName(),
                status: Faker.random.number(1),
                image: Faker.internet.avatar(),
            }
            this.setState(prevState => ({
              connections: [...prevState.connections, connection],
            }))
        }
      }

    componentWillMount() {
        this.loadData();
    }

    loadData(){
        this.setState({
            isLoading: true
        })
        
        // To show loader setTimeout function was added
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                const feed = {
                  title: Faker.lorem.word(),
                  description: Faker.lorem.sentence(30),
                }
                this.setState(prevState => ({
                  feeds: [...prevState.feeds, feed],
                }))
            }

            this.setState({
                isLoading: false
            })
        }, 1000);
    }

    gotoAccountSetting = () => {
        const {userData} = this.props;
        addUserData({
            username: userData.username,
            userimage: userData.userimage,
            firstname: userData.firstname,
            lastname: userData.lastname,
            userdetail: userData.userdetail,
        });
        this.props.history.push({
            pathname: `/${userData.username}/edit`,
        });
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onSubmitFilter = () => {
        let {filtertext, feeds} = this.state;
        let lowercasedFilter = filtertext.toLowerCase();

        if(lowercasedFilter !== ''){
            let filteredData = feeds.filter(feed => {
                return Object.keys(feed).some(key =>
                    feed[key].toLowerCase().includes(lowercasedFilter)
                );
            });
            this.setState({
                feeds: filteredData
            })
        }
    }

    onSubmitConnectionFilter = () => {
        let {connectionFiltertext, connections} = this.state;

        let lowercasedFilter = connectionFiltertext.toLowerCase();

        if(lowercasedFilter !== ''){
            let filteredData = connections.filter(connection => {
                console.log(connection);
                return Object.keys(connection).some(key =>
                    console.log(key)
                    //connection[key].toLowerCase().includes(lowercasedFilter)
                );
            });
            this.setState({
                connections: filteredData
            })
        }
    }

    render(){
        const {userData} = this.props;
        const {feeds, isLoading, connections} = this.state;
        return(
            <>  
                <Header location={this.props.location} username={userData.username}  />
                <div className="container-fluid">
                    <div className="row main-div">
                        <div className="col-12 col-xl-2">
                            <Leftpanel location={this.props.location} userData={userData} gotoAccountSetting={this.gotoAccountSetting} />
                        </div>
                        <div className="col-12 col-xl-7">
                            <div className="box-height" ref="iScroll">
                                <div>
                                    <div className="col-sm-3 col-md-3 searchForm">
                                        <form className="navbar-form" role="search">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search" name="filtertext" onChange={this.onChange} />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-default" onClick={this.onSubmitFilter} type="button">Go</button>
                                                </div>
                                            </div>  
                                        </form>
                                    </div>
                                    <div className="feedsDiv">
                                        {feeds.map((feed, key) => {
                                            return(
                                                <>
                                                    <div className="feedPost" key={key}>
                                                        <div>
                                                            <h3>{feed.title}</h3>
                                                            <p>{feed.description}</p>
                                                        </div>
                                                    </div>  
                                                </>
                                            )
                                        })}
                                        {
                                            isLoading &&
                                                <div className="text-center"><Loader type="Circles" color="#5e72e4" height={40} width={40} /></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-3">
                            <div className="right-panel-div">
                                <div className="col-sm-3 col-md-3 rightSearchForm">
                                    <form className="navbar-form" role="search">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" name="connectionFiltertext" onChange={this.onChange} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-default" onClick={this.onSubmitConnectionFilter} type="button">Go</button>
                                            </div>
                                        </div>  
                                    </form>
                                </div>
                                <div className="right-main">
                                    <div className="text-center"><p>My Connections</p></div>
                                    <div>
                                        <div className="row" style={{marginTop: 10}}>
                                            {
                                                connections.map((connection, key) => {
                                                    return(
                                                        <div className="col-md-4" key={key}>
                                                            <div className="connectionsDiv">
                                                                <span className={connection.status === 0 ? 'inactive' : 'active'}></span>
                                                                <img className="connectionsImg" src={connection.image} />
                                                                <p>{connection.firstname}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);