import React, { Component } from "react";
import CategoriesCard from "../components/CategoriesCard";
import CategoriesWrapper from "../components/CategoriesWrapper";
import Categories from "../components/Categories.json";

class CategoriesDisplay extends Component {
    // Setting this.state.projects to the projects json array
    state = {
        // Categores Array
        Categories
    };

    // Map over this.state.categories and render a Category Card component for each category object
    render() {

        return (
            <CategoriesWrapper>
            {
                this.state.Categories.map(category => (
                    <CategoriesCard
                        id={category.id}
                        key={category.id}
                        name={category.name}
                        image={category.image}
                        description={category.description}                       
                        link={category.link}                        
                    />
                ))
            }
            </CategoriesWrapper>
        );
    }

}

export default CategoriesDisplay;