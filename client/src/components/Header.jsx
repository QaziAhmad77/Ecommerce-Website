import { Link } from 'react-router-dom';
import { headerLogo, userLogo } from '../assets';
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Header = () => {
  const { productData } = useSelector((state) => state.bazar);
  const { userInfo } = useSelector((state) => state.bazar);
  console.log(userInfo, 'userInfo');
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28 h-16" alt="logoDark" src={headerLogo} />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="lis">Home</li>
            <li className="lis">Pages</li>
            <li className="lis">Shop</li>
            <li className="lis">Element</li>
            <li className="lis">Blog</li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <BsCart className="w-[34px] h-[34px]" />{' '}
              <span className="absolute top-2 text-red-400 left-[12px] text-sm flex items-center justify-center font-semibold">
                {productData?.length}
              </span>
            </div>{' '}
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={userInfo ? userInfo.image : userLogo}
              alt=""
            />
          </Link>
          {userInfo && (
            <p className="text-base font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
