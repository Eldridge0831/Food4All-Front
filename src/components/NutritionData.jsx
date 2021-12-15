import React, { useState } from 'react';
import axios from 'axios';
import { Button, Row, Col } from 'react-bootstrap';
import NutritionCard from './NutritionCard';
import { useHistory } from "react-router-dom";
// import { setItemCard } from "../Redux/actions/ItemCard-action";

function NutritionData(props) {
    const [searchValue, setSearchValue] = useState("");
    // const [nutritionData, setNutritionData] = useState([])
    const [alternateOptions, setAlternateOptions] = useState([]);
    const history = useHistory ();


    // API call
    function fetchNutrition(event) {
        event.preventDefault()
        console.log("api called");

        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {

            if (this.readyState === 4 && this.status === 200) {
                var responseData = JSON.parse(this.responseText)
                if (responseData.hints.length) {
                    // console.log(responseData)
                    setAlternateOptions(responseData.hints)
                } if ( responseData.hints.length === 0) {
                    history.push('/404')      
                }
            }
        }
        request.open("GET", `https://api.edamam.com/api/food-database/v2/parser?app_id=95c34110&app_key=3a66e6e0892f21920f12d6787b36cdcd&ingr=${searchValue}&nutrition-type=cooking&category=generic-foods`);
        request.send();

    }

    const searchRequest = (event) => {
        setSearchValue(event.target.value)
        // console.log(searchValue)
    }

    return (
        <div>
            <div>
                <h1>Food Nutrition & Alternatives</h1>
                <input value={searchValue} onChange={(event) => searchRequest(event)} type="text" placeholder="Your Item" required />
                <Button type="submit" onClick={(event) => fetchNutrition(event)}>Search</Button>
            </div>
            <div className="recipe-container">
                <Row>
                    {alternateOptions && alternateOptions.map((item, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}
                                className="mb-6">
                                <NutritionCard index={index} item={item.food} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )

}

export default NutritionData;