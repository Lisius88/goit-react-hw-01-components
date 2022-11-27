import PropTypes from 'prop-types';
import {
  Title,
  List,
  Item,
  Label,
  Percentage,
  Statistics,
} from './statistics.style';

export const Stats = ({ title = 'Upload stats', stats }) => {
  return (
    <Statistics>
      <Title title={title}>{title}</Title>
      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label stat={stat.label}>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Statistics>
  );
};

Stats.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
