import GlobalAPI from "../../service/GlobalAPI";
import AddResume from "./components/AddResume";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import ResumeCardItem from "./components/ResumeCardItem";


const DashBoard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumeList();
  }, [user]);

  const GetResumeList = async () => {
    try {
      const email: string | undefined =  user?.primaryEmailAddress?.emailAddress;
      if (email) {
        const response = await GlobalAPI.GetUserResume(email);
        // console.log(response.data.data);
        setResumeList(response.data.data);
      } else {
        console.log("email is not defined");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:px-20 md:py-8 px-16 py-8">
      <h1 className="font-bold text-3xl">My Resume</h1>
      <h2 className="text-md md:text-2xl md:leading-14 py-2">
        Start Creating AI Resume to your next Job role
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4 gap-8 px-4">
        <AddResume />
        {resumeList.length > 0 &&
          resumeList.map((item, index) => (
              <ResumeCardItem resume ={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default DashBoard;
