import Contact from "./components/Contact";

function OldApp() {
    const contacts=[
        {id:1 , fullname:"Ahmed Frikha", email:"ahmedfrikha1@gmail.com"} ,
        {id:2 , fullname:"Ahmed Frikha", email:"ahmedfrikha2@gmail.com"} ,
        {id:3 , fullname:"Ahmed Frikha", email:"ahmedfrikha3@gmail.com"} ,
    ];

    /*const  element=<h1>Bonjour</h1>
    return (
       <div className="OldApp">
         {element}
         <Contact fullname="Ahmed Frikha" email="ahmedfrikha59@gmail.com"></Contact>
         <Contact fullname="Ahmed Frikha" email={"ahmed.frikha2@insat.ucar.tn"}></Contact>
         <Contact/>
       </div>
     );*/
    return(<div className={OldApp}>

        {


            contacts.map((c)=>{
                return(
                    <Contact key={c.id} fullname={c.fullname} email={c.email} />

                );
            })
        }
        <Contact></Contact>
    </div>)
}

export default OldApp;
