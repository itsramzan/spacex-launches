import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Launches from "pages/Launches";
import Launch from "pages/Launch";
import NotFound from "pages/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:id" element={<Launch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
