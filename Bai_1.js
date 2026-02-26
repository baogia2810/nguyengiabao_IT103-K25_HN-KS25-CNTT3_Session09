let choice;

do {
  choice = +prompt(`
--- MENU TÍNH TOÁN ---
1. Cộng hai số
2. Trừ hai số
3. Nhân hai số
4. Chia hai số
0. Thoát
`);

  switch (choice) {
    case 1: {
      let a = +prompt("Nhập số thứ nhất:");
      let b = +prompt("Nhập số thứ hai:");
      alert("Kết quả: " + (a + b));
      break;
    }

    case 2: {
      let a = +prompt("Nhập số thứ nhất:");
      let b = +prompt("Nhập số thứ hai:");
      alert("Kết quả: " + (a - b));
      break;
    }

    case 3: {
      let a = +prompt("Nhập số thứ nhất:");
      let b = +prompt("Nhập số thứ hai:");
      alert("Kết quả: " + a * b);
      break;
    }

    case 4: {
      let a = +prompt("Nhập số thứ nhất:");
      let b = +prompt("Nhập số thứ hai:");
      if (b === 0) {
        alert("Không thể chia cho 0");
      } else {
        alert("Kết quả: " + a / b);
      }
      break;
    }

    case 0:
      alert("Đã thoát chương trình");
      break;

    default:
      alert("Lựa chọn không hợp lệ");
  }
} while (choice !== 0);
