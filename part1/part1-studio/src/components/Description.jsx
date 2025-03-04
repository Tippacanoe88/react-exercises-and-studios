import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    return(
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "the red dog recipe book" className= {styles.imageUpdates}/>
            <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
};

class RecipeDescription extends React.Component {
    render(){
        <div>
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor/>
        </div>
    }
}

export default RecipeDescription;