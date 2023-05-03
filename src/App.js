
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomeViewModel from './viewmodels/HomeViewModel'
import NewObjectiveViewModel from './viewmodels/NewObjectiveViewModel'
import Home from './views/Home';
import NewObjective from "./views/NewObjetive";
import EditObjective from "./views/EditObjetive";
import ShowObjective from "./views/ShowObjetive";
import DeleteObjective from "./views/DeleteObjective";
import NoMatch from "./views/NoMatch";


function App() {
  const { date, festivos} = HomeViewModel();
  const{time, handleTimeChange}= NewObjectiveViewModel();

  return (
    <div className="App">
          

          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home date={date} festivos={festivos}/>} />
          <Route path="/new-objective" element={<NewObjective time={time} handleTimeChange={handleTimeChange}/>} />
          <Route path="/edit-objective/:id" element={<EditObjective />} />
          <Route path="/delete-objective/:id" element={<DeleteObjective />} />
          <Route path="/show-objective/:id" element={<ShowObjective />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>


    </div>
  );
}


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-objective">new-objective</Link>
          </li>

        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}




export default App;
