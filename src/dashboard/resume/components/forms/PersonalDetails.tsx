import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import GlobalAPI from "../../../../../service/GlobalAPI";
import { useParams } from "react-router-dom";

const PersonalDetails = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
 const params: any = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState();

  console.log(params?.resumeId)
  const handleChange = (e: any) => {
    setFormData({
      ...resumeInfo,
      [e.target.name]: e.target.value,
    });
    setResumeInfo({
      ...resumeInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    try {
      const res = await GlobalAPI.UpdateResumeDetail(params?.resumeId,data);
      if (res) {
        setLoading(true);
        setResumeInfo(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="border-t-[20px] border-2 border-t-purple-700 rounded-t-xl border-gray-300 shadow-lg">
      <div className="p-4">
        <h1 className="font-bold text-xl">Personal Details</h1>
        <h3 className="text-base">
          Get started with the basic information about you
        </h3>
      </div>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <h1>First Name</h1>
            <Input
              name="firstName"
              value={resumeInfo?.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <h1>Last Name</h1>
            <Input
              name="lastName"
              value={resumeInfo?.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4">
          <div>
            <h1>Job Title</h1>
            <Input
              name="jobTitle"
              value={resumeInfo?.jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <h1>Address</h1>
            <Input
              name="address"
              value={resumeInfo?.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 px-4 gap-4">
          <div>
            <h1>Phone</h1>
            <Input
              name="phone"
              value={resumeInfo?.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <h1>Email</h1>
            <Input
              name="email"
              value={resumeInfo?.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-end p-2">
          <Button className="bg-purple-600" type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
