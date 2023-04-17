import classNames from 'classnames';
import { useContext } from 'react';
import NavigationContext from '../../context/navigation.context';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classNames('text-blue-500');

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
