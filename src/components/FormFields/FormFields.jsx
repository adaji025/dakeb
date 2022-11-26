export const CustomInputField = ({ icon, label, type, placeholder, labelFor, handleChange }) => {
  return (
    <>
      {/* <label htmlFor={labelFor}>{label}</label> */}
      <div className="relative shadow w-full rounded-lg">
        <input type='text' className={`w-full h-[66px] rounded-lg shadow pl-12 outline-none`} placeholder={placeholder} onChange={handleChange} />
        <div className="absolute top-[20px] left-4">{icon}</div>
      </div>
    </>
  );
};
