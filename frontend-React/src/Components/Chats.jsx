import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ChatRoom from './ChatRoom';


function Chats() {

    const [classes, setClasses] = useState([])
    const { email } = useParams();
    console.log(email);
    useEffect(() => {
        const url = 'http://localhost:8080/getStudentsClasses?studentEmail=' + email;//api url
        fetch(url).then(resp => resp.json())//calling url by method GET
            .then(resp => setClasses(resp))//setting response to state posts
    }, [])

    const [chatId, setChatId] = useState()

    //api call to class list
    const updateChatId = (props) => {

        setChatId(props)
    }


    return (

        <div>
            <div className="row">
                <div className="col-4">
                    <div className="list-group">
                        {classes.map(item => (
                            <button type="button" className="list-group-item list-group-item-action"
                                onClick={() => updateChatId(item.id)}
                                key={item.id}>
                                {item.id}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <h1>{chatId}</h1>
                    </div>
                    <ChatRoom classId={chatId} />
                </div>
            </div>


        </div >

    );
}





export default Chats