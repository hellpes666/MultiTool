import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setThemeSetting } from '../features/themeSlice';
import { ROUTES } from '../helpers/routes/routes';

const Header: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg mx-auto flex w-[90%] max-w-[1280px] items-center justify-between rounded-4xl px-6 py-3 select-none sm:px-8 md:h-20 lg:w-[70%]'>
      <h2 className='title text-lg font-extrabold sm:text-xl lg:text-2xl'>
        MultiTool.
      </h2>

      <nav className='hidden md:block'>
        <ul className='text-nav flex items-center gap-6 lg:gap-8'>
          {ROUTES.map((route, index) => (
            <li
              key={index}
              className='scale cursor-pointer text-sm font-bold sm:text-base'
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
            className={`absolute duration-500 ${darkMode ? 'scale-110 opacity-100' : 'scale-90 opacity-0'}`}
            width={32}
            height={32}
          />
          <img
            src='/light.svg'
            alt='Светлая тема'
            className={`absolute duration-500 ${darkMode ? 'scale-90 opacity-0' : 'scale-110 opacity-100'}`}
            width={32}
            height={32}
          />
        </div>
      </button>

      <button
        className='ml-4 md:hidden'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className='relative h-8 w-8'>
          <img
            src={darkMode ? '/dark-open.svg' : '/light-open.svg'}
            alt='Открыть меню'
            className={`absolute transform transition-all duration-500 ${
              menuOpen
                ? 'scale-90 rotate-90 opacity-0'
                : 'scale-110 rotate-0 opacity-100'
            }`}
            width={32}
            height={32}
          />

          {/* Закрыть меню */}
          <img
            src={darkMode ? '/dark-close.svg' : '/light-close.svg'}
            alt='Закрыть меню'
            className={`absolute transform transition-all duration-500 ${
              menuOpen
                ? 'scale-110 rotate-0 opacity-100'
                : 'scale-90 -rotate-90 opacity-0'
            }`}
            width={32}
            height={32}
          />
        </div>
      </button>
    </header>
  );
};

export default Header;
