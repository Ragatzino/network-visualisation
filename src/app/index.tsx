import React from "react";
import { LightDarkSwitch } from "../components/light-dark";
import { Autocomplete } from "../components/autocomplete";
import { Title } from "../components/title";
import "./app.scss";
import GraphWrapper from "../pages/graph-wrapper";
import { Network } from "network";
import data from "../sample_data/data.json";

const App = () =>  {
  const availableNetworks:Network[]=data
  const [selectedNetwork,setSelectedNetwork] = React.useState<Network|undefined|null>(undefined)
  console.log(selectedNetwork)
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
      <div><Autocomplete options={availableNetworks.map(network => network.name)} setSelected={(networkName) => setSelectedNetwork(availableNetworks.filter(network => networkName === network.name)[0] ?? null)}/></div>
      </div>
      {selectedNetwork !== undefined && selectedNetwork !== null && 
        <GraphWrapper selectedNetwork={selectedNetwork}/>
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
