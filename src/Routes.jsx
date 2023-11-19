import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const EditProfile = React.lazy(() => import("pages/EditProfile"));
const PhoneVerification = React.lazy(() => import("pages/PhoneVerification"));
const Dataencryption = React.lazy(() => import("pages/Dataencryption"));
const CustomisableUserProfile = React.lazy(
  () => import("pages/CustomisableUserProfile"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/customisableuserprofile"
            element={<CustomisableUserProfile />}
          />
          <Route path="/dataencryption" element={<Dataencryption />} />
          <Route path="/phoneverification" element={<PhoneVerification />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
