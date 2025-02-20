import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/categories/')
            .then((response) => {
                setCategories(response.data); // Сохраняем массив категорий напрямую
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>Категории</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/recipes?category=${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;