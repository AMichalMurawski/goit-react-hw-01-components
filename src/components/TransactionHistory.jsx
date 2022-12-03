import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item, index) => (
        <tbody key={index}>
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.objectOf(PropTypes.string.isRequired),
  amount: PropTypes.objectOf(PropTypes.number.isRequired),
  currency: PropTypes.objectOf(PropTypes.string.isRequired),
};
