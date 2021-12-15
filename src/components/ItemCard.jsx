import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
// import NutritionCard from './NutritionCard';
// import axios from 'axios';


function ItemCard() {

    const singleItemData = useSelector((state) => state.singleItemReducer);
    const singleItem = singleItemData[0];
    console.log(singleItemData[0]);


    // const alternateIngredient = (event) => {
    //     event.preventDefault()

    //     setAltIngredient (item.label)

    //     return axios.get ()



    // }

    return (
        <div className="-container d-flex align-items-center justify-content-center mt-5">
            <Card border="primary" style={{ maxWidth: '60rem' }}>
                {
                    singleItemData && singleItemData.map((item, index) => (
                        <>
                            <Row className='g-0'>
                                <Col md='4'>
                                    <Card.Img variant="bottom" src={item.image} alt="drink" />
                                </Col>
                                <Col md='8'>
                                    <Card.Body>
                                        <Card.Title>{item.label}</Card.Title>
                                        <Card.Text>Calories: {singleItem.nutrients.ENERC_KCAL}<br />Fat: {singleItem.nutrients.FAT}g<br />Protein: {singleItem.nutrients.PROCNT}g<br />Carbs: {singleItem.nutrients.CHOCDF}g<br />Fiber: {singleItem.nutrients.FIBTG}g</Card.Text>
                                    </Card.Body>
                                </Col>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div>
                                                <Button onClick={(event) => (event)}>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </>
                    ))
                }
            </Card>
        </div >
    )
}

export default ItemCard;