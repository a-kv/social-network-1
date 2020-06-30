import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () =>{
         setStatus(props.status)
    }, [props.status] )// []-запускает юзЭффект только в момент перерисовки, пустой массив передавать нельзя

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)

    }
    const updateStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
            </div>
            }
            {editMode &&
                <div>
                    <input onChange={updateStatus} autoFocus onBlur={deactivateEditMode}
                           value={status}></input>
                </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;

