import React, { useEffect, useState } from 'react'
import Students from "./Students.json"; // json file that I made 
import { Link, useParams, useLocation } from "react-router-dom";

function Classes(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const url = 'http://localhost:8080/getAllClasses';//api url
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setPosts(resp))//setting response to state posts
        // console.log("getAllClasses = ", posts);
    }, [])
    const location = useLocation();
    const { myEmail } = location.key;

    const { email } = useParams();
    var myId;

    const disableOnclick = (e) => {
        e.target.disabled = true
    }
    function callApi() {// don't know if the fetch call is correct
        let url = 'http://localhost:8080/addStudentToClass?classId=' + myId + '&studentEmail=' + email;
        fetch(url, { method: 'PUT' })
    }

    // let guest = this.props.isGuest;
    console.log("guest = ", props.isGuest)
    return (
        <main>
            <div className="container">

                <div className="row">
                    {posts.map((temp, i) => // iterates through the array, students is the array name in the json file Students.json
                    { // i is a counter 
                        if (props.isGuest === false) {
                            return (
                                <div className="col-4" style={{ padding: "10px" }}>
                                    <div className="card" >

                                        <div className="card-body">
                                            <Link to={`/../Banner/${temp.id}`} state={{ email }} key={{ myEmail }}>
                                                <h5 className="card-title" >{temp.name}</h5>
                                            </Link>
                                            <h6 className="card-subtitle mt-2 text-muted">{temp.id}</h6>
                                            <p className="card-text" style={{ color: "black" }}>Students enrolled: {temp.studentCount}</p>
                                            <button key={i} onClick={(e) => { myId = temp.id; disableOnclick(e); callApi(); console.log("temp.id = ", temp.id); }} className="btn btn-primary" >Add Class</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="col-4" style={{ padding: "10px" }}>
                                    <div className="card" >

                                        <div className="card-body">
                                            <Link to={`/../Banner/${temp.id}`} state={{ email }}>
                                                <h5 className="card-title" >{temp.name}</h5>
                                            </Link>
                                            <h6 className="card-subtitle mt-2 text-muted">{temp.id}</h6>
                                            <p className="card-text" style={{ color: "black" }}>Students enrolled: {temp.studentCount}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    }
                    )
                    }
                </div >
            </div>

        </main>

    )
}

export default Classes


