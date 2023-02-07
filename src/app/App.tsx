import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
      <p></p>
    </div>
  );
};

export default App;
