import { useMediaQuery } from "react-responsive";

// Add Layout Components
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import SectionLayout from "./layouts/SectionLayout";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  return (
    <>
      { isMobile ? <MobileLayout/> : <DesktopLayout /> }
      <SectionLayout />
    </>
  );
}

export default App;
