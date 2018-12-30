import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';

import Bootstrap from './Bootstrap';

export default withCookies(connect(null, null)(Bootstrap));
