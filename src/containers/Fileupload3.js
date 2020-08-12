import React, { Component } from "react";
import axios from "axios";

class Fileupload extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectedFile: "",
      getPicture: "",
      targetAge: 0,
      pastAge: 0,
      pastYear: 0
    };
  }

  handleFileInput = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  handleAgeInput = e => {
    this.setState({
      pastAge: e.target.pastAge
    });
  };

  handleYearInput = e => {
    this.setState({
      pastYear: e.target.pastYear
    });
  };

  handleTargetInput = e => {
    this.setState({ targetAge: 2020 - this.state.pastYear + this.state.pastAge });
  };

  // handleChange = e => {
  //   this.setState({ message: e.target.targetAge });
  // };

  // handleClick = e => {
  //   this.setState({ message: "" });
  // };

  // handleNowAge = e => {
  //   this.setState({
  //     ageCal: 2020 - this.setState.pastYear + this.setState.pastAge
  //   });
  // };

  handlePost = async () => {
    const formData = new FormData();

    //검사를 해줘도 좋아

    const { selectedFile, targetAge } = this.state;

    if (selectedFile && targetAge) {
      formData.append("img", selectedFile);
      formData.append("targetAge", targetAge);
      try {
        const resultData = await axios.post("http://13.124.182.247:4000/api_v1/cgan", formData);
        console.log(resultData);
        this.setState({
          getPicture: resultData.data,
          targetAge: resultData.data
        });
      } catch (err) {
        console.log("파일 업로드 실패");
        console.log(err);
      }
    }
  };

  render() {
    const { pastAge, pastYear, targetAge } = this.state;

    // 삼항연산자
    // const alpha = True ? "ABC" : "DEF";
    // const getImage = this.state.getPicture ? (
    //   <div>
    //     <img src={this.state.getPicture} />
    //   </div>
    // ) : null;

    const getImage = this.state.getPicture ? (
      <div>
        <img src={this.state.getPicture} />
      </div>
    ) : (
      <div>안녕</div>
    );

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

              {/* <p className="card=text">
                해당 사진의 나이를 입력해주세요.→
                <input type="number" name="age" onChange={this.handleAgeInput} />
              </p>
              <p className="card=text">
                해당 사진을 찍은 연도를 입력해주세요.→
                <input type="number" name="year" onChange={this.handleYearInput} />
              </p> */}

              <p className="card=text">
                <input
                  type="number"
                  name="age"
                  placeholder="실종아동의 사진 속 나이"
                  onChange={this.handleAgeInput}
                />
                <span>세</span>
              </p>

              <p className="card=text">
                <input
                  type="number"
                  name="year"
                  placeholder="사진을 찍은 연도"
                  onChange={this.handleYearInput}
                />
                <span>년</span>
              </p>

              <button type="button" onClick={this.handleTargetInput}>
                현재 나이 계산
              </button>
              <div> {targetAge} </div>

              {/* <input
                type="number"
                name="testCalBtn2"
                // value={this.state.targetAge}
                onChange={this.handleTargetInput}
              /> */}

              {/* <p id="testResultBox02"></p> */}
              {/* 
              <input type="text" name="age" placeholder="사진 속 실종아동의 나이를 입력하세요" onChange={this.handleAgeInput}>
              <span>원</span><br>
              <input type="text" id="testRate" placeholder="업로드 사진을 찍은 연도를 입력하세요">
              <span>년</span><br>
              <button type="button" id="testCalBtn">현재 나이 계산</button>
              <p id="testResultBox02"></p> */}

              {/* 사진찍은 연도 & 사진이 찍힌 나이 / 올해 몇 살인지 파악(Today.) min 20 - max 70 */}
              <button className="button" onClick={this.handlePost}>
                Upload!
              </button>
            </div>
            {getImage}
          </div>
        </div>
      </div>
      // <div>
      //   {
      //     this.state
      //   }
      // </div>
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
