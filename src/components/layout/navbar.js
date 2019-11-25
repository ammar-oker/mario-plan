import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import Mario from '../../mario.png';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const links = props.auth.uid? <SignedInLinks profile={props.profile}/> : <SignedOutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className=""> <img className='logo-img' src={Mario} alt=""/> </Link>
                <Link to='/' className="brand-logo">Mario Plan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar);