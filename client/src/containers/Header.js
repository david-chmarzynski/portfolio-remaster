import { connect } from 'react-redux';

// IMPORT COMPONENT
import Header from '../components/Header/Header';

// IMPORT ACTIONS
import { setState } from '../store/reducers/Header';

const mapStateToProps = (state) => ({
  initial: state.Header.initial,
  clicked: state.Header.clicked,
  menuName: state.Header.menuName
});

const mapDispatchToProps = (dispatch) => ({
  handleSetState: (initial, clicked, menuName) => {
    dispatch(setState(initial, clicked, menuName));
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;