const SkillsPreview = ({ resumeinfo }: any) => {
  return (
    <div className="py-4">
      <div
        className="text-center text-xs font-bold border-b-[1.5px]"
        style={{ borderColor: resumeinfo?.themeColor }}
      >
        <h1 style={{ color: resumeinfo?.themeColor }}>Skills</h1>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        {resumeinfo?.skills?.map((item: any, index: number) => (
          <div
            key={index}
            className="my-2 text-xs flex justify-between items-center space-x-2"
            style={{ color: resumeinfo?.themeColor }}
          >
            <h1 className="font-bold text-xs">{item?.name}</h1>
            <div className="h-2 bg-gray-200 w-[120px] ">
              <div className="h-2"
                style={{
                  backgroundColor: resumeinfo?.themeColor,
                  width: item?.rating * 1 + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;
