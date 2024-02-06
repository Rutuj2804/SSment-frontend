import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authRoutes, regularRoutes } from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import PublicLayout from "./hocs/PublicLayout";
import PrivateLayout from "./hocs/PrivateLayout";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    {authRoutes.map((r, i) => (
                        <Route
                            key={i}
                            path={r.path}
                            element={<PublicLayout>{r.element}</PublicLayout>}
                        />
                    ))}
                    {regularRoutes.map((r, i) => (
                        <Route
                            key={i}
                            path={r.path}
                            element={
                                <PrivateRoute>
                                    <PrivateLayout>{r.element}</PrivateLayout>
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
