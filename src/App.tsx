import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Header } from './components';

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`min-h-dvh bg-[var(--bg-dark)] px-24 py-4 dark:bg-[var(--bg-light)] ${darkMode && 'dark'}`}
    >
      <Header />
    </div>
  );
}

export default App;
