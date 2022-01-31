import React from "react";
import { Appearance } from 'react-native';
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import StudentList from "./components/StudentList";
import StudentCreate from "./components/StudentCreate";


import dark from './themes/dark';
import light from './themes/light';

const RouterComponent = () => {
    const themeStyle = Appearance.getColorScheme() === 'dark' ? dark : light;

    return (
        <Router>
            <Scene key="root" sceneStyle={themeStyle}>
                <Scene sceneStyle={themeStyle} key="auth" hideNavBar={true}>
                    <Scene sceneStyle={themeStyle} key="login" hideNavBar={false} component={LoginForm} title="Giriş Ekranı" />
                </Scene>

                <Scene key="main" hideNavBar={true}>
                    <Scene hideNavBar={false}
                        component={StudentList}
                        title="Öğrenci Listesi"
                        key="studentList"
                        onRight={() => Actions.studentCreate()}
                        rightTitle="Yeni" />
                    <Scene
                        hideNavBar={false}
                        key="studentCreate"
                        component={StudentCreate}
                        title="Öğrenci Kaydet" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;