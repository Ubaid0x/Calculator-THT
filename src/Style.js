import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerView: {
        flex: 0.5, 
        backgroundColor: '#fff',
        justifyContent: 'flex-end', 
        alignContent: 'flex-end'
    },
    btnStyle: { 
        backgroundColor: '#f0f0f0', 
        paddingVertical: 18, 
        paddingHorizontal: 30, 
        margin: 10, 
        borderRadius: 5 
    },
    allBtnView: {
        flex: 0.5,
        flexDirection: 'row'
    },
    numberButtonStyle: {
        flexDirection: 'row',
    },
    operatorBtnStyle: {
        paddingVertical: 14.5, 
        paddingHorizontal: 25, 
        margin: 5, 
    }
})