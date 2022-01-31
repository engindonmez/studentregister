import React, { Component } from 'react';
import { TextInput, StyleSheet, SafeAreaView, Appearance } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Spinner } from '../common';

import dark from '../themes/dark';
import light from '../themes/light';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    clickLogin() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    }

    renderButton() {
        if (!this.props.loading) {
            return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
        }
        return <Spinner />;
    }

    render() {
        const isDarkMode = Appearance.getColorScheme() === 'dark';
        const { inputStyle, containerStyle } = styles;

        return (
            <SafeAreaView style={[containerStyle, isDarkMode ? dark.containerStyle : light.containerStyle]}>
                <Card>
                    <CardSection>
                        <TextInput
                            placeholder="E-Mail"
                            style={inputStyle}
                            value={this.props.email}
                            placeholderTextColor={"#262b40"}
                            onChangeText={email => this.props.emailChanged(email)}
                        />
                    </CardSection>

                    <CardSection>
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Şifre"
                            style={inputStyle}
                            value={this.props.password}
                            placeholderTextColor={"#262b40"}
                            onChangeText={password => this.props.passwordChanged(password)}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3
    }
});

const mapStateToProps = ({ authorizationResponse }) => {
    const { email, password, loading } = authorizationResponse;
    return { email: 'test@test.com', password: '123456', loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);