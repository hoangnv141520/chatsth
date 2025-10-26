# 💬 ChatSTH — Realtime Chat Application

ChatSTH là ứng dụng chat thời gian thực được phát triển bằng **ReactJS** và **NodeJS**, sử dụng **Socket.io** để xử lý giao tiếp hai chiều giữa client và server. Ứng dụng cho phép người dùng nhắn tin, quản lý tài khoản và theo dõi trạng thái online/offline trong thời gian thực.

---

## 🚀 Tính năng chính

* 🔐 Đăng ký, đăng nhập người dùng
* 💬 Gửi và nhận tin nhắn thời gian thực
* 🟢 Hiển thị trạng thái online/offline
* 🗂️ Quản lý phòng chat và danh sách người dùng
* 📱 Giao diện hiện đại, thân thiện và tối ưu hiệu năng (React + Vite)

---

## 🛠️ Công nghệ sử dụng

### Frontend

* ReactJS (Vite)
* TailwindCSS (nếu có)
* Axios (gọi API)
* Socket.io-client

### Backend

* NodeJS / ExpressJS
* Socket.io
* MongoDB (Mongoose)
* JWT (xác thực người dùng)
* bcrypt (mã hoá mật khẩu)
* dotenv (quản lý biến môi trường)

---

## ⚙️ Cài đặt và chạy dự án

### 1️⃣ Clone repository

```bash
git clone https://github.com/hoangnv141520/chatsth.git
cd chatsth
```

### 2️⃣ Cài đặt dependencies

```bash
# Cài đặt backend
cd backend
npm install

# Cài đặt frontend
cd ../frontend
npm install
```

### 3️⃣ Cấu hình biến môi trường

Tạo file `.env` trong thư mục `backend` với nội dung ví dụ:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/chatsth
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Chạy ứng dụng

```bash
# Chạy backend
cd backend
npm run start

# Chạy frontend
cd ../frontend
npm run dev
```

Sau đó mở trình duyệt tại [http://localhost:5173](http://localhost:5173) để truy cập giao diện người dùng.

---

## 📂 Cấu trúc thư mục

```
chatsth/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md\

