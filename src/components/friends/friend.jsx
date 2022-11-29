import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import { Div, Status, Avatar, Name } from './Friend.style';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Div>
      <Status isOnline={isOnline}>
        {isOnline}
        <BsFillCircleFill />
      </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
