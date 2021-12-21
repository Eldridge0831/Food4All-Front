import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setRecipeCard } from "../Redux/actions/RecipeCard-action";



const DisplayCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const individualRecipe = props.recipe;
  // console.log(individualRecipe)
  

  const recipeCard = (individualRecipe) => {
    dispatch(setRecipeCard(individualRecipe));
    history.push('/recipe')
  };

  return (
    <div className="Recipe-card-container rc-5">
      
      <Card style={{ width: "12rem" }}>
        <Card.Img
          className="recipeCard-pic"
          variant="top"
          src={individualRecipe.image}
        />
        <Card.Body>
          <Card.Title>{individualRecipe.label}</Card.Title>
          <Card.Text>{individualRecipe.source}</Card.Text>
          
          <Container>
            <Row>
              <Col>
                <div>
                  <Button variant="primary" onClick={() => recipeCard(individualRecipe)}>Details</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayCard;