
import './App.css';
import Layout from './views/Layout';
import Home from './views/Home';
import NewObjective from "./views/NewObjective";
import EditObjective from "./views/EditObjetive";
import ShowObjective from "./views/ShowObjetive";
import DeleteObjective from "./views/DeleteObjective";
import NoMatch from "./views/NoMatch";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/new-objective" element={<NewObjective />} />
          <Route path="/edit-objective/:id" element={<EditObjective  />} />
          <Route path="/delete-objective/:id" element={<DeleteObjective />} />
          <Route path="/show-objective/:id" element={<ShowObjective />} />
          
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>


    </div>
  );
}





export default App;
