import { connect } from 'react-redux';
import Users from '../components/Users';
import {
  fetchUsers,
  changeAdminFilter,
  changeUserFilter,
  changeCounter,
} from '../actions/users';
import { getFilteredDataReselect } from '../selectors/users';

const mapStateToProps = state => ({
  users: getFilteredDataReselect(state),
});

const mapDispatchToProps = {
  onInit: fetchUsers,
  onChangeAdminFilter: changeAdminFilter,
  onChangeUserFilter: changeUserFilter,
  onDummyButtonClick: changeCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
