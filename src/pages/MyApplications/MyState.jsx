import { PiSuitcaseSimpleLight } from "react-icons/pi";

const MyState = ({ user }) => {

  return (
    <div className="md:w-10/12 mx-auto flex items-center justify-center py-14 ">
      <div className="stats shadow p-3 md:p-10 gap-3 md:gap-10 bg-base-100">
        <div className="stat ">
          <div className="stat-figure text-primary">
            <PiSuitcaseSimpleLight size={35}></PiSuitcaseSimpleLight>
          </div>
          <div className="stat-title text-sm font-medium">Total Job Apply</div>
          <div className="stat-value text-primary">
             Job
          </div>
          <div className="stat-desc">11% more than last month</div>
        </div>

        <div className="stat items-center">
          <div className="stat-figure text-secondary">
            <div className="avatar avatar-online">
              <div className="w-16 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          </div>
          <div className="stat-title md:text-base text-gray-700">
            {user.displayName}
          </div>
          <div className="stat-desc text-primary md:text-base">
            {user.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyState;
