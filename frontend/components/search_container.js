import Search from './search.jsx';
import {connect} from 'react-redux';
import {selectAllBenches} from '../reducers/selectors';

const mapStateToProps = state => ({
  benches: selectAllBenches(state)
});


export default connect(
  mapStateToProps,
  null
)(Search);
