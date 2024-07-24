const Profile2 = () => {
  return (
    <div className="space-y-10 flex border-l-2 border-black flex-col h-full justify-center items-center ">
      <div className=" pb- space-y-5">
        <p className=" border rounded-full border-black py-8 px-5">Image</p>
        <p className="cursor-pointer  border border-orange-600 px-5">userID</p>
      </div>

      <div className=" w-full text-center cursor-pointer ">
        <div className="w-[50%] m-auto space-y-10">
          <p className="px-5  border  border-blue-500">Full Name</p>
          <p className="px-5  border  border-blue-500">Display Name </p>
          <p className="px-5  border  border-blue-500">Email</p>
          <p className="px-5  border  border-blue-500">Phone Number</p>
          <p className="px-5  border  border-blue-500">Password</p>
        </div>
      </div>
    </div>
  );
};
export default Profile2;
