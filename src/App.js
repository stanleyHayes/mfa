import './App.css';
import {Route, Routes} from "react-router";
import HomePage from "./pages/home/home-page";
import {ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import {THEMES} from "./utils/themes";
import AboutPage from "./pages/about/about-page";
import ServicesPage from "./pages/services/services-page";
import ContactPage from "./pages/contact/contact-page";
import ForeignPoliciesPage from "./pages/foreign-policies/foreign-policies-page";
import AboutGhanaPage from "./pages/ghana/about-ghana-page";
import GhanaEconomyPage from "./pages/ghana/ghana-economy-page";
import GhanaRegionsPage from "./pages/ghana/ghana-regions-page";

function App() {
    const {themeVariant} = useSelector(selectUI);
    return (
        <ThemeProvider theme={themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme}>
            <Routes>
                <Route element={<HomePage/>} path="/" exact={true}/>
                <Route element={<AboutPage/>} path="/about" index={true}/>
                <Route path="/foreign-policies" element={<ForeignPoliciesPage/>} index={true}/>
                <Route element={<ServicesPage/>} path="/services" exact={true}/>
                <Route element={<ContactPage/>} path="/contact" exact={true}/>
                <Route element={<AboutGhanaPage/>} path="/about-ghana" exact={true}/>
                <Route element={<GhanaEconomyPage/>} path="/about-ghana/economy" exact={true}/>
                <Route element={<GhanaRegionsPage/>} path="/about-ghana/regions" exact={true}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
