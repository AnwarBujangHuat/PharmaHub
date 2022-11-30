import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/User/selector';
import { HomeComponents } from './components';

export const Home = ({ navigation }) => {
  const userInfo = useSelector(getUser);

  const props = {
    userInfo
  };
  return (
    <HomeComponents {...props} />
  );
};
