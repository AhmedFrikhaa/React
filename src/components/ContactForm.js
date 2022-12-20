import React from "react";
export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }
    sendDataToServer() {
        console.log("Sending data to server");
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h3>Contact Form</h3>
                <form onSubmit={(event)=>
                {
                    event.preventDefault();
                    this.sendDataToServer();
                }
                }>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className={this.state.name===""? "form-control is-invalid":"form-control is-valid"} id="name" placeholder="Enter name" onChange={(event) => {
                            this.setState({name: event.target.value});
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className={this.state.email===""? "form-control is-invalid":"form-control is-valid"} id="email" placeholder="Enter email" onChange={(event) => {
                            this.setState({email: event.target.value});
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="3" onChange={(event) => {
                            this.setState({message: event.target.value});
                        }}></textarea>
                    </div>
                    <button disabled={this.state.email==="" || this.state.name===""} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}