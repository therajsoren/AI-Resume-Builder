const ExperiencePreview = ({ resumeinfo }: any) => {
  return (
    <div className="mt-4">
      <div
        className="border-b-[1.5px] text-center text-sm font-bold"
        style={{ borderColor: resumeinfo?.themeColor }}
      >
        {/* heading */}
        <h1 style={{ color: resumeinfo?.themeColor }}>Personal Experience</h1>
      </div>
      {resumeinfo?.experience?.map((item:any, index:number) => (
        <ul
          key={index}
          className="my-4 text-xs"
          style={{ color: resumeinfo?.themeColor }}
        >
          <li className="text-xs font-bold">{item?.title}</li>
          <li className="flex text-xs justify-between">
            {item?.companyName} {item?.city}, {item?.state}
            <span>
              {item?.startDate} - {item?.endDate}
            </span>
          </li>
          <li className="my-2">
            {item?.workSummery}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ExperiencePreview;
