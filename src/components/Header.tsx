import { useDispatch, useSelector } from 'react-redux';
import { setThemeSetting } from '../features/themeSlice';
import { RootState } from '../store/store';
import { ROUTES } from '../helpers/routes/routes';

const Header = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <header className='bg mx-auto flex h-18 w-[70%] items-center justify-between rounded-4xl px-8 py-1'>
      <h2 className='title font-extrabold'>MultiTool.</h2>

      <nav>
        <ul className='text flex items-center gap-8'>
          {ROUTES.map((route, index) => (
            <li
              key={index}
              className='scale cursor-pointer font-bold'
            >
              {route}
            </li>
          ))}
        </ul>
      </nav>

      <button
        className='group cursor-pointer'
        onClick={() => dispatch(setThemeSetting())}
      >
        <div className='relative h-8 w-8'>
          <img
            src='/dark.svg'
            alt='Темная тема'
            className={`durationAll-500 absolute ${
              darkMode ? 'scale-110 opacity-100' : 'scale-90 opacity-0'
            }`}
            width={32}
            height={32}
          />
          <img
            src='/light.svg'
            alt='Светлая тема'
            className={`durationAll-500 absolute ${
              darkMode ? 'scale-90 opacity-0' : 'scale-110 opacity-100'
            }`}
            width={32}
            height={32}
          />
        </div>
        <span
          id='theme-decriptor'
          className='hidden'
        >
          Изменить тему
        </span>
      </button>
    </header>
  );
};

export default Header;
