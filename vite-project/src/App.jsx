
import { Route, Router, Routes } from "react-router-dom";
// import { lazy, Suspense } from "react";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route path="/favorites" element={<Favorites />} />
        {/* <Route path="/auth" element={<AuthForm />} />
        <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App
