import React, { Component } from "react";
import { Text, TextInput, StyleSheet, Appearance } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { connect } from "react-redux";
import { Button, Card, CardSection, Spinner } from "../common";
import { studentChange, studentCreate } from '../actions'

import dark from '../themes/dark';
import light from '../themes/light';

class StudentCreate extends Component {

    clickSave() {
        const {
            studentname,
            surname,
            studentNumber,
            branch
        } = this.props;

        this.props.studentCreate({ studentname, surname, studentNumber, branch })
    }

    renderButton() {
        if (!this.props.loading) {
            return <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>;
        }
        return <Spinner />;
    }


    render() {
        const themeStyle = Appearance.getColorScheme() === 'dark' ? dark.containerStyle : light.containerStyle;

        const { inputStyle, containerStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="Isim"
                        style={[themeStyle, inputStyle]}
                        value={this.props.studentname}
                        placeholderTextColor={"#262b40"}
                        onChangeText={studentname => this.props.studentChange({ props: 'studentname', value: studentname })}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={[themeStyle, inputStyle]}
                        value={this.props.surname}
                        placeholderTextColor={"#262b40"}
                        onChangeText={surname => this.props.studentChange({ props: 'surname', value: surname })}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={[themeStyle, inputStyle]}
                        value={this.props.studentNumber}
                        placeholderTextColor={"#262b40"}
                        onChangeText={studentNumber => this.props.studentChange({ props: 'studentNumber', value: studentNumber })}
                    />
                </CardSection>
                <CardSection>
                    <Text style={{ color: 'black' }}>Şube</Text>
                    <Picker
                        placeholder="Şube"
                        style={[themeStyle, inputStyle]}
                        placeholderTextColor={"black"}
                        selectedValue={this.props.branch}
                        onValueChange={branch => this.props.studentChange({ props: 'branch', value: branch })}
                    >
                        <Picker.Item label="A Şubesi" value="abranch" />
                        <Picker.Item label="B Şubesi" value="bbranch" />
                        <Picker.Item label="C Şubesi" value="cbranch" />
                        <Picker.Item label="D Şubesi" value="dbranch" />
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
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

const mapToStateProps = ({ studentCreateResponse }) => {
    const {
        studentname,
        surname,
        studentNumber,
        branch,
        loading
    } = studentCreateResponse;

    return {
        studentname,
        surname,
        studentNumber,
        branch,
        loading
    };
}

export default connect(mapToStateProps, { studentChange, studentCreate })(StudentCreate);