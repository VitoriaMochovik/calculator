import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CalculatorPage} from './pages/CalculatorPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Results } from './pages/results';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<CalculatorPage />} />
        {/* Outras rotas */}
        <Route path='/results' element={<Results />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
