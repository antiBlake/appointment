import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Appointment from './Components/Appointment';
import Sharedlayout from './Components/Sharedlayout';

function App() {
  return (
    <div className="App px-4 md:w-8/12 md:m-auto">
      <Routes>
      <Route path='/' element={<Sharedlayout />}>
          <Route index element ={<Home />} />
          <Route path='/appointment'element={<Appointment />} />

        </Route>
        
      </Routes>

    </div>
  );
}

export default App;
