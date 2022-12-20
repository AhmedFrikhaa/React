import React from "react";
export default class  Product extends React.Component{
    constructor(props) {
        super(props);
    }

render() {

    return (
        <div className="card" >
            <img src={this.props.photoUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{this.props.cardTitle}</h5>
                <p className="card-text"> {this.props.title}</p>
            </div>
        </div>
    );
}


}