import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';

import { userInfoAction } from '../../../logic/actions/userActions';
import Bootstrap from './Bootstrap';

const mapDispatchToProps = dispatch => ({
    userInfoAction: data => dispatch(userInfoAction(data))
})

export default withRouter(withCookies(connect(null, mapDispatchToProps)(Bootstrap)));
