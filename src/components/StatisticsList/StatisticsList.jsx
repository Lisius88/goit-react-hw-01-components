import PropTypes from 'prop-types';
import {
  Title,
  List,
  Item,
  Label,
  Percentage,
  Statistics,
} from './StatisticsList.style';

export const Stats = ({ title, stats }) => {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label stat={label}>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Statistics>
  );
};

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
