import { Network } from "network";
import { Graph } from "../../components/graph";

interface Props{
    selectedNetwork:Network
}
const GraphWrapper = ({selectedNetwork}:Props) => {
console.log("toto")
return <section className="item">
<h2>{selectedNetwork.name}</h2>
    <Graph network={selectedNetwork}/>
</section>
}
export default GraphWrapper;
