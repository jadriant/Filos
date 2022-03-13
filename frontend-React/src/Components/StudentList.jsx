import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';




function StudentList() {

    const location = useLocation()
    const { myEmail } = location.key;

    const { classId } = useParams();
    const [students, setStudents] = useState(

        [
            {
                "fullname": "",
                "email": "",
                "dob": "",
                "major": "",
                "year": "",
                "currentClasses": [],
                "interests": "",
                "linkedin": "",
                "insta": "",
                "snap": ""
            }
        ]
    );

    const getData = () => {
        //http://localhost:8080/getEnrolledStudents?id={classId}
        fetch('http://localhost:8080/getEnrolledStudents?id=' + classId
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

                setStudents(myJson);
                console.log(students);
            });
    }
    useEffect(() => {
        getData()
    }, [])



    return (
        <section>
            <div className="row">
                {students.map(item => (
                    <div className="col-4 d-inline" key={item.email}>
                        <Link to={"/Profile/" + item.email} state={{ myEmail }}>
                            <img src={`https://avatars.dicebear.com/api/avataaars/${item.fullName}/.svg`} style={{ height: "100px", width: "100px" }} />
                            <h4>{item.fullName}</h4>
                        </Link>
                    </div>


                ))}


            </div >

        </section >



    );
}

// }

export default StudentList;