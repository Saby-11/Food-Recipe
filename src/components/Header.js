import React from 'react';

const Header = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-1 "><span class="material-icons brand-icon">
            restaurant
            </span> Food Recipe
            </h1>
            <div class="input-group w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Search your favourite recipe..."
            value = {props.search}
            onChange= {props.onInputChange}
            />
            <div class="input-group-append">
                <button className="btn btn-dark" onClick={props.onSearchClick}>Search Recipe</button>
            </div>
            </div>
            
        </div>
    );
};

export default Header;