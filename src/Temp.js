import React, { Component } from "react";
import axios from "axios";

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  handleFileInput = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  handlePost = async () => {
    const formData = new FormData();
    formData.append("img", this.state.selectedFile);
    try {
      const resultData = await axios.post("http://13.124.182.247:4000/api_v1/cgan", formData);
      console.log(resultData);
      console.log("성공");
    } catch (err) {
      console.log("파일 업로드 실패");
      console.log(err);
    }
  };

  render() {
    console.log(this.state.selectedFile);
    return (
      <div>
        <input type="file" name="file" onChange={this.handleFileInput} />
        <button type="button" onClick={this.handlePost} />
      </div>
    );
  }
}

export default Temp;
