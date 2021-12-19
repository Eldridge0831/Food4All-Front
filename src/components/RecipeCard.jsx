import React, { useState } from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Row, Tab, Tabs, ListGroup, Button, FormControl, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaBookOpen } from "react-icons/fa"; //for favoriting recipes
import { FaRedoAlt } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

function RecipeCard() {

    const [disableCookbook, setDisableCookbook] = useState(false);
    const [disableUpdate, setDisableUpdate] = useState(false);
    const [disableDelete, setDisableDelete] = useState(false);
    const [comments, setComments] = useState("");
    const [categoryValue, setCategoryValue] = useState("none");

    const singleRecipeData = useSelector((state) => state.singleRecipeReducer);
    const recipe = singleRecipeData[0]

    function postCookbook() {
        console.log(categoryValue)
        setDisableCookbook(true)
        setDisableDelete(false)
        // const sessionUserName = localStorage.getItem("UserId")
        fetch("http://localhost:9000/favorite", {
            method: "POST",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: "3",
                category: categoryValue,
                recipe: singleRecipeData,
                commentSection: comments,
                recipe_id: recipe.label
            }),
        })
            .then(res => (res.json()))
            .then(res => {
                if (res.status === "Recipe added!") {
                    alert("Recipe added!");
                }
            })
    }

    function updateCookbook() {
        // let user_Id = localStorage.getItem("UserID");
        let url = "favorite/modify/" + recipe.label;
        console.log(url)
        fetch("http://localhost:9000/" + url, {
            method: "PUT",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: "4",
                category: categoryValue,
                recipe: singleRecipeData,
                commentSection: comments,
                recipe_id: recipe.label

            }),
        })
            .then(res => (res.json()))
            .then(res => {
                alert("Succesfully Updated Recipe")
            })


    }

    function deleteCookbook() {
        setDisableDelete(true)
        console.log(recipe.label)
        // const user_id = localStorage.getItem("UserName");
        fetch("http://localhost:9000/favorite/" + recipe.label, {
            method: "DELETE",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_id: recipe.label
               
                // user_id: localStorage.getItem("UserName"),
            }),
            
        })
        
            .then(res => res.json())
            .then(res => {
                if (res.status === "Recipe deleted!") {
                    alert("Recipe deleted!");

                }
            })
            console.log(recipe.label, "#2")
    }

    const handleChange = (event) => {
        setComments(event.target.value)
        console.log(comments)
    }

    const handleRequest = (event) => {
        console.log("request made")
        setCategoryValue(event.target.value)
    }


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
                        <Tab eventKey="profile" title="Ingredients" style={{ maxWidth: '30rem' }}>
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
                            <Row>
                            <Card.Text>Calories per Serving: {Math.round(recipe.calories / recipe.yield)}</Card.Text>
                            <Col md="6">
                                
                                <Card.Text>{recipe.totalDaily.FAT.label} {Math.round(recipe.totalDaily.FAT.quantity / recipe.yield)}{recipe.totalDaily.FAT.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.FASAT.label} {Math.round(recipe.totalDaily.FASAT.quantity / recipe.yield)}{recipe.totalDaily.FASAT.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.CHOLE.label} {Math.round(recipe.totalDaily.CHOLE.quantity / recipe.yield)}{recipe.totalDaily.CHOLE.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.NA.label} {Math.round(recipe.totalDaily.NA.quantity / recipe.yield)}{recipe.totalDaily.NA.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.CHOCDF.label} {Math.round(recipe.totalDaily.CHOCDF.quantity / recipe.yield)}{recipe.totalDaily.CHOCDF.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.FIBTG.label} {Math.round(recipe.totalDaily.FIBTG.quantity / recipe.yield)}{recipe.totalDaily.FIBTG.unit}</Card.Text>
                                </Col>
                                <Col md="6">
                                <Card.Text>{recipe.totalDaily.PROCNT.label} {Math.round(recipe.totalDaily.PROCNT.quantity / recipe.yield)}{recipe.totalDaily.PROCNT.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.VITD.label} {Math.round(recipe.totalDaily.VITD.quantity / recipe.yield)}{recipe.totalDaily.VITD.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.CA.label} {Math.round(recipe.totalDaily.CA.quantity / recipe.yield)}{recipe.totalDaily.CA.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.FE.label} {Math.round(recipe.totalDaily.FE.quantity / recipe.yield)}{recipe.totalDaily.FE.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.K.label} {Math.round(recipe.totalDaily.K.quantity / recipe.yield)}{recipe.totalDaily.K.unit}</Card.Text>
                                <Card.Text>{recipe.totalDaily.ZN.label} {Math.round(recipe.totalDaily.ZN.quantity / recipe.yield)}{recipe.totalDaily.ZN.unit}</Card.Text>
                            </Col>
                            </Row>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="comments" title="Comments">
                            <Row>
                                <Col md="8">
                                    <InputGroup>
                                        <FormControl as="textarea" rows="5" value={comments} onChange={handleChange} />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Tab>

                    </Tabs>
                </Row>
                <div>
                    <Row>
                        <Col md="5">
                            <Form.Control defaultValue={""} onChange={handleRequest} type="text" placeholder="Give your recipe a category" />
                        </Col>
                        <Col md="1"></Col>
                        <Col md="2">
                            <button disabled={disableCookbook} onClick={() => postCookbook()}>
                                <FaBookOpen size="28" />
                            </button>
                        </Col>
                        <Col md="2">
                            <button disabled={disableUpdate} onClick={() => updateCookbook()}>
                                <FaRedoAlt size="28" />
                            </button>
                        </Col>
                        <Col md="2">
                            <button disabled={disableDelete} onClick={() => deleteCookbook()}>
                                <FaMinusCircle size="28" />
                            </button>
                        </Col>
                    </Row>
                </div>

            </Card>
        </div>
    )
}

export default RecipeCard;