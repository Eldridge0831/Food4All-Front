import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import CookbookPages from './CookbookPages';

function Favorite(props) {
    console.log("activated")

    const [cookbookData, setCookbookData] = useState([])
    const [categoryValue, setCategoryValue] = useState("")
    const [categoryData, setCategoryData] = useState("")
    const [commentData, setCommentData] = useState("")
    // let cookbook = ""

    const loadCookbook = () => {

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
                console.log(data);
                setCookbookData(data)

            });
    }



    useEffect(() => {
        loadCookbook()
    }, [])

    // retrieving favorites by category
    const categoryList = (event) => {
        setCookbookData([])
        let url = "http://localhost:9000/favorite/" + "3" + "/" + categoryValue;
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
                    <Row>
                        <ListGroup>
                            {categoryData && categoryData.map((category, index) => {
                                return <ListGroup.Item key={index}>{category}</ListGroup.Item>;
                            })}
                        </ListGroup>
                    </Row>
                </Form>
            </Container>
            <div className="recipe-container">
                <Row>
                    {cookbookData && cookbookData.map((recipe, commentSection, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}
                                className="mb-6">
                                <CookbookPages index={index} recipe={recipe.recipe} commentSection={commentSection.commentSection}/>
                                {/* <CookbookPages index={index} comments={recipe.comments} /> */}
                            </Col>
                        )
                    })}
                    {/* {cookbookData && cookbookData.map((comments, index) => {
                        return (
                            <CookbookPages index={index} comments={comments.comments} />
                        )
                    })} */}
                </Row>
            </div>
        </div>
    )
}

export default Favorite;