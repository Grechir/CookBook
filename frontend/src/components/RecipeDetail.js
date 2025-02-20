import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './RecipeDetail.css'

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then((response) => {setRecipe(response.data);})
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className='recipe-detail-container'>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h2>Вам понадобится:</h2>
            <p>{recipe.ingredients}</p>
            <h2>Как приготовить?</h2>
            <p>{recipe.instructions}</p>
        </div>
    )
}

export default RecipeDetail;

