import Card from "./Card";
import { useShowObjectiveViewModel } from "../viewmodels/ShowObjectiveViewModel";


function ShowObjetive() {
  const {model,final} = useShowObjectiveViewModel();
  console.log("final desde show" + final);
 
  return (
    <div>

      <h2>Show Objective</h2>
      <div className="cards-container">
      <Card model={model} final={final} />     
      </div>


    </div>
  );
}
export default ShowObjetive;
