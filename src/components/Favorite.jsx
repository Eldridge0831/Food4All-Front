import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import CookbookPages from './CookbookPages';
import {useDispatch} from 'react-redux';

function Favorite(props) {
    console.log("activated")

    const [cookbookData, setCookbookData] = useState([])
    const [categoryValue, setCategoryValue] = useState("")
    const [cookbookItem, setCookbookItem] = useState(false)
    // const [categoryData, setCategoryData] = useState("")
    // const [commentData, setCommentData] = useState("")
    const dispatch = useDispatch();   

    const loadCookbook = () => {

        setCookbookItem(true)
        // const user_id = localStorage.getItem("UserID");
        let url = "http://localhost:9000/favorite";
        fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data[2].commentSection);
                setCookbookData(data)
                // dispatch(changeButtons(cookbookItem));

            });
    }



    useEffect(() => {
        loadCookbook()
    }, [])

    // retrieving favorites by category
    const categoryList = (event) => {
        setCookbookData([])
        let url = "https://food4all-back.herokuapp.com/favorite/" + "3" + "/" + categoryValue;
        console.log(url)
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
            setCookbookData(data)

        });
    }

    const handleRequest = (event) => {
        setCategoryValue(event.target.value)
    }

    return (
        <div>
            <Container>
                <h2>Your Cook Book</h2>
                <Form className="mb-3">
                    <Row>
                        <Form.Label>Filter by Category</Form.Label>
                        <Form.Control value={categoryValue} onChange={handleRequest} type="text" placeholder="category" required />
                        <Button className="btn btn-dark mx-5" onClick={() => categoryList()}>Search</Button>
                    </Row>
                </Form>
            </Container>
            <div className="recipe-container">
                <Row>
                    {cookbookData && cookbookData.map((recipe, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}
                                className="mb-6">
                                <CookbookPages index={index} recipe={recipe.recipe} commentSection={recipe.commentSection}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Favorite;