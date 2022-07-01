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
import ForeignPolicyGuidelinePage from "./pages/foreign-policies/foreign-policy-guideline-page";
import ForeignPoliciesObjectivesPage from "./pages/foreign-policies/foreign-policies-objectives-page";
import HonorableMinisterProfile from "./pages/about/honorable-minister-profile";
import GrowthAndDevelopmentAgendaPage from "./pages/foreign-policies/growth-and-development-agenda-page";
import KwakuAmpratrumSarpongPage from "./pages/about/kwaku-ampratwum-sarpong-profile";
import ThomasMbombaProfilePage from "./pages/about/thomas-mbomba-profile-page";
import ChiefDirectorProfilePage from "./pages/about/chief-director-profile-page";

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

                <Route
                    element={<GrowthAndDevelopmentAgendaPage/>}
                    path="/foreign-policies/growth-and-development-agenda/"
                    exact={true}
                />
                <Route
                    element={<ForeignPoliciesObjectivesPage/>}
                    path="/foreign-policies/foreign-policies-objectives"
                    exact={true}
                />
                <Route
                    element={<HonorableMinisterProfile/>}
                    path="/about/honorable-ministers-profile"
                    exact={true}
                />

                <Route
                    element={<KwakuAmpratrumSarpongPage/>}
                    path="/about/kwaku-ampratwum-sarpong-profile"
                    exact={true}
                />

                <Route
                    element={<ThomasMbombaProfilePage/>}
                    path="/about/thomas-mbomba-profile"
                    exact={true}
                />

                <Route
                    element={<ChiefDirectorProfilePage/>}
                    path="/about/the-chief-directors-profile"
                    exact={true}
                />
                <Route
                    element={<ForeignPolicyGuidelinePage/>}
                    path="/foreign-policies/ghana-foreign-policy-guideline"
                    exact={true}
                />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
