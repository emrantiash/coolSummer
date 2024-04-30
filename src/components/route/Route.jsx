import React, { useState, Fragment, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
const LandingPublic = lazy(() =>
  import("../../pages/LandingPage/LandingPublic")
);
const LandingPrivate = lazy(() =>
  import("../../pages/LandingPage/LandingPrivate")
);

const LoginPage = lazy(() => import("../..//pages/AuthPage/LoginPage"));
const SignupPage = lazy(() => import("../../pages/AuthPage/SignupPage"));
const ProductPublic = lazy(() =>
  import("../../pages/ProductPage/ProductPublic")
);
const PricingPublic = lazy(() =>
  import("../../pages/PricingPage/PricingPublic")
);
const CommunityPage = lazy(() =>
  import("../../pages/CommunityPage/CommunityPage")
);
const CommunityApps = lazy(() =>
  import("../../pages/CommunityPage/Marketplace/CommunityApps/CommunityApps")
);
const AppDetails = lazy(() =>
  import("../../pages/CommunityPage/Marketplace/CommunityApps/AppDetails")
);
const SelectOrganisation = lazy(() =>
  import("../../pages/OrganisationPage/SelectOrganisation")
);
const SearchOrganisation = lazy(() =>
  import("../../pages/OrganisationPage/SearchOrganisation")
);
const CreateOrganisation = lazy(() =>
  import("../../pages/OrganisationPage/CreateOrganisation")
);
const AccountPage = lazy(() => import("../../pages/AccountPage/AccountPage"));

const CreateProfile = lazy(()=>import("../../pages/CreateProfile/CreateProfile"))
const SelectCompany = lazy(()=>import("../../pages/SelectCompany/SelectCompany"))
const  ConfirmPurchase = lazy(()=>import( "../../pages/ConfirmPurchase/ConfirmPurchase"))

const  Callback = lazy(()=>import( "../../pages/Callback/Callback"))

import NavbarComponent from "../Navbar/NavbarComponent";
import SecondNavbar from "../Navbar/SecondNavbar";



export default function SuiteRoute() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const isAuthenticated = useSelector((state) => state.loginReducer.isLogin);
  const token = useSelector((state) => state.loginReducer.token);
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
    // new route 
    {
      path: "/create-profile",
      element: <CreateProfile />,
    },
    {
      path: "/select-company",
      element: <SelectCompany />,
    },
    {
      path: "/confirm-purchase",
      element: <ConfirmPurchase />,
    },
    {
      path: "/callback",
      element: <Callback />,
    },
  ];
  if (currentPage === "/login" || currentPage === "/signup") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes
            .filter((route) => route.path === currentPage)
            .map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
      </Suspense>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
}
