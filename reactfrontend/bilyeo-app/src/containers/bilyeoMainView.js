import React from "react";
import Image from 'react-bootstrap/Image';
import 슬라이드1 from "../슬라이드1.JPG"
import 판다 from "../판다.jpg"
import { Card, CardDeck } from 'react-bootstrap';

const bilyeoMainView = props => {

    return (
        <div className="mainView">

        <Image style={{height:600, width:'100%'}} src={슬라이드1} fluid />
        
        <br /> <br /> <br /> 

        <h3>빌려가에 등록된 물건</h3>

        <br />

        <CardDeck>
            <Card>
                <Card.Img variant="top" style={{height:300, width: 300}} src={판다} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" style={{height:300, width: 300}} src={판다} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" style={{height:300, width: 300}} src={판다} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardDeck>

        </div>
    );
}

export default bilyeoMainView;
