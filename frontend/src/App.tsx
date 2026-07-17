import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Records from "./pages/Records/Records";
import NewRecord from "./pages/Records/NewRecord";
import RecordDetails from "./pages/Records/RecordDetails";
import Evidence from "./pages/Evidence/Evidence";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected */}
        <Route path="/vault" element={<DashboardLayout />}>

        <Route index element={<Dashboard />} />

        <Route path="records" element={<Records />} />

        <Route path="records/new" element={<NewRecord />} />

        <Route
          path="records/:id"
          element={<RecordDetails />}
      />

        <Route path="evidence" element={<Evidence />} />

        <Route path="reports" element={<Reports />} />

        <Route path="settings" element={<Settings />} />

        <Route path="profile" element={<Profile />} />

   </Route>

</Routes>
    </BrowserRouter>
  );
}

export default App;