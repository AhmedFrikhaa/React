import React from "react";
export default class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingInput: "",
            shoppingList: []
        };

    }
    render() {
        return (
            <div>
                <h3>Shopping List </h3>
                <button onClick={()=>{
                    this.setState({
                        shoppingList:[]
                    })
                }}>Clear List</button>
                <ul>
                    {this.state.shoppingList.map((i) => {
                        return( <li key={i.id}>
                            <p>
                                <strong>{i.title}</strong><br/>
                                <small>{i.date.getFullYear()}</small>
                            </p>
                        </li>
                        );
                    }
                    )}
                </ul>
                <input type="text" onChange={(event) => {

                    this.setState({shoppingInput: event.target.value});
                }}
                          value={this.state.shoppingInput}
                />
                <button onClick={() => {
                    const item = { id:(this.state.shoppingList.length + 1),title: this.state.shoppingInput, date: new Date()};
                    let tmp = this.state.shoppingList;
                    tmp.push(item);
                    this.setState({shoppingList: tmp,shoppingInput:""});
                }
                }
                >Add</button>
            </div>
        );
    }
    }