
const SummaryPreview = ({resumeinfo}: any) => {

  return (
    <div className="mt-2" style={{ color: resumeinfo?.themeColor }}>
        <p className="text-xs tracking-widest leading-relaxed">{resumeinfo?.summery}</p>
    </div>
  )
}

export default SummaryPreview