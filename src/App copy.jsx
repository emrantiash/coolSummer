import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Route, Routes, useLocation } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";

import NavbarComponent from "./components/Navbar/NavbarComponent";
import SecondNavbar from "./components/Navbar/SecondNavbar";

import useIsLogin from "./lib/hooks/isLogin";

const LoginPage = lazy(() => import("./pages/AuthPage/LoginPage"));
const SignupPage = lazy(() => import("./pages/AuthPage/SignupPage"));
const ProductPublic = lazy(() => import("./pages/ProductPage/ProductPublic"));
const PricingPublic = lazy(() => import("./pages/PricingPage/PricingPublic"));
const LandingPublic = lazy(() => import("./pages/LandingPage/LandingPublic"));
const LandingPrivate = lazy(() => import("./pages/LandingPage/LandingPrivate"));
const CommunityPage = lazy(() => import("./pages/CommunityPage/CommunityPage"));
const CommunityApps = lazy(() =>
  import("./pages/CommunityPage/Marketplace/CommunityApps/CommunityApps")
);
const AppDetails = lazy(() =>
  import("./pages/CommunityPage/Marketplace/CommunityApps/AppDetails")
);
const SelectOrganisation = lazy(() =>
  import("./pages/OrganisationPage/SelectOrganisation")
);
const SearchOrganisation = lazy(() =>
  import("./pages/OrganisationPage/SearchOrganisation")
);
const CreateOrganisation = lazy(() =>
  import("./pages/OrganisationPage/CreateOrganisation")
);
const AccountPage = lazy(() => import("./pages/AccountPage/AccountPage"));

let persistor = persistStore(store);

export default function App() {
  
  // const isLogin = useSelector((state)=>state.loginReducer.isLogin)
  const { isAuthenticated } = useContext(AuthContext);

  // const useLogin = useIsLogin()

  const routes = [
    {
      path: "/",
      element: isAuthenticated ? <LandingPrivate /> : <LandingPublic />,
    },
    {
      path: "/products",
      element: <ProductPublic />,
    },
    {
      path: "/pricing",
      element: <PricingPublic />,
    },
    {
      path: "/community",
      element: <CommunityPage />,
    },
    {
      path: "/select-organisation",
      element: <SelectOrganisation />,
    },
    {
      path: "/search-organisation",
      element: <SearchOrganisation />,
    },
    {
      path: "/create-organisation",
      element: <CreateOrganisation />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/account",
      element: <AccountPage />,
    },
    {
      path: "/community-apps",
      element: <CommunityApps />,
    },
    {
      path: "/app/:id",
      element: <AppDetails />,
    },
  ];

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  if (currentPage === "/login" || currentPage === "/signup") {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
     
        {routes
          .filter((route) => route.path === currentPage)
          .map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          
      </Routes>
      </Suspense>
      </PersistGate>
      </Provider>
    );
  } else {
    return (
      <>
       <Provider store={store}>
          <PersistGate persistor={persistor}>
        <Routes>
          {routes.map((route, index) => (
            <Fragment key={index}>
               
              {route.path === "/account" ? (
                <Route
                  path={route.path}
                  element={
                    <>
                      <SecondNavbar />
                      <Suspense fallback={<div>Loading...</div>}>
                        {route.element}
                      </Suspense>
                    </>
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  element={
                    <>
                      <NavbarComponent />
                      <Suspense fallback={<div>Loading...</div>}>
                        {route.element}
                      </Suspense>
                    </>
                  }
                />
              )}
           
            </Fragment>
          ))}
        </Routes>
        </PersistGate>
        </Provider>
      </>
    );
  }
}
