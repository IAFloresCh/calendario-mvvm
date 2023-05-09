import Card from "./Card";
import { useShowObjectiveViewModel } from "../viewmodels/ShowObjectiveViewModel";


function ShowObjetive() {
  const {model,final,percentage} = useShowObjectiveViewModel();
  console.log("final desde show" + final);
  console.log("log desde show objective" + model);
 
  return (
    <div>

      <h2>Show Objective</h2>
      <div className="cards-container">
      <Card model={model} final={final} percentage={percentage} />     
      </div>


    </div>
  );
}
export default ShowObjetive;
