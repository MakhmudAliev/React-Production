import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/ThemeProvider/router';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <p>
        <button onClick={toggleTheme}>TOGGLE</button>
      </p>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
