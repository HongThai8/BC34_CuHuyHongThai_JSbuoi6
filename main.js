// <!-- Bài 1 : Tìm số nguyên dương nhỏ nhất -->

document.getElementById('btnKQ').onclick = function() {
  //input
  var sum = 0;
  var n = 0;
  //process
  while(sum < 10000) {
      n++;
      sum = sum + n;
  }
  //output
  document.getElementById('showInfo').innerHTML = 'Số nguyên dương nhỏ nhất: ' + n;
}

// <!-- Bài 2 : Tính tổng -->
document.getElementById('btnSum').onclick = function() {
  //input
  var x = document.getElementById('xNumber').value * 1;
  var n = document.getElementById('nNumber').value * 1;
  //process
  var sum = 0;
  for(i = 1; i <= n; i++) {
      sum += Math.pow(x, i);  
  }
  //output
  document.getElementById('total').innerHTML = "Tổng là: " + sum;
}

// <!-- Bài 3 : Tính giai thừa -->
document.getElementById('btnGT').onclick = function() {
  //input
  var number = document.getElementById('number').value * 1;
  var n = 1;
  //process
  if(number > 1) {
      for(i = 1; i <= number; i++) {
          n = n * i; 
      }
  }else {
      alert ("Nhập số lớn hơn 0!");
      return;
  }
  //output    
  document.getElementById('ketQua').innerHTML = "Giai thừa : "  + n;
}

// <!-- Bài 4 : Tạo thẻ div -->
document.getElementById('btnDiv').onclick = function() {
  //input
  var content = "";
  //process   
  for(i = 1; i <= 10; i++) {
      if(i % 2 === 0) {
          content += "<div class='bg-danger'><div class='ms-3'> Div chắn </div></div>";
      }else {
          content += "<div class='bg-info'><div class='ms-3'> Div lẻ </div></div>";
      }
  }
  //output
  document.getElementById('theDiv').innerHTML = content;
  document.getElementById('theDiv').style.color = "White";
}