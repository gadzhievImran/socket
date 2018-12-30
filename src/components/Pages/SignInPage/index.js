import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';

import SignInPage from './SignIn.page';

export default withCookies(connect(null, null)(SignInPage));
