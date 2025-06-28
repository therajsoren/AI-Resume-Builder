const SkillsPreview = ({ resumeinfo }: any) => {
  return (
    <div>
      <div
        className="text-center text-xs font-bold border-b-[1.5px]"
        style={{ borderColor: resumeinfo?.themeColor }}
      >
        <h1 style={{ color: resumeinfo?.themeColor }}>Skills</h1>
      </div>
      {resumeinfo?.skills?.map((item: any, index: number) => (
        <div
          key={index}
          className="my-2 text-xs flex justify-between"
          style={{ color: resumeinfo?.themeColor }}
        >
          <div>
            <p className="font-bold">{item?.name}</p>
          </div>
          <div>
            <p>{item?.rating * 1 + "%"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPreview;
