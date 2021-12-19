import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setRecipeCard } from "../Redux/actions/RecipeCard-action";



const CookbookPages = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cookbookItem = props.recipe;
  const cookbookComments = props.commentSection;
  console.log(cookbookItem)
  console.log(cookbookComments)
  let item = "";

  Object.keys(cookbookItem).forEach(function(recipe) {
    item = cookbookItem[recipe]
    }
  );
  
  const recipeCard = (item) => {
    dispatch(setRecipeCard(item));
    history.push('/recipe')
  };

  return (
    <div className="Recipe-card-container"   >
      
      <Card style={{ width: "10rem" }}>
        <Card.Img
          className="recipeCard-pic"
          variant="top"
          src={item.image}
        />
        <Card.Body>
          <Card.Title>{item.label}</Card.Title>
          <Card.Text>{item.source}</Card.Text>
          
          <Container>
            <Row>
              <Col>
                <div>
                  <Button variant="primary" onClick={() => recipeCard(item)}>Details</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CookbookPages;