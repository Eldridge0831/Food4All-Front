import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCard from './DisplayCard';


function RecipeSearch(props) {

    const [recipeData, setRecipeData] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [inputHealth, setInputHealth] = useState("")
    const [inputExclude, setInputExclude] = useState("")
    const [inputTime, setInputTime] = useState("")
    const [inputCuisine, setInputCuisine] = useState("")
    const [inputDiet, setInputDiet] = useState("")
    const [inputMealType, setInputMealType] = useState("")
    const [inputDishType, setInputDishType] = useState("")
    const [pageData, setPageData] = useState([])  // For Pagination
    const [previousData, setPreviousData] = useState([]) // For Back Pagination
    const history = useHistory();
    let exclusions = ""
    let time = ""

    // API call
    function fetchRecipeList(event) {
        event.preventDefault()

        // Attaching labels to input variables before API Call insertion
        if (inputExclude !== "") {
            exclusions = "excluded=" + inputExclude
            console.log(exclusions);
        };

        if (inputTime !== "") {
            time = ("time=" + inputTime);
            console.log(time)
        };

        const url = (`https://api.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=4cb19fd5&app_key=d2763a8995b7eef7f64d6158309567ca&${inputDiet}&${inputHealth}&${exclusions}&${time}&${inputCuisine}&${inputMealType}&${inputDishType}`)
        console.log(url)
        return axios.get(url)
            .then(recipes => recipes.data)
            .then(data => {
                console.log(data);

                if (data['hits'].length === 0) {
                    console.log(data['hits'])
                    setRecipeData([])
                    history.push('/404') // redirect for bad request
                } else {
                    setRecipeData(data['hits'])
                    console.log(recipeData)
                    setPageData(data['_links'])
                    setPreviousData(url)
                }
            });
    }

    // Section to handle search input request, changing assigned local states
    const handleRequest = (event) => {
        console.log("request made")
        setInputValue(event.target.value)
    }

    const handleRequest3 = (event) => {
        setInputExclude(event.target.value)
        console.log(inputExclude)
    }

    const handleRequest4 = (event) => {
        setInputTime(event.target.value)
        console.log(inputTime)
    }

    // function for pagination
    const nextPage = () => {
        setPreviousData(recipeData)
        const pageUrl = (pageData.next.href)
        console.log(pageUrl)
        return axios.get(pageUrl)
            .then(pages => pages.data)
            .then(data => {
                console.log(data['_links'])
                setRecipeData(data['hits'])
                setPageData(data['_links'])
            })
    }

    const previousPage = () => {
        setRecipeData(previousData)
    }


    return (
        <div>
            <Container id="searchContainer">
                <h2>Healthy Recipe Finder</h2>
                <Form onSubmit={fetchRecipeList} className="mb-3">
                    <Row className="mb-3">
                        <Col md>
                            <Form.Label>Primary Search</Form.Label>
                            <Form.Control value={inputValue} onChange={handleRequest} type="text" placeholder="What are you looking for?" required />
                        </Col>
                        <Col md>
                            <Form.Label>Ingredient to Exclude</Form.Label>
                            <Form.Control value={inputExclude} onChange={handleRequest3} type="text" placeholder="Exclude" />
                        </Col>
                        <Col md>
                            <Form.Label>Max Time for Recipe</Form.Label>
                            <Form.Control value={inputTime} onChange={handleRequest4} type="number" placeholder="minutes" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md>
                            <Form.Select as={Col} onChange={(event) => setInputDiet("diet=" + event.target.value)} aria-label="default select example">
                                <option defaultValue="">Diet Options</option>
                                <option value="balanced">Balanced</option>
                                <option value="high-fiber">High-Fiber</option>
                                <option value="high-protein">High-Protein</option>
                                <option value="low-carb">Low-Carb</option>
                                <option value="low-fat">Low-Fat</option>
                                <option value="low-sodium">Low-Sodium</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select as={Col} defaultValue="" onChange={(event) => setInputHealth("health=" + event.target.value)} aria-label="default select example">
                                <option value="">Advanced Diet Options</option>
                                <option value="crustacean-free">Crustacean-Free</option>
                                <option value="dairy-free">Dairy-Free</option>
                                <option value="DASH">DASH</option>
                                <option value="egg-free">Egg-Free</option>
                                <option value="fish-free">Fish-Free</option>
                                <option value="fodmap-free">Fodmap-Free</option>
                                <option value="gluten-free">Gluten-Free</option>
                                <option value="immuno-supportive">Immuno-Supportive</option>
                                <option value="keto-friendly">Keto-Friendly</option>
                                <option value="kidney-friendly">Kidney-Friendly</option>
                                <option value="kosher">Kosher</option>
                                <option value="low-potassium">Low-Potassium</option>
                                <option value="low-sugar">low-sugar</option>
                                <option value="lupine-free">Lupine-Free</option>
                                <option value="Mediterranean">Mediterranean</option>
                                <option value="mollusk-free">Mollusk-Free</option>
                                <option value="paleo">Paleo</option>
                                <option value="peanut-free">Peanut-Free</option>
                                <option value="pescatarian">Pescatarian</option>
                                <option value="pork-free">Pork-Free</option>
                                <option value="red-meat-free">Red-Meat-Free</option>
                                <option value="sesame-free">Sesame-Free</option>
                                <option value="shellfish-free">Shellfish-Free</option>
                                <option value="soy-free">Soy-Free</option>
                                <option value="sugar-conscious">Sugar-Conscious</option>
                                <option value="sulfite-free">Sulfite-Free</option>
                                <option value="tree-nut-free">Tree-Nut-Free</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                                <option value="wheat-free">Wheat-Free</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select as={Col} defaultValue="" onChange={(event) => setInputCuisine("cuisineType=" + event.target.value)} aria-label="default select example">
                                <option value="">Cuisine Type</option>
                                <option value="American">American</option>
                                <option value="Asian">Asian</option>
                                <option value="British">British</option>
                                <option value="Caribbean">Caribbean</option>
                                <option value="Central Europe">Central Europe</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Eastern Europe">Eastern Europe</option>
                                <option value="French">French</option>
                                <option value="Indian">Indian</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Kosher">Kosher</option>
                                <option value="Mediterranean">Mediterranean</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Middle Eastern">Middle Eastern</option>
                                <option value="Nordic">Nordic</option>
                                <option value="South American">South American</option>
                                <option value="South East Asian">South East Asian</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select as={Col} defaultValue="" onChange={(event) => setInputMealType("mealType=" + event.target.value)} aria-label="default select example">
                                <option value="">Meal Type</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Snack">Snack</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select as={Col} defaultValue="" onChange={(event) => setInputDishType("dishType=" + event.target.value)} aria-label="default select example">
                                <option value="">Dish Type</option>
                                <option value="Biscuits and cookies">Bisbuits & Cookies</option>
                                <option value="Bread">Bread</option>
                                <option value="Cereals">Cereal</option>
                                <option value="Condiments and sauces">Condiments & Sauces</option>
                                <option value="Desserts">Dessert</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Main course">Main Course</option>
                                <option value="Pancake">Pancakes</option>
                                <option value="Salad">Salad</option>
                                <option value="Sandwiches">Sandwich</option>
                                <option value="Side dish">Side Dish</option>
                                <option value="Soup">Soup</option>
                                <option value="Starter">Appetizer</option>
                                <option value="Sweets">Sweets</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <div>
                    <Button className="mx-5" variant="primary" type="submit">Search</Button>
                    <Button className="mx-5" variant="danger" type="reset">Reset</Button>
                    </div>
                </Form>
            </Container>
            <div className="recipe-container">
                <Row>
                    {recipeData && recipeData.map((recipe, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}
                                className="mb-6">
                                <DisplayCard index={index} recipe={recipe.recipe} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <div>
                <Button className="btn btn-dark mx-5" onClick={() => previousPage()}>Last Page</Button>
                <Button className="btn btn-dark mx-5" onClick={() => nextPage()}>Next Page</Button>
            </div>
        </div>
    );
}

export default RecipeSearch;