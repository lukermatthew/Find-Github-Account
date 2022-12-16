import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const UserList = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-200">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="avatar online w-14 h-14">
              <div className="w-15 rounded-full">
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="card-title mx-1">{login}</h1>
          <button className="btn gap-1 btn-sm glass">
            <Link to={`/user/${login}`}>
              <FaGithub className="inline pr-3 text-3xl" />
              view profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
