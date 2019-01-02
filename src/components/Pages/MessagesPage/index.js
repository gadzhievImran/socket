import { connect } from 'react-redux';

import MessagesPage from './Messages.page';

import { messageAction } from '../../../logic/actions/messageActions';
import { headerTitleChangeAction } from '../../../logic/actions/appActions';

const mapStateToProps = state => {
    return {
        messages: state.messageReducer.messages,
        title: state.appReducer.title
    }
};

const mapDispatchToProps = dispatch => ({
    messageAction: message => dispatch(messageAction(message)),
    headerTitleChangeAction: title => dispatch(headerTitleChangeAction(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
