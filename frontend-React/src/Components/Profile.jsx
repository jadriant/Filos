import React, { useEffect, useState } from 'react'

import { propTypes } from "react-bootstrap/esm/Image";
import { useParams, useLocation } from "react-router-dom";

import Profiledata from "./Profiledata.json"; // json file that I made 
import List from './List';

function Profile() {
    let { email } = useParams();
    console.log("email in profile " + email);
    // const { tempEmail } = useParams();
    // const [email, setEmail] = useState();
    // setEmail(tempEmail);
    const location = useLocation();
    const myEmail = location.state;
    const [profile, setProfile] = useState(
        {
            "fullname": "",
            "email": "",
            "dob": "",
            "major": "",
            "year": "",
            "currentClasses": [],
            "interests": "",
            "linkedIn": "",
            "insta": "",
            "snap": ""


        });
    console.log({ myEmail });
    const getData = () => {
        //http://localhost:8080/getStudent?studentEmail={email}

        fetch('http://localhost:8080/getStudent?studentEmail=' + email
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);

                setProfile(myJson);
                console.log(profile);
            });
    }
    useEffect(() => {
        getData()
    }, [email])



    if (profile.currentClasses != null) {
        if (myEmail === email) {
            return (

                <main>

                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid circle" src={`https://avatars.dicebear.com/api/avataaars/${profile.fullName}/.svg`} style={{ height: "150px", width: "150px" }}></img>
                            </div>
                            <div className="col-8">
                                <h1 className="h1 text-black"> Name </h1>
                                {profile.fullName}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1> Info </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.email}</li>
                                    <li className="list-group-item">{profile.dob}</li>
                                    <li className="list-group-item">{profile.major}</li>
                                    <li className="list-group-item">{profile.year}</li>

                                </ul>

                            </div>
                            <div className="col-8">
                                <h1> Classes </h1>

                                <List
                                    items={profile.currentClasses}>

                                </List>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1>  Socials </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.linkedIn}</li>
                                    <li className="list-group-item">{profile.insta}</li>
                                    <li className="list-group-item">{profile.snap}</li>

                                </ul>
                            </div>
                            <div className="col-8">
                                <h1> Interests </h1>
                                <h5>{profile.interests}</h5>
                                <a href="/Register" className="btn btn-primary">Add/Update Information</a>
                            </div>
                        </div>
                    </div >
                </main>
            );
        } else {
            return (

                <main>

                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid circle" src={`https://avatars.dicebear.com/api/avataaars/${profile.fullName}/.svg`} style={{ height: "150px", width: "150px" }}></img>
                            </div>
                            <div className="col-8">
                                <h1 className="h1 text-black"> Name </h1>
                                {profile.fullName}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1> Info </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.email}</li>
                                    <li className="list-group-item">{profile.dob}</li>
                                    <li className="list-group-item">{profile.major}</li>
                                    <li className="list-group-item">{profile.year}</li>

                                </ul>

                            </div>
                            <div className="col-8">
                                <h1> Classes </h1>

                                <List
                                    items={profile.currentClasses}>

                                </List>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1>  Socials </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.linkedIn}</li>
                                    <li className="list-group-item">{profile.insta}</li>
                                    <li className="list-group-item">{profile.snap}</li>

                                </ul>
                            </div>
                            <div className="col-8">
                                <h1> Interests </h1>
                                <h5>{profile.interests}</h5>

                            </div>

                        </div>
                    </div >
                </main>
            );
        }
    } else {
        if (myEmail === email) {
            return (

                <main>

                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid circle" src={`https://avatars.dicebear.com/api/avataaars/${profile.fullName}/.svg`} style={{ height: "150px", width: "150px" }}></img>
                            </div>
                            <div className="col-8">
                                <h1 className="h1 text-black"> Name </h1>
                                {profile.fullName}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1> Info </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.email}</li>
                                    <li className="list-group-item">{profile.dob}</li>
                                    <li className="list-group-item">{profile.major}</li>
                                    <li className="list-group-item">{profile.year}</li>

                                </ul>

                            </div>
                            <div className="col-8">
                                <h1> Classes </h1>
                                <h4> You can enroll to classes through the Classes button!</h4>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1>  Socials </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.linkedIn}</li>
                                    <li className="list-group-item">{profile.insta}</li>
                                    <li className="list-group-item">{profile.snap}</li>

                                </ul>
                            </div>
                            <div className="col-8">
                                <h1> Interests </h1>
                                <h5>{profile.interests}</h5>
                                <a href="/Register" className="btn btn-primary">Add/Update Information</a>
                            </div>
                        </div>
                    </div >
                </main>
            );
        } else {
            return (

                <main>

                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid circle" src={`https://avatars.dicebear.com/api/avataaars/${profile.fullName}/.svg`} style={{ height: "150px", width: "150px" }}></img>
                            </div>
                            <div className="col-8">
                                <h1 className="h1 text-black"> Name </h1>
                                {profile.fullName}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1> Info </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.email}</li>
                                    <li className="list-group-item">{profile.dob}</li>
                                    <li className="list-group-item">{profile.major}</li>
                                    <li className="list-group-item">{profile.year}</li>

                                </ul>

                            </div>
                            <div className="col-8">
                                <h1> Classes </h1>

                                <h4> You can enroll to classes through the Classes button!</h4>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h1>  Socials </h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{profile.linkedIn}</li>
                                    <li className="list-group-item">{profile.insta}</li>
                                    <li className="list-group-item">{profile.snap}</li>

                                </ul>
                            </div>
                            <div className="col-8">
                                <h1> Interests </h1>
                                <h5>{profile.interests}</h5>

                            </div>

                        </div>
                    </div >
                </main>
            );
        }

    }
}
// }

export default Profile;