import React from "react";
export  default  class  Switch extends  React.Component{
constructor(promps) {
    super(promps);
    this.state={
        btnState : false
    }

}
render() {
    return(
        <div onClick={
            ()=>{
                this.setState({
                    btnSate:!this.state.btnSate
                })
            }
        } className={this.state.btnSate===false? "switch":"switch active"}>


            <div></div>
        </div>
    )
}
}