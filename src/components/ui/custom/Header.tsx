import { Link } from "react-router-dom";
import { Button } from "../button";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center p-4 shadow-md px-5">
      <Link to={"/"}>
        <img src="/logo.svg" width={50} />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <Link to={"/dashboard"}>
            <Button className="bg-purple-700 text-orange-100 cursor-pointer">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className="bg-purple-700 text-orange-100 cursor-pointer">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
