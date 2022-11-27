import PropTypes from 'prop-types';
// import { Transaction } from './transaction';
import {
  TransactioHistory,
  Content,
  Titles,
  Element,
} from './transactions.style';

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
        {transactions.map(transaction => (
          <Element key={transaction.id}>
            <Content>{transaction.type}</Content>
            <Content>{transaction.amount}</Content>
            <Content>{transaction.currency}</Content>
          </Element>
        ))}
      </tbody>
    </TransactioHistory>
  );
};

TransactionsList.propTypes = {
  transaction: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
  }),
};
