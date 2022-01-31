import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { Actions } from "react-native-router-flux";


import { CREATE_REQUEST, CREATE_REQUEST_FAIL, CREATE_REQUEST_SUCCESS, STUDENT_CHANGED, STUDENT_LIST_DATA_SUCCESS } from './types'

export const studentChange = ({ props, value }) => {
    return (dispatch) => {
        dispatch({
            type: STUDENT_CHANGED,
            payload: { props, value }
        });
    };
}

export const studentCreate = ({ studentname, surname, studentNumber, branch }) => {
    const currentUserId = getAuth().currentUser.uid;
    const database = getDatabase();


    return (dispatch) => {
        dispatch({
            type: CREATE_REQUEST
        });

        push(ref(database, 'users/' + currentUserId + '/students'),
            { studentname, surname, studentNumber, branch }).then(() => {
                dispatch({ type: CREATE_REQUEST_SUCCESS });
                Actions.pop();
            }).catch(() => {
                dispatch({ type: CREATE_REQUEST_FAIL });
            });
    };
}

export const studentListData = () => {
    const currentUserId = getAuth().currentUser.uid;
    const database = getDatabase();
    const studentsRef = ref(database, `users/${currentUserId}/students`);
    return (dispatch) => {

        onValue(studentsRef, (snapshot) => {
            dispatch({ type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.val() });
        });
    }
}