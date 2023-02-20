import React from "react";

function CategoriesCard(props) {
    return (
        <div>
            <div className="card">
                <img src={props.image} className="card-img-top" alt={props.name + "Category Image"} />
                <div className="card-body">
                    <h5 className="card-title"> {props.name} </h5>
                    <p className="card-text"> {props.description} </p>
                    <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-primary">Link</a> 
                </div>
            </div>
        </div>
    )
}
export default CategoriesCard;        