import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { useScrollToHash } from "./hooks/useScrollToHash";
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GA_ID!);
console.log("env ID", process.env.REACT_APP_GA_ID!);

function App(): JSX.Element {
  useScrollToHash();

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
