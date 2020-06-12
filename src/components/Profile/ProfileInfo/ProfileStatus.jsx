import React from 'react';
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                {this.state.editMode === false
                    ? <div>
                        <span>{this.props.status}</span>
                    </div>
                    : <div>
                        <input value={this.props.status}></input>
                    </div>}
            </div>
        )
    }
}

// if (!props.profile) {
//     return <Preloader/>
// }


export default ProfileStatus;

