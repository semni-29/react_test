const multer = require("multer");
const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const ps = require("python-shell");

const inputPath =
  "C:/Users/Jihun/Desktop/face_aging/face_aging_back/my_python/test/input/";
const outputPath =
  "C:/Users/Jihun/Desktop/face_aging/face_aging_back/my_python/test/output/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, inputPath); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

let uploadLocal = multer({
  dest: inputPath,
  storage,
});
// const uploadS3 = multer({
//   storage: multerS3({
//     s3,
//     bucket: "bigdata-cgan",
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     acl: "public-read",
//     key: function (req, file, cb) {
//       cb(null, new Date().valueOf() + file.originalname);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
// });
/// 실제 사용할 함수
// router.post("/api_v1/cgan", (req, res) => {
router.post("/api_v1/cgan", uploadLocal.single("img"), (req, res) => {
  try {
    const targetAge = req.body.targetAge;
    const fileName = req.file.originalname;
    let options = {
      mode: "text",
      pythonPath: "C:/Users/Jihun/anaconda3/envs/face_regression/python",
      pythonOptions: ["-u"], // get print results in real-time
      scriptPath: "C:/Users/Jihun/Desktop/face_aging/face_aging_back/my_python",
      args: [targetAge, fileName],
    };
    ps.PythonShell.run("test.py", options, function (err, results) {
      if (err) throw err;
      // console.log("results: %j", results);
      path = inputPath + req.file.originalname;
      res.status(200).json({ result: path });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
