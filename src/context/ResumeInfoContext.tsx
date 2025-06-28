import { createContext } from "react";

type ResumeInfoType = {
    resumeInfo?: any;
    setResumeInfo: any;
}

export const ResumeInfoContext = createContext<ResumeInfoType | null>(null);
