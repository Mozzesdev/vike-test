import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";

const TopBar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between py-5 text-neutral-300">
        <button className="hover:text-neutral-400 transition-colors duration-200">
          <Bars3Icon width={30} />
        </button>
        <button className="hover:text-neutral-400 transition-colors duration-200">
          <UserCircleIcon width={30} />
        </button>
      </div>
    </nav>
  );
};

export default TopBar;
