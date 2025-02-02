import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import {
  Blog,
  Cinema,
  Container,
  Friends,
  Header,
  MainPage,
  SEO,
  Weather,
} from './components';
import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const PAGES: {
    path: string;
    element: JSX.Element[];
  }[] = [
    {
      path: '',
      element: [<MainPage />],
    },
    {
      path: 'weather',
      element: [<Weather />],
    },
    {
      path: 'cinema',
      element: [<Cinema />],
    },

    {
      path: 'blog',
      element: [<Blog />],
    },
    {
      path: 'friends',
      element: [<Friends />],
    },
  ];

  return (
    <div
      className={`h-full min-h-dvh w-full bg-[var(--bg-dark)] py-4 dark:bg-[var(--bg-light)] ${darkMode && 'dark'}`}
    >
      <BrowserRouter>
        <SEO title='MultiTool' />
        <Header darkMode={darkMode} />
        <Container>
          <Routes>
            {PAGES.map(page => (
              <Route
                path={`/${page.path}`}
                element={page.element}
              />
            ))}
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
