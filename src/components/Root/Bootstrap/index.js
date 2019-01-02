import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';

import Bootstrap from './Bootstrap';

export default withRouter(withCookies(connect(null, null)(Bootstrap)));
