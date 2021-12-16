import React, { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import DisplayCard from './DisplayCard';

function Favorite(props) {

    const [cookbookData, setCookbookData] = useState ([])
    const [categoryValue, setCategoryValue] = useState ("")

    function loadCookbook() {


        const user_id = localStorage.getItem("UserID");
        let url = "/favorites/" + user_id;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setCookbookData(data.recipe);


            });
    }

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
                        <Form.Control value={categoryValue} onchange={handleRequest} type="text" plaaceholder="category" required />
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