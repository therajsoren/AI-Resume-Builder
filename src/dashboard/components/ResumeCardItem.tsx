import { Notebook } from "lucide-react"
import { Link } from "react-router-dom"

const ResumeCardItem = ({resume}: any) => { 

  return (
    <Link to={`/dashboard/resume/${resume.resumeId}/edit`}>
    <div className="mt-4 pl-4">
      <div className="p-14 bg-secondary flex items-center justify-center h-[280px] w-[280px rounded-md border hover:scale-105 transition-all hover:shadow-primary cursor-pointer">
        <Notebook />
      </div>
      <h2 className="text-center">{resume.title}</h2>
    </div>
    </Link>
  )
}

export default ResumeCardItem