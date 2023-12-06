import { headerLogo, userLogo } from '../assets';
import { BsCart } from 'react-icons/bs';
const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-28 h-16" alt="logoDark" src={headerLogo} />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="lis">Home</li>
            <li className="lis">Pages</li>
            <li className="lis">Shop</li>
            <li className="lis">Element</li>
            <li className="lis">Blog</li>
          </ul>
          <div className="relative">
            <BsCart className="w-[34px] h-[34px]" />{' '}
            <span className="absolute top-2 text-red-400 left-[12px] text-sm flex items-center justify-center font-semibold">
              10
            </span>
          </div>{' '}
          <img className="w-8 h-8 rounded-full" src={userLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
