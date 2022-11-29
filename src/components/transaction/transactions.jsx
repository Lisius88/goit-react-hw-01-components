import PropTypes from 'prop-types';
// import { Transaction } from './transaction';
import {
  TransactioHistory,
  Content,
  Titles,
  Element,
} from './Transactions.style';

export const TransactionsList = ({ transactions }) => {
  return (
    <TransactioHistory>
      <thead>
        <Element>
          <Titles>Type</Titles>
          <Titles>Amount</Titles>
          <Titles>Currency</Titles>
        </Element>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Element key={id}>
            <Content>{type}</Content>
            <Content>{amount}</Content>
            <Content>{currency}</Content>
          </Element>
        ))}
      </tbody>
    </TransactioHistory>
  );
};

TransactionsList.propTypes = {
  transaction: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
