const Profile1 = () => {
  return (
    <div className="space-y-10 text-center flex flex-col h-full justify-center items-center ">
      <div className=" pb-7 space-y-5">
        <p className=" border rounded-full border-black py-8 px-5">Image</p>
        <p className="cursor-pointer  border border-orange-600 px-5">userID</p>
      </div>
      <div className="border-dashed  border-b border-b-black h-1 w-[80%]"></div>
      <div className=" cursor-pointer space-y-10">
        <p>Profile: Information</p>
        <p>Subscrption</p>
        <p>Terms and Conditions</p>
        <p>Contact Support</p>
      </div>
    </div>
  );
};
export default Profile1;
