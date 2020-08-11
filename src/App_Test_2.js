// import React, { Component } from "react";
// import axios from "axios";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedFile: null
//     };
//   }

//   handleFileInput = e => {
//     this.setState({
//       selectedFile: e.target.files[0]
//     });
//   };

//   handlePost = async () => {
//     const formData = new FormData();
//     formData.append("
//     file", this.state.selectedFile);
//     try {
//       const resultData = await axios.post("http://localhost:4000/api/upload", formData);
//       this.setState({
//         내스테이트배열에 다넣어 6개가들어가면
//       })
//       console.log("성공");
//     } catch (err) {
//       console.log("파일 업로드 실패");
//       console.log(err);
//     }
//   };

//   render() {
//     const files = this.state.getFiles ? this.state.getFiles : []
//     const images = (
//       <div>
//         <img sr
//       </div>
//     )
//     console.log(this.state.selectedFile);
//     return (
//       <div>
//         <input type="file" name="file" onChange={this.handleFileInput} />
//         <label htmlFor="contained-button-file">
//           <button variant="contained" color="primary" component="span" onClick={this.handlePost}>
//             Upload
//           </button>
//         </label>
//         {images}
//         <img src="http://naverlsdkfjl./lasdkfjwe=.jpg"/>
//         {/* <button type="button" onClick={this.handlePost} /> */}
//       </div>
//     );
//   }
// }

// export default App;
