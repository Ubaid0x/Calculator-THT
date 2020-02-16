import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from "react-redux";

import { saveFirstNumber, saveSecondNumber, saveOperator,
    clearData, calculateResult } from './constants';
import Buttons from './component/Button/Button';
import Styles from './Style';
import TextView from './component/TextComponent';

class Screen extends Component {
    state = {
        data: ['7', '8', '9', '6', '5', '4', '3', '2', '1', 'C', '0', '.'],
        firstNumber: '',
        secondNumber: '',
        operator: '',
        result: '',
        count: 0
    }

    _renderItem = (item) => {
        return <Buttons
            number={item}
            numberPress={(number) => {
                if (number == 'C') {
                    this.props.clearData()
                    this.setState({ count: 0 })
                }
                else if (this.state.count == 0)
                    this.props.saveFirstNumber(this.props.firstNumber + number)
                else
                    this.props.saveSecondNumber(this.props.secondNumber + number)
            }} />
    }

    selectOperator = (number) => {
        this.props.saveOperator(number)
        this.setState({ count: ++this.state.count })
    }

    result = () => {
        this.props.calculateResult()
        this.setState({ count: 0 })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={Styles.headerView}>
                    <TextView title={this.props.firstNumber} />
                    {this.state.count > 0 && <View>
                        <TextView title={this.props.operator} />
                        <TextView title={this.props.secondNumber} />
                    </View>}
                    {this.props.result != '' && <TextView title={this.props.result} text={'Result : '} />}
                    {this.props.expressionToSolve != '' && <TextView title={this.props.expressionToSolve} />}
                </View>
                <View style={Styles.allBtnView}>
                    <View style={Styles.numberButtonStyle}>
                        <FlatList
                            data={this.state.data}
                            extraData={this.state.data}
                            numColumns={3}
                            renderItem={({ item }) => this._renderItem(item)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View>
                        <Buttons number={'/'}
                            numberPress={this.selectOperator}
                            btnStyle={[Styles.operatorBtnStyle, { marginTop: 10 }]} />
                        <Buttons number={'*'}
                            numberPress={this.selectOperator}
                            btnStyle={Styles.operatorBtnStyle} />
                        <Buttons number={'+'}
                            numberPress={this.selectOperator}
                            btnStyle={Styles.operatorBtnStyle} />
                        <Buttons number={'-'}
                            numberPress={this.selectOperator}
                            btnStyle={Styles.operatorBtnStyle} />
                        <Buttons number={'='}
                            numberPress={this.result}
                            btnStyle={Styles.operatorBtnStyle} />
                    </View>
                </View>
            </View>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        firstNumber: state.firstNumber,
        operator: state.operator,
        secondNumber: state.secondNumber ? state.secondNumber : '',
        result: state.result,
        expressionToSolve: state.expressionToSolve ? state.expressionToSolve : ''
    }
}
let mapDispatchtoProps = (dispatch) => {
    return {
        saveFirstNumber: (data) => dispatch(saveFirstNumber(data)),
        saveSecondNumber: (data) => dispatch(saveSecondNumber(data)),
        saveOperator: (data) => dispatch(saveOperator(data)),
        clearData: () => dispatch(clearData()),
        calculateResult: () => dispatch(calculateResult())
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Screen)