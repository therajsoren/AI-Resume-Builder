import { useEffect, useState } from "react";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
// import GlobalAPI from "../../../../../service/GlobalAPI";
import dummy, { type ResumeInfo } from '@/data/dummy';



const EditResume = () => {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | undefined>(undefined);
  useEffect(() => {
    // console.log(resumeId);
    GetResumeInfo();
  }, []);

  // console.log("resume id is ", resumeId)
  // console.log("type of resume id is ", typeof resumeId)
  // console.log("lenght of resume id  is ", resumeId?.length)

  const GetResumeInfo = async() => {
    setResumeInfo(dummy);
    // try {
    //   const id : string | undefined = resumeId;
    //   // console.log(typeof id)
    //   // console.log("id is : ", id); 
    //   if (id) {
    //     const response = await GlobalAPI.GetResumeById(id);
    //     // console.log("raj soren", response);
    //     console.log(response.data.data);
    //     setResumeInfo(response.data.data);
    //   } else{
    //       return;
    //   }
    // } catch (error) {
    //   // console.log("disha goyal")
    //   console.log(error)
    // }
  };
  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
