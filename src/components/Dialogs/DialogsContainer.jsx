import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)








//HOC
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const  DialogsContainer  = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;


//connect - функция, ктрю вызываем в помощью замыкания возращает хок

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     // withAuthRedirect
// )(Dialogs);
//     (props) => {
//     if (!this.props.isAuth) return <Redirect to='/login'/>
//     return <Dialogs {...props}/>
// }
// let AuthRedirect = withAuthRedirect(Dialogs)