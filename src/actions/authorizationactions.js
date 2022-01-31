import { Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Actions } from "react-native-router-flux";
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from "./types";

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        if (email === '' || password === '') {
            Alert.alert(
                'Mesaj',
                'Her iki alan da dolu olmalıdır.',
                [
                    {
                        text: 'Tamam',
                        onPress: () => null
                    }
                ]
            );
        }
        else {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(user => loginSucces(dispatch, user))
                .catch(() => {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then(user => loginSucces(dispatch, user))
                        .catch(() => loginFail(dispatch));
                });
        }
    }
};

const loginSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};

const loginFail = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Kullanıcı adı veya şifreniz hatalı!',
        [
            {
                text: 'Tamam',
                onPress: () => null
            }
        ]
    );
    dispatch({
        type: LOGIN_USER_FAIL
    });
};