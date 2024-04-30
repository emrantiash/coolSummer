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
import { useLocation } from "react-router-dom";


import SuiteRoute from "./components/route/Route";



let persistor = persistStore(store);

export default function App() {
  
 

  

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  // if (currentPage === "/login" || currentPage === "/signup") {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Suspense fallback={<div>Loading...</div>}>
      {/* <RoutePath /> */}
      <SuiteRoute />
    
      </Suspense>
      </PersistGate>
      </Provider>
    );
  
}
