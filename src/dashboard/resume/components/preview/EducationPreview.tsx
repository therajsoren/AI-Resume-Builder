const EducationPreview = ({ resumeinfo } : any) => {
  return (
    <div className="mt-4">
      <div
        className="text-center font-bold text-sm border-b-[1.5px]"
        style={{ borderColor: resumeinfo?.themeColor }}
      >
        {/* heading */}
        <h1 style={{ color: resumeinfo?.themeColor }}>Education</h1>
      </div>
      <div>
        {resumeinfo?.education.map((item:any, index:number) => (
          <ul key={index} className="my-5 text-xs" style={{ color: resumeinfo?.themeColor }}>
            <li className="text-xs font-bold">{item?.universityName}</li>
            <li className="flex text-xs justify-between py-2">
                {item?.degree} in {item?.major}
              {item?.schoolName} {item?.city}, {item?.state}
              <span>
                {item?.startDate} - {item?.endDate}
              </span>
            </li>
            <li>
              {item?.description}
            </li>
            </ul>
        ))}
      </div>
    </div>
  );
};

export default EducationPreview;
