import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import CookbookPages from './CookbookPages';
// import {useDispatch} from 'react-redux';
// import { ReactDOM } from 'react-dom';

function Favorite(props) {

    const [cookbookData, setCookbookData] = useState([])
    const [categoryValue, setCategoryValue] = useState("")
    const [error, setError] = useState("")
    // const [cookbookItem, setCookbookItem] = useState(false)
    // const [categoryData, setCategoryData] = useState("")
    // const [commentData, setCommentData] = useState("")
    // const dispatch = useDispatch(); 
    
    const user_id = ("3");

    const loadCookbook = () => {

        // const user_id = localStorage.getItem("UserID");

        if (user_id !== "") {
            let url = "https://food4all-back.herokuapp.com/favorite/" + "3";
            fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.length !== 0) {
                        //  console.log(data[2].commentSection);
                        setCookbookData(data)
                    } else {
                        setError("You Have No Favorited Recipes Yet!")
                    }
                });
        } else {
            setError("You are not signed in.  Please log-in or register to continue.")
        }
    }



    useEffect(() => {
        loadCookbook()
    }, [])

    // retrieving favorites by category
    const categoryList = (event) => {
        setError("")
        if (user_id !== "") {
        let url = "http://localhost:9000/favorite/" + "3" + "/" + categoryValue;
        fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.length !== 0) {
                    setCookbookData(data);
                    setCategoryValue("");
                } else {
                    setError("Category not Found!")
                    // console.log("got here")
                }
            });
        } else {
            setError ("You are still not signed in!")
        }

    }

    const handleRequest = (event) => {
        setCategoryValue(event.target.value)
    }

    return (
        <div>
            <Container>
                <h2>Your Cook Book</h2>
                <Form className="mb-3">
                    <Row className="mb-3">
                        <Col md="4"></Col>
                        <Col md="4">
                            <Form.Label>Filter by Category</Form.Label>
                            <Form.Control className="mb-2" value={categoryValue} onChange={handleRequest} type="text" placeholder="" required />
                            <Button className="btn btn-primary mb-2" onClick={() => categoryList()}>Search</Button>
                        </Col>
                        <Col md="4"></Col>
                    </Row>
                </Form>
            </Container>
            {error && <span className="error">{error}</span>}
            <div className="recipe-container">
                <Row>
                    {cookbookData && cookbookData.map((recipe, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}
                                className="mb-6">
                                <CookbookPages index={index} recipe={recipe.recipe} commentSection={recipe.commentSection} category={recipe.category} />
                            </Col>
                        )
                    })}
                </Row>
                {/* {error && <span className="error">{error}</span>} */}
            </div>
        </div>
    )
}

export default Favorite;