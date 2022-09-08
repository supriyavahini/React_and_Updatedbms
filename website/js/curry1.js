const getPanCakeIngredients = (ingredient1) =>{
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`; 
        } 
    } 
} 
getPanCakeIngredients('Egg')('flour')('milk');