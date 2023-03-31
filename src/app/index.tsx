import React from "react";
import { LightDarkSwitch } from "../components/light-dark";
import { Autocomplete } from "../components/autocomplete";
import { Title } from "../components/title";
import "./app.scss";
import { Graph } from "../components/graph";

const data=[]
const App = () =>  {
  const [selected,setSelected] = React.useState("")
  console.log("selected " +selected)
  return (
    <>
    <div className="topnav">
      <div className="container">
      <div className="item"><Title/></div>
      <div className="item"><LightDarkSwitch/></div>
      </div>
    </div>
    <div className="App">
      <div className="height-container">      
      <div className="item">
      <div><Autocomplete options={["cabron.org","cabronito.com","cabroner.er","donde.es"]} setSelected={setSelected}/></div>
      </div>
      {selected !== "" && 
      <div className="item">
      <div>{selected}</div>
      <Graph/>
      </div>
      }
      </div>
    </div>
    <footer  className="footer">
  <p><a href="https://github.com/Ragatzino/network-visualisation">Github project</a></p>
</footer> 
    </>
  );
}

export default App;
