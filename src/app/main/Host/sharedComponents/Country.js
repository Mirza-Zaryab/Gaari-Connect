import React from "react";
import { render } from "react-dom";
import ReactPhoneInput from "react-phone-input-2";

class Country extends React.Component {
  state = { phone: "" };

  handleOnChange = value => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };

  render() {
    return (
      <div>
        <ReactPhoneInput
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true
          }}
          defaultCountry={"sg"}
          value={this.state.phone}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}
export default Country;