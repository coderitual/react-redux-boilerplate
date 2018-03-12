import { connect } from 'react-redux';
import Users from './Users';
import * as users from 'store/users';
import * as counter from 'store/counter';

const mapStateToProps = state => ({
  users: users.selectors.getFilteredDataReselect(state),
});

const mapDispatchToProps = {
  onInit: users.actions.fetchUsers,
  onChangeAdminFilter: users.actions.changeAdminFilter,
  onChangeUserFilter: users.actions.changeUserFilter,
  onDummyButtonClick: counter.actions.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
