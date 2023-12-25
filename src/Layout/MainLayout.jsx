import Loading from "../Component/Loading/Loading";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet, useNavigation } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigation();
  return (
    <div>
      <Header />
      {navigate.state === "loading" ? <Loading /> : <Outlet />}

      <Footer />
    </div>
  );
};

export default MainLayout;
