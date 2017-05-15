import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors,
  formType: ownProps.location.pathname === '/login' ? 'login' : 'signup'
};};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => {
    ownProps.location.pathname === "/login" ? dispatch(login(user))
     : dispatch(signup(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
