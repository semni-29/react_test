import React, { Component } from "react";
import axios from "axios";

class Fileupload extends Component {
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
        <div className="container" align="center">
          {/* For Alert box*/}
          <div id="oc-alert-container"></div>
          {/* Single File Upload*/}
          <div
            className="card border-light mb-3 mt-5"
            style={{ boxShadow: "10px 10px 10px 2px rgba(195,192,192,.5)" }}
          >
            <div className="card-header">
              <h3 style={{ color: "#555", marginLeft: "50px" }}>사진을 등록하세요๑•‿•๑</h3>
            </div>
            <div className="card-body">
              <p className="card-text">사진을 선택한 후 업로드 버튼을 눌러주세요.</p>
              <input type="file" name="file" onChange={this.handleFileInput} />
              <button className="button" onClick={this.handlePost}>
                Upload!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* render() {
    console.log(this.state.selectedFile);
    return (
      <div>
        <input type="file" name="file" onChange={this.handleFileInput} />
        <button type="button" onClick={this.handlePost} />
      </div> */
}

export default Fileupload;
