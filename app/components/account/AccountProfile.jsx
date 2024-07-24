import Profile1 from "../../components/account/Profile1";
import Profile2 from "../../components/account/Profile2";

const AccountProfile = () => {
  return (
    <div className="pt-8 w-[80%] align-middle justify-center items-center bg-gray-200 m-auto flex h-[100%] py-[5rem]">
      <div className="w-[40%]">
        <Profile1 />
      </div>
      <div className="w-full ">
        <Profile2 />
      </div>
    </div>
  );
};

export default AccountProfile;
