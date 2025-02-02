import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Header, MainPage } from './components';
import Container from './components/Container';
import { BrowserRouter, Route, Routes } from 'react-router';
import Weather from './components/Weather/Weather';

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`h-full min-h-dvh w-full bg-[var(--bg-dark)] py-4 dark:bg-[var(--bg-light)] ${darkMode && 'dark'}`}
    >
      <BrowserRouter>
      
        <Header darkMode={darkMode} />
        <Container>
          <Routes>
            <Route
              path='/'
              element={<MainPage />}
            />
            <Route
              path='/weather'
              element={<Weather />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
