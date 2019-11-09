// 封装一个kits 对象
var kits = {};
// 随机整数
kits.randomInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};
//rgb随机颜色
kits.randomColor = function() {
  var r = kits.randomInt(0, 255);
  var g = kits.randomInt(0, 255);
  var b = kits.randomInt(0, 255);
  return (color = "rgb(" + r + "," + g + "," + b + ")");
};
// 随机十六进制颜色
kits.randomHexColor = function() {
  var arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ];
  var color = ["#"];
  for (var i = 0; i < 6; i++) {
    var r = kits.randomInt(0, 16);
    color.push(arr[r]);
  }
  return color.join("");
};
//随机十六进制颜色
kits.randomHex1Color = function() {
  var color = ["#"];
  for (var i = 0; i < 6; i++) {
    var r = kits.randomInt(0, 16).toString(16);
    color.push(r);
  }
  return color.join("");
};
//数组去重
kits.removeRepeat = function(arr) {
  var o = {};
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i];
    if (o[index]) {
      o[index]++;
    } else {
      o[index] = 1;
    }
  }
  //遍历对象 把元素存入新数组
  var newArr = [];
  for (var k in o) {
    newArr.push(k);
  }
  return newArr;
};
//计算两个时间的间隔  
kits.getInterval(star, end) {
  var day, hour, minute, second, interval;
  interval = end - star;
  interval = interval / 1000;
  day = Math.round(interval / 60 / 60 / 24);
  hour = Math.round(interval / 60 / 60 % 24);
  minute = Math.round(interval / 60 % 60);
  second = Math.round(interval % 60);
  day < 10 ? '0' + day : day;
  hour < 10 ? '0' + hour : hour;
  minute < 10 ? '0' + minute : minute;
  second < 10 ? '0' + second : second;
  return day + '-' + hour + '-' + minute + '-' + second;
 
    
}