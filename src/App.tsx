import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Header, MainPage } from './components';
import Container from './components/Container';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <HelmetProvider>
      <div
        className={`h-full min-h-dvh w-full bg-[var(--bg-dark)] py-4 dark:bg-[var(--bg-light)] ${darkMode && 'dark'}`}
      >
        <Header darkMode={darkMode} />
        <Container>
          <MainPage />
        </Container>
      </div>
    </HelmetProvider>
  );
}

export default App;
