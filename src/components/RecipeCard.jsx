import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Row, Tab, Tabs, ListGroup, Button } from 'react-bootstrap';

function RecipeCard() {

    const singleRecipeData = useSelector((state) => state.singleRecipeReducer);
    const recipe = singleRecipeData[0]
    // const health = recipe.healthLabels
    // const ingredients = recipe.ingredientLines
    // const nutrition = recipe.totalDaily
    // const dailyInfo = 

    // Detailed recipe card
    return (
        <div className="drink-container d-flex align-items-center justify-content-center mt-5">
            <Card border="primary" style={{ maxWidth: '50rem' }}>

                <Row className='g-0'>
                    <Col md='4'>
                        <Card.Img variant="bottom" src={recipe.image} alt="drink" />
                    </Col>
                    <Col md='8'>
                        <Card.Title>{recipe.label}</Card.Title>
                        <Card.Text>Cook Time: {recipe.totalTime} minutes</Card.Text>
                        <Card.Text>Servings: {recipe.yield}</Card.Text>
                        <Card.Text>Diet Type: {recipe.dietLabels}</Card.Text>
                        <Card.Text>Dish Type: {recipe.dishType}</Card.Text>
                        <Card.Text>Cuisine Type: {recipe.cuisineType}</Card.Text>
                        <Button href={recipe.url} target="_blank">Cooking Instructions</Button>
                    </Col>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="profile" title="Ingredients" style={{ maxWidth: '30rem'}}>
                            <ListGroup>
                                {recipe.ingredientLines && recipe.ingredientLines.map((ingredient, index) => {
                                    return <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>;
                                })}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="home" title="Health Labels">
                            <ListGroup>
                                {recipe.healthLabels && recipe.healthLabels.map((healthy, index) => {
                                    return <ListGroup.Item key={index}>{healthy}</ListGroup.Item>;
                                })}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="nutrition" title="Nutrition">
                            <ListGroup>
                            {/* {Object.entries(nutrition.CA).forEach(([key, value]) => {
                                console.log(`${key} ${value}`);
                            })} */}
                            <Card.Text>Total Calories: {Math.round(recipe.calories)}</Card.Text>
                            <Card.Text>{recipe.totalDaily.FAT.label} {Math.round (recipe.totalDaily.FAT.quantity)}{recipe.totalDaily.FAT.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.FASAT.label} {Math.round (recipe.totalDaily.FASAT.quantity)}{recipe.totalDaily.FASAT.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.CHOLE.label} {Math.round (recipe.totalDaily.CHOLE.quantity)}{recipe.totalDaily.CHOLE.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.NA.label} {Math.round (recipe.totalDaily.NA.quantity)}{recipe.totalDaily.NA.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.CHOCDF.label} {Math.round (recipe.totalDaily.CHOCDF.quantity)}{recipe.totalDaily.CHOCDF.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.FIBTG.label} {Math.round (recipe.totalDaily.FIBTG.quantity)}{recipe.totalDaily.FIBTG.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.PROCNT.label} {Math.round (recipe.totalDaily.PROCNT.quantity)}{recipe.totalDaily.PROCNT.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.VITD.label} {Math.round (recipe.totalDaily.VITD.quantity)}{recipe.totalDaily.VITD.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.CA.label} {Math.round (recipe.totalDaily.CA.quantity)}{recipe.totalDaily.CA.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.FE.label} {Math.round (recipe.totalDaily.FE.quantity)}{recipe.totalDaily.FE.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.K.label} {Math.round (recipe.totalDaily.K.quantity)}{recipe.totalDaily.K.unit}</Card.Text>
                            <Card.Text>{recipe.totalDaily.ZN.label} {Math.round (recipe.totalDaily.ZN.quantity)}{recipe.totalDaily.ZN.unit}</Card.Text>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="comments" title="Comments">
                            <Row>
                                <Col md="8">
                                    <textarea></textarea>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>

                </Row>

            </Card>
        </div>
    )
}

export default RecipeCard;