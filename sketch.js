let data  = {
  "frame": 1,
  "bodypoints": [
    {
      "part": "nose",
      "x": 289.86,
      "y": 85.95
    },
    {
      "part": "leftEye",
      "x": 301.99,
      "y": 76.62
    },
    {
      "part": "rightEye",
      "x": 282.85,
      "y": 76.35
    },
    {
      "part": "leftEar",
      "x": 319.02,
      "y": 85.41
    },
    {
      "part": "rightEar",
      "x": 275.87,
      "y": 83.96
    },
    {
      "part": "leftShoulder",
      "x": 352.14,
      "y": 133.08
    },
    {
      "part": "rightShoulder",
      "x": 274.13,
      "y": 146.28
    },
    {
      "part": "leftElbow",
      "x": 428.34,
      "y": 158.04
    },
    {
      "part": "rightElbow",
      "x": 237.69,
      "y": 225.04
    },
    {
      "part": "leftWrist",
      "x": 483.51,
      "y": 179.27
    },
    {
      "part": "rightWrist",
      "x": 203.8,
      "y": 262.47
    },
    {
      "part": "leftHip",
      "x": 363.53,
      "y": 268.47
    },
    {
      "part": "rightHip",
      "x": 310.59,
      "y": 277.97
    },
    {
      "part": "leftKnee",
      "x": 364.42,
      "y": 366.52
    },
    {
      "part": "rightKnee",
      "x": 303.66,
      "y": 360.57
    },
    {
      "part": "leftAnkle",
      "x": 359.53,
      "y": 446.74
    },
    {
      "part": "rightAnkle",
      "x": 286.73,
      "y": 447.13
    }
  ]
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

let bodypoints = {};
for (let bodypoint of data.bodypoints) {
  let partname = bodypoint.part;
  bodypoints[partname] = bodypoint;
}
// by Professor Steele

function draw() {
  background(200);
  // let connections = [
  //   {first: "leftShoulder", second: "leftElbow"},
  //   {first: "leftElbow", second: "leftWrist"},
  //   {first: "rightShoulder", second: "rightElbow"},
  //   {first: "rightElbow", second: "rightWrist"},
  //   {first: "leftShoulder",second:"leftHip"},
  //   {frist: "rightShoulder",second:"rightHip"},
  //   {first: "leftHip",second:"rightHip"},
  //   {first: "leftHip",second:"leftKnee"},
  //   {first: "leftKnee",second:"leftAnkle"},
  //   {first: "rightHip",second:"rightKnee"},
  //   {first: "rightKnee",second:"rightAnkle"}
  // ]
  // by professor Steele
   for (let m = 5; m<17; m++){
    //  let a = connections[m].first.x;
    //  let b = connecitons[m].first.y;
    //  let c = connecitons[m].second.x;
    //  let d = connections[m].second.y;
    line(bodypoints.rightShoulder.x,bodypoints.rightShoulder.y,bodypoints.rightElbow.x,bodypoints.rightElbow.y); 
    line(bodypoints.leftShoulder.x,bodypoints.leftShoulder.y,bodypoints.leftElbow.x,bodypoints.leftElbow.y); 
    line(bodypoints.leftElbow.x,bodypoints.leftElbow.y,bodypoints.leftWrist.x,bodypoints.leftWrist.y); 
    line(bodypoints.rightElbow.x,bodypoints.rightElbow.y,bodypoints.rightWrist.x,bodypoints.rightWrist.y); 
    line(bodypoints.leftShoulder.x,bodypoints.leftShoulder.y,bodypoints.rightShoulder.x,bodypoints.rightShoulder.y); 
    line(bodypoints.leftShoulder.x,bodypoints.leftShoulder.y,bodypoints.leftHip.x,bodypoints.leftHip.y); 
    line(bodypoints.rightShoulder.x,bodypoints.rightShoulder.y,bodypoints.rightHip.x,bodypoints.rightHip.y); 
    line(bodypoints.rightHip.x,bodypoints.rightHip.y,bodypoints.leftHip.x,bodypoints.leftHip.y); 
    line(bodypoints.rightHip.x,bodypoints.rightHip.y,bodypoints.rightKnee.x,bodypoints.rightKnee.y); 
    line(bodypoints.rightKnee.x,bodypoints.rightKnee.y,bodypoints.rightAnkle.x,bodypoints.rightAnkle.y); 
    line(bodypoints.leftKnee.x,bodypoints.leftKnee.y,bodypoints.leftAnkle.x,bodypoints.leftAnkle.y); 
    line(bodypoints.leftKnee.x,bodypoints.leftKnee.y,bodypoints.leftHip.x,bodypoints.leftHip.y); 

  }

   for(let i = 0; i<17; i++){
    let x = data.bodypoints[i].x;
    let y = data.bodypoints[i].y;
    fill('black'); 
    circle(x, y, 5);
   }
}


