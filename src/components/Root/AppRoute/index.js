import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppRoute from './AppRoute';

export default withRouter(connect(null, null)(AppRoute));
