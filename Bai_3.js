let choice;

do {
  choice = +prompt(`
--- MENU HÌNH HỌC ---
1. Diện tích hình tròn
2. Chu vi hình tròn
3. Diện tích hình chữ nhật
4. Chu vi hình chữ nhật
0. Thoát
`);

  switch (choice) {
    case 1: {
      let r = +prompt("Nhập bán kính hình tròn:");
      let s = 3.14 * r * r;
      alert("Diện tích hình tròn là: " + s);
      break;
    }

    case 2: {
      let r = +prompt("Nhập bán kính hình tròn:");
      let p = 2 * 3.14 * r;
      alert("Chu vi hình tròn là: " + p);
      break;
    }

    case 3: {
      let a = +prompt("Nhập chiều dài:");
      let b = +prompt("Nhập chiều rộng:");
      let s = a * b;
      alert("Diện tích hình chữ nhật là: " + s);
      break;
    }

    case 4: {
      let a = +prompt("Nhập chiều dài:");
      let b = +prompt("Nhập chiều rộng:");
      let p = 2 * (a + b);
      alert("Chu vi hình chữ nhật là: " + p);
      break;
    }

    case 0:
      alert("Đã thoát chương trình");
      break;

    default:
      alert("Lựa chọn không hợp lệ, nhập lại");
  }
} while (choice !== 0);
