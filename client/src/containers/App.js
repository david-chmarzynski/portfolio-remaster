import { connect } from 'react-redux';

// IMPORT COMPONENT
import App from '../components/App/App';

// IMPORT ACTIONS
import { setState } from '../store/reducers/Header';

const mapStateToProps = (state) => ({
  initial: state.Header.initial,
  clicked: state.Header.clicked,
  menuName: state.Header.menuName
});

const mapDispatchToProps = (dispatch) => ({});


// CONNECT
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;