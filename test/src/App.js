import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage/ProjectDetailsPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="app">
		<Routes>
			<Route path='/' element={<HomePage/>}/>

			<Route path="/project/:projectId" element={<ProjectDetailsPage/>}/>
		</Routes>
    </div>
  );
}

export default App;
