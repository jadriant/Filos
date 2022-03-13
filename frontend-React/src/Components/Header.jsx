import React, { Component } from 'react'
import Home from './Home';
import Profile from './Profile'
import StudentList from './StudentList';
import Chats from './Chats';
import Banner from './Banner';
import Classes from './Classes';
import SignOut from '../App.js'
import './Main.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Register from './Register';

firebase.initializeApp({
    apiKey: "AIzaSyCiKqguxaBzxj0nlvI--v2brt5gSeGGt_w",
    authDomain: "group-project-a8653.firebaseapp.com",
    databaseURL: "https://group-project-a8653-default-rtdb.firebaseio.com",
    projectId: "group-project-a8653",
    storageBucket: "group-project-a8653.appspot.com",
    messagingSenderId: "857527012368",
    appId: "1:857527012368:web:dd4292fb5f57fbc9044e95"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTime: this.props.firstTime, //need to start as null and set to first enrolled class
            email: this.props.email
        }

    }

    handleFirst = (params) => {
        this.setState({ firstTime: params });
    }

    render() {
        var myEmail = this.props.email;
        console.log("this.props.email " + this.props.email);
        console.log("myEmail in header " + myEmail);

        return (
            <div>


                < Router >
                    {
                        this.props.guest ?
                            <nav className="navbar">

                                <Link to="/Home" className="nav-item nav-link"><i className="fa fa-fw fa-home"></i>Home </Link>
                                <Link className="nav-item nav-link" to="/Classes/Guest"><i className="fa fa-fw fa-list"></i>Classes</Link>
                                <Link to="" className="nav-item nav-link float-right" onClick={() => this.props.guest = false}>
                                    <i className="fa fa-fw fa-sign-out"></i> Switch User
                                </ Link>

                            </nav>

                            : <nav className="navbar">

                                <Link to="/Home" className="nav-item nav-link"><i className="fa fa-fw fa-home"></i>Home </Link>
                                <Link className="nav-item nav-link" to={`/Classes/${this.props.email}`} key={this.state.email}><i className="fa fa-fw fa-list"></i>Classes</Link>
                                <Link className="nav-item nav-link" to={`/Profile/${this.props.email}`} state={myEmail}  ><i className="fa fa-fw fa-user"></i>Profile</Link>

                                <Link className="nav-item nav-link" to={`/Chats/${this.props.email}`}><i className="fa fa-fw fa-comments"></i>Chats</Link>
                                <Link to="" className="nav-item nav-link float-right" onClick={() => auth.signOut()}>
                                    <i className="fa fa-fw fa-sign-out"></i>Logout
                                </ Link>

                            </nav>


                    }

                    < Routes >
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/" element={<Home />} />

                        <Route path='/Profile/:email' element={<Profile email={this.state.email} />} />
                        <Route path="/Students/:classId" element={<StudentList />} />
                        <Route path="/Chats/:email" element={<Chats />} />

                        <Route path="/Logout" component={<SignOut />} />
                        <Route path="/Classes/:email" element={<Classes isGuest={this.props.guest} />} />

                        <Route path="/Banner/:id" element={<Banner isGuest={this.props.guest} />} />
                    </Routes>

                </Router >

            </div>


        );
    }
}
// }

export default Header;