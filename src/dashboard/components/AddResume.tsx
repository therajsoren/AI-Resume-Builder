import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import { Loader2, PlusSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import GlobalAPI from "../../../service/GlobalAPI";

interface Placeholder {
  name: string;
}

const placeholders: Placeholder[] = [
  { name: "Full Stack Resume" },
  { name: "Frontend Developer Resume" },
  { name: "Backend Developer Resume" },
  { name: "Product Manager Resume" },
  { name: "UI/UX Designer Resume" },
  { name: "DevOps Resume" },
];

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [resumeTitle, setResumeTitle] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(() => {
        return Math.floor(Math.random() * placeholders.length);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };
    try {
      const res = await GlobalAPI.createResume(data);
      console.log(res.data.data)
      if(res){
        setLoading(true)
      }
    } catch (error) {
        console.log(error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="">
      <div
        className="p-14 py-26 border rounded-lg hover:shadow-md hover:scale-105 transition-all cursor-pointer border-dashed bg-secondary flex items-center justify-center h-[280px] w-[280px] mt-8
      "
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a new Resume</DialogTitle>
            <DialogDescription>
              Add a title for your new resume
              <Input
                className="mt-4"
                placeholder={placeholders[placeholderIndex].name}
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button disabled={!resumeTitle || loading} onClick={onCreate}>
              {loading ? <Loader2 className="animate-spin" /> : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
