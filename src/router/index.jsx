import { Routes, Route } from 'react-router-dom';
import { Home } from "../pages/Home";
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Services } from '../pages/Services';
import { WorkShops } from '../pages/WorkShops';
import { ShowsAndPerfomances } from '../pages/ShowsAndPerfomances';
import { RegularClasses } from '../pages/RegularClasses';
import { FAQPage } from '../pages/FAQPage';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/regular-shows" element={<RegularClasses />} />
            <Route path="/workshops" element={<WorkShops />} />
            <Route path="/shows-and-perfomances" element={<ShowsAndPerfomances />} />
            <Route path="/faq&ap" element={<FAQPage />} />
        </Routes>
    )
}