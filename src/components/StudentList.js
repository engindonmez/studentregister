import _ from 'lodash';
import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { studentListData } from '../actions'


class StudentList extends Component {

    componentDidMount() {
        this.props.studentListData();
    }

    render() {
        console.log(this.props.studentList);
        return (
            <View style={styles.container}>
                <FlatList data={this.props.studentList}
                    renderItem={({ item }) => <Text style={styles.item}>{`${item.studentname} ${item.surname}`}</Text>}
                ></FlatList>
            </View>
        );
    }
}

const mapStateToProps = ({ studentListResponse }) => {
    const studentList = _.map(studentListResponse, (val, uid) => {
        return ({ ...val, uid });
    });

    return { studentList };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        borderColor: '#61944e',
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: '#a5db91',
        fontSize: 18,
        flex: 1,
        color: 'black'
    },
});

export default connect(mapStateToProps, { studentListData })(StudentList);