import React from 'react';
import Card from 'react-bootstrap/Card';
import { User } from './User.jsx';
import { ReviewText } from './ReviewText.jsx';
import { ReviewDate } from './ReviewDate.jsx';
import userImage from '../../images/user.jpeg';



export const Review = (props) => {
    return(
            <div>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <Card bg="light" border="light" style={{ width: '100%', marginTop: '30px' }}>
                <Card.Header style={{ textAlign: 'left' }}>
                    <User im={userImage} username={props.user}/>
                    <ReviewDate date={props.date}/>
                </Card.Header>
                <Card.Body style={{textAlign:"left"}}>
                    <Card.Text>
                        <ReviewText text={props.text} />
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
    )
}