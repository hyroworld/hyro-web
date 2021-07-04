import { useMediaQuery } from "react-responsive";

// Add Layout Components
import DesktopLayout from "./layouts/DesktopLayout";
import MobileLayout from "./layouts/MobileLayout";
import ContainerLayout from "./layouts/ContainerLayout";

function App() {
  const isMobile = useMediaQuery({ maxDeviceWidth: 768 });
  
  return (
    <>
      { isMobile ? <MobileLayout/> : <DesktopLayout /> }
      <ContainerLayout />
    </>
  );
}

export default App;
