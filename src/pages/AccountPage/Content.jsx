import UnvailableContent from "../HelperPage/UnavailableContent";
import MyProfile from "./layouts/MyProfile";
import Organisation from "./layouts/Organisation";
import Privacy from "./layouts/Privacy";
import Security from "./layouts/Security";
import Settings from "./layouts/Settings";
import Compliance from "./layouts/Compliance";

export default function Content({ page }) {
  switch (page) {
    case "my-profile":
      return <MyProfile />;
    case "settings":
      return <Settings />;
    case "security":
      return <Security />;
    case "privacy":
      return <Privacy />;
    case "organisation":
      return <Organisation />;
    case "compliance":
      return <Compliance />;
    default:
      return <UnvailableContent />;
  }
}
