/*
- b1: đọc - hiểu bài toán -> xác định được input, output 
- b2: input: x(usd)
       output: vnd
       thuật toán: vnd = x * 23000
- b3: Vẽ lưu đồ cho bài toán:
- b4: code theo lưu đồ
ví dụ: nhập dữ liệu dùng hàm promt('')
xuất dữ liệu: alert('')
*/

let usd = +prompt('Nhap so tien can doi sang VND: ');
vnd = usd *  23000;
alert(usd + ' USD = ' + vnd + 'VND');