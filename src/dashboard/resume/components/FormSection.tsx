import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext } from "react";
import PersonalDetails from "./forms/PersonalDetails";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div>
      <div className="flex items-center justify-between pb-3 ">
        <div className="flex items-center">
          <Button variant="ghost" size="default">
            <span>
              <LayoutGrid />
            </span>
            Theme
          </Button>
        </div>
        <div>
          <Button className="bg-purple-700">
            Next
            <span>
              {" "}
              <ArrowRight />{" "}
            </span>
          </Button>
        </div>
      </div>
      <PersonalDetails />
    </div>
  );
};

export default FormSection;
