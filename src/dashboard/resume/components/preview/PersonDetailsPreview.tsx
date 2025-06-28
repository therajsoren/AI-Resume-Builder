const PersonDetailsPreview = ({ resumeinfo }: any) => {

  return (
    <div style={{ color: resumeinfo?.themeColor }}>
      <h2 className="font-bold text-xl text-center">
        {resumeinfo?.firstName} {resumeinfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeinfo?.jobTitle}
      </h2>
      <h2 className="text-center font-normal text-xs">{resumeinfo?.address}</h2>

      <div
        className="flex justify-between font-normal text-xs"
        style={{
          color: resumeinfo?.themeColor,
        }}
      >
        <h2>{resumeinfo?.phone}</h2>
        <h2>{resumeinfo?.email}</h2>
      </div>
      <div
        className="border-b-[1.5px]"
        style={{ borderColor: resumeinfo?.themeColor }}
      ></div>
    </div>
  );
};

export default PersonDetailsPreview;
