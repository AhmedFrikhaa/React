import React from "react";
import Counter  from "./components/Counter";
import Switch from "./components/Switch";
export default class extends React.Component{

constructor(props) {
    super(props);
}
    render() {
        return (
             <div>
                 <Switch/>
                 <Switch/>
                 <Switch/>
                 <Switch/>
                 <Switch/>


            </div>
        );
    }

    componentDidMount() {
        console.log(" did mount");
    }



}
//<Counter/>