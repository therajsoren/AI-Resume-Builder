import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/ui/custom/Header";
import { ThemeProvider } from "@/components/ui/custom/theme-provider";

const App = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default App;
