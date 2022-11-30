import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/User/selector';
import { ProfileComponents } from './components';

export const Profile = ({ navigation }) => {
  const userInfo = useSelector(getUser);

  const props = {
    userInfo
  };
  return (
    <ProfileComponents {...props} />
  );
};
