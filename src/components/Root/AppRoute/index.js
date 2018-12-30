import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import AppRoute from './AppRoute';

export default withCookies(withRouter(connect(null, null)(AppRoute)));
// export default withRouter(withCookies(connect(null, null)(AppRoute));
