import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setRecipeCard } from "../Redux/actions/RecipeCard-action";
// import { BsInfoSquare } from "react-icons/bs"; // Information Icon



const DisplayCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const individualRecipe = props.recipe;

  const recipeCard = (individualRecipe) => {
    dispatch(setRecipeCard(individualRecipe));
    history.push('/recipe')
  };

  return (
    <div className="Recipe-card-container">
      <Card style={{ width: "16rem" }}>
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
                  <Button onClick={() => recipeCard(individualRecipe)}>
                    
                    {/* <BsInfoSquare size="24" className="react-icon" /> */}
                  </Button>
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