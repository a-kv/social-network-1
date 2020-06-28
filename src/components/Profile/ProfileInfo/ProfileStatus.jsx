import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        //так как сетСтейт ассинхронный сначала выполняется стр 11, затем стр 12 выкидывает из стэка(aссинх ф), выполняктся стр 15, и только поле этого, когда осовобождается стэк выполняется сэтСтейт, в котором меняется значение на true
        // console.log(this.state.editMode); //false
        this.setState({
            editMode: true
        })
        // console.log(this.state.editMode); //false
        // this.forceUpdate();   //костыль-  принуждает реакт обновить  компонент
    }
    // создание метода с помощью стрелочной функции для того, чтобы не байндить и не тереть контекст
    //this.forceUpdate

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }

    updateStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input onChange={this.updateStatus} autoFocus onBlur={this.deactivateEditMode}
                               value={this.state.status}></input>
                    </div>}
            </div>
        )
    }
}


export default ProfileStatus;

