import Home from "./pages/home/Home";
import Instructor from "./pages/instructor/Instructor";
import module from "./pages/module/Module";

import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Quiz from "./pages/quiz/Quiz";
import Topic from "./pages/topic/Topic";
import Assignment from "./pages/assignment/Assignment";

function App(){
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path="/" >
             <Route index element={<Home/>}/>
             <Route path="instructor" element={<Instructor/>}/>
             <Route path="module">
              <Route index element={<Quiz/>}/>
              <Route path="topic" element={<Topic/>}/>;
              <Route path="assignment" element={<Assignment/>}/>;

             </Route>
           </Route>

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;