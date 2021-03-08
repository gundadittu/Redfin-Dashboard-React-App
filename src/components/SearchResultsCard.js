import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function SearchResultsCard(props) {
    const address = props.address || "MISSING ADDRESS";
    const url = props.url || "";
    const propertyType = props.propertyType || "";
    const beds = props.beds || 0;
    const baths = props.baths || 0;
    const sqrFt = props.sqrFt || 0;

    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>{address}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{propertyType}</ListGroupItem>
                <ListGroupItem>{beds} beds</ListGroupItem>
                <ListGroupItem>{baths} baths</ListGroupItem>
                <ListGroupItem>{sqrFt} square feet</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="primary" onClick={() => window.open(url, "_blank")} >Open in Redfin</Button>
            </Card.Body>
        </Card>
    )
}

export default SearchResultsCard; 