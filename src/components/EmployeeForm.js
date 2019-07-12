import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Text, Picker  } from "react-native";
import {CardSection, Input} from "./common";
import  {employeeUpdate} from "../actions";

class EmployeeForm extends Component {
  render() {
    return(
      <View>
        <CardSection>
          <Input
          label="Name"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={text => this.props.employeeUpdate({prop:"name", value: text})}
          />
        </CardSection>

        <CardSection>
          <Input
          label="Phone"
          placeholder="666-666-6666"
          onChangeText={text => this.props.employeeUpdate({prop:"phone", value: text})}
          value={this.props.phone}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
          style={{flex: 1}}
          selectedValue={this.props.shift}
          onValueChange={day => this.props.employeeUpdate({prop: "shift", value: day})}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    )
  }
}


const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
};

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);