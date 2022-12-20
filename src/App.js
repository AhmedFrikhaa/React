import React from "react";
import ShoppingList from "./components/ShoppingList";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ContactForm from "./components/ContactForm";
//import Counter  from "./components/Counter";
//import Switch from "./components/Switch";
export default class extends React.Component{

constructor(props) {
    super(props);
}
    render() {
        return (
             <div>
                    <Navbar></Navbar>
                 <br></br>
                 <div className="container ">
                     <div className="row">
                         <div className="col">
                             <Product title="Product 1" cardTitle="Card N°1" photoUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></Product>
                         </div>
                         <div className="col" >
                             <Product title="Product 2" cardTitle="Card N°2" photoUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                         </div>
                         <div className="col">
                             <Product title="Product 3" cardTitle="Card N°3" photoUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                         </div>
                     </div>
                     <br></br>
                     <ContactForm/>
                 </div>

            </div>
        );
    }

    componentDidMount() {
        console.log(" did mount");
    }



}
//<Counter/>
//<Switch/>
//<Switch/>
//<Switch/>
//<Switch/>
//<Switch/>
// <ShoppingList></ShoppingList>
