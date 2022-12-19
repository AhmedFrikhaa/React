
export default function Contact(props){
    console.log(props)
   /** return(
        <div>
            <h2>
                {props.fullname == null ? 'missing fullname ..': props.fullname}
            </h2>
            <p>
                {props.email == null ? 'missing email ..' : props.email}
            </p>
        </div>
    )**/
   if(!props.fullname || !props.email ) {
       return (<div>
           <h3>
               missing informations ..!
           </h3>
           <hr/>
       </div>);
   }
       else{
           return(
           <div>
               <h2>
                   {props.fullname }
               </h2>
               <p>
                   {props.email }
               </p>
               <hr/>
           </div>
       )

   }
}
