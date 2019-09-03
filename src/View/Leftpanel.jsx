import React from 'react';

const Leftpanel = (props) => (
    <>
        <div className="user-info background_clr" style={{textAlign: 'center', padding: 15}}> 
            <img src={props.userData.userimage} className="img-circle img-responsive user-img" />
            <h2>{props.userData.firstname} {props.userData.lastname}</h2>
            <h3>Busy</h3>
            <p>{props.userDetail}</p>
        </div>
        <div className="list-box background_clr">
            <div>
                <ul className="list-inline">
                    <li className={(props.location.pathname === `/${props.userData.username}` ? 'active' : '')} onClick={props.gotoFeeds}>My Posts</li>
                    <li className={(props.location.pathname === `/${props.userData.username}/edit` ? 'active' : '')} onClick={props.gotoAccountSetting}>Account Settings</li>
                </ul>
            </div>
        </div>
    </>
)

export default Leftpanel;