const DetailInformation = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className="text-sm flex gap-2">
        <p className="font-semibold">{title}: </p>
        <span className="font-light">{children}</span>
      </div>
    </>
  );
};

export default DetailInformation;
