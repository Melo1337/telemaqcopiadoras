import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/home/App';
import PrinterDetails from './pages/PritnersDetails/PrinterDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/PrinterDetails" element={<PrinterDetails />} />
    </Routes>
  </BrowserRouter>
);
