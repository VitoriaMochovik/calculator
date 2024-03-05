import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CalculatorPage} from './pages/CalculatorPage/CalculatorPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Results } from './pages/Results/Results';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<CalculatorPage />} />
        <Route path='/results' element={<Results />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
