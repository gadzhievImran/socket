import { connect } from 'react-redux';

import MessagesPage from './Messages.page';

import { messageAction } from '../../../logic/actions/messageActions';
import { headerTitleChangeAction } from '../../../logic/actions/appActions';
import messageReducer from "../../../logic/reducers/messageReducer";
import appReducer from "../../../logic/reducers/appReducer";

const mapStateToProps = state => ({
    message: state.messageReducer.message,
    title: state.appReducer.title
});

const mapDispatchToProps = dispatch => ({
    messageAction: message => dispatch(messageAction(message)),
    headerTitleChangeAction: title => dispatch(headerTitleChangeAction(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
