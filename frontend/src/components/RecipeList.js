import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

const RecipeList = () => {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const url = categoryId
                    ? `http://localhost:8000/api/recipes/?category=${categoryId}`
                    : 'http://localhost:8000/api/recipes/';

                const response = await axios.get(url);
                setRecipes(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRecipes();
    }, [categoryId]);

    return (
        <div>
            <h1>Рецепты</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;