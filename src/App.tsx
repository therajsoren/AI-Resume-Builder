import { useUser } from "@clerk/clerk-react"
import { Navigate, Outlet } from "react-router-dom"
import Header from "./components/ui/custom/Header";


const App = () => {

  const{isLoaded, isSignedIn} = useUser();
  
  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth/sign-in'} />
  }
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App