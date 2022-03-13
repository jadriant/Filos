import React, { useEffect, useState } from 'react'
import { useLocation, useParams, Link } from "react-router-dom";
import Students from "./Students.json";

function Banner(props) {
    const [disable, setDisable] = React.useState(false);
    const { id } = useParams()

    const [posts, setPosts] = useState([])

    const location = useLocation()
    const { email } = location.state;
    const { myEmail } = location.key;
    console.log("email = ", email); // email passed in as prop from the link tag

    useEffect(() => {
        const url = 'http://localhost:8080/getClass?id=' + id;//api url
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setPosts(resp))//setting response to state posts
    }, [])

    function callApi() { // don't know if the fetch call is correct
        let url = 'http://localhost:8080/addStudentToClass?classId=' + posts.id + '&studentEmail=' + email;
        fetch(url, { method: 'PUT' })
    }

    let guest = props.isGuest;
    if (guest === false) {
        return (
            <section className="container-banner">

                <h1>
                    {posts.name}
                </h1>
                <h2>

                    <br />
                    Students enrolled: {posts.studentCount}
                    <br />
                    Professor: {posts.professor}
                    <br />
                    Location: {posts.location}
                </h2>

                <section className="mr-2 ml-2">
                    <a>
                        <button disabled={disable} onClick={(e) => { setDisable(true); callApi(); }}
                            type="button" class="mb-2 btn btn-primary btn-lg btn-block">
                            <span className="icon fa fa-user-plus" style={{ color: 'white' }} >Add Class</span>
                        </button>
                    </a>
                    <Link to={`/../Students/${id}`} key={{ myEmail }}>
                        <button
                            type="button" class="btn btn-secondary btn-lg btn-block">
                            <span className="icon fa fa-list" style={{ color: 'white' }}>View Students</span>
                        </button>
                    </Link>
                    <br />

                </section>

            </section>
        )
    }
    else {
        return (
            <section className="container-banner">


                <h1>
                    {posts.name}
                </h1>
                <h2>

                    <br />
                    Students enrolled: {posts.studentCount}
                    <br />
                    Professor: {posts.professor}
                    <br />
                    Location: {posts.location}
                </h2>
                <section className="mr-2 ml-2">
                    <a href={"/Students/" + id}>
                        <button type="button" class="btn btn-secondary btn-lg btn-block">
                            <span className="icon fa fa-list" style={{ color: 'white' }}>View Students</span>
                        </button>
                    </a>
                    <br />

                </section>

            </section>
        )
    }
}

export default Banner