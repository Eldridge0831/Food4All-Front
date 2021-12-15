import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setItemCard } from "../Redux/actions/ItemCard-action";
import NoPicture from "../assets/no-picture-available-icon.jpg";
// import { setNutritionCard } from "../Redux/actions/NutritionCard-action";
// import { BsInfoSquare } from "react-icons/bs"; // Information Icon



const NutritionCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const optionItem = props.item;
  let picSrc = "";
//   console.log(optionItem);

  const pic = (optionItem.image)
  console.log(pic);
    if (pic === undefined) {
        picSrc = NoPicture;
    } else {
        picSrc = (optionItem.image)
    }

  const itemCard = (optionItem) => {
    dispatch(setItemCard(optionItem));
    history.push('/solo')
  };

  return (
    <div className="option-card-container">
      <Card style={{ width: "16rem" }}>
        <Card.Img
          className="optionCard-pic"
          variant="top"
          src={picSrc}
        />
        <Card.Body>
          <Card.Title>{optionItem.label}</Card.Title>
          
          <Container>
            <Row>
              <Col>
                <div>
                  <Button onClick={() => itemCard(optionItem)}>
                    
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

export default NutritionCard;