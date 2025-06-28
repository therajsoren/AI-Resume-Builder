import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext } from "react";
import PersonDetailsPreview from "./preview/PersonDetailsPreview";
import SummaryPreview from "./preview/SummaryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationPreview from "./preview/EducationPreview";
import SkillsPreview from "./preview/SkillsPreview";

const ResumePreview = () => {

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  console.log(resumeInfo)
  return (
    <div className="shadow-lg h-full p-14 border-t-[20px]"
    style={{borderColor: resumeInfo?.themeColor}}>
      <PersonDetailsPreview resumeinfo={resumeInfo} />
      <SummaryPreview  resumeinfo={resumeInfo} />
      <ExperiencePreview  resumeinfo={resumeInfo} />
      <EducationPreview  resumeinfo={resumeInfo} />
      <SkillsPreview  resumeinfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
