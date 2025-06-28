import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center gap-4 justify-between">
        <div>
          <span className="font-bold ml-2 cursor-pointer">
            <Link to="/">Task Manager</Link>
          </span>
        </div>
        <Link to="/user">User</Link>
        <Link to="/task">Task</Link>

        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
