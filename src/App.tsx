import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authRoutes, regularRoutes } from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import AuthLayout from "./hocs/AuthLayout";
import Layout from "./hocs/Layout";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    {authRoutes.map((r, i) => (
                        <Route
                            key={i}
                            path={r.path}
                            element={<AuthLayout>{r.element}</AuthLayout>}
                        />
                    ))}
                    {regularRoutes.map((r, i) => (
                        <Route
                            key={i}
                            path={r.path}
                            element={
                                <PrivateRoute>
                                    <Layout>{r.element}</Layout>
                                </PrivateRoute>
                            }
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
};

export default App;
