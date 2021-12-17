import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './DisplayCard';

function Favorite(props) {
    console.log ("activated")

    const [cookbookData, setCookbookData] = useState ([])
    const [categoryValue, setCategoryValue] = useState ("")
    const [categoryData, setCategoryData] = useState ("")
    const [commentData, setCommentData] = useState ("")

    const loadCookbook = () => {

        console.log ("activated")
        // const user_id = localStorage.getItem("UserID");
        let url = "http://localhost:9000/users/user";
        fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
              },
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                // setCookbookData(data.recipe);
                // setCommentData(data.commentSection)
                // setCategoryData(data.category)

            });
    }

    useEffect (() => {
        loadCookbook()
    },[])

    const categoryList = (event) => {
        setCookbookData()
    }

    const handleRequest = (event) => {
        console.log("request made")
        setCategoryValue(event.target.value)
    }

    return (
        <div>
            <Container>
                <h2>Your Cook Book</h2>
                <Form onSubmit={categoryList} className="mb-3">
                    <Row>
                        <Form.Label>Filter by Category</Form.Label>
                        <Form.Control value={categoryValue} onChange={handleRequest} type="text" plaaceholder="category" required />
                    </Row>
                </Form>
            </Container>
            <div className="recipe-container">
                <Row>
                    {cookbookData && cookbookData.map((recipe, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}
                                className="mb-6">
                                <DisplayCard index={index} recipe={recipe.recipe} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Favorite;