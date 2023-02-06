import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/ThemeProvider/router';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <p>
        <button onClick={toggleTheme}>TOGGLE</button>
      </p>
    </div>
  );
};

export default App;
