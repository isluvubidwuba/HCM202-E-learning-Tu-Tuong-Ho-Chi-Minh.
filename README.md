# Ho Chi Minh Ideology Learning Platform

Nền tảng học tập số về tư tưởng Hồ Chí Minh kết hợp nội dung đa phương tiện, quiz tương tác và trợ lý AI. Ứng dụng được xây dựng bằng React + TypeScript trên Vite, tối ưu cho trải nghiệm desktop và di động với giao diện động, hỗ trợ đa ngôn ngữ Việt/Anh và chế độ sáng/tối.

## Tính năng nổi bật
- **Trang chủ điện ảnh** với nền slideshow, hiệu ứng hạt và thống kê động giúp thu hút người học ngay từ đầu.
- **Danh mục chương & bài viết** đọc dữ liệu JSON, cho phép tìm kiếm/lọc, gắn thẻ, và điều hướng sâu tới từng bài viết.
- **Trình đọc bài viết** hỗ trợ React Markdown, highlight nội dung, thanh theo dõi tiến độ, và nút đọc to bằng Web Speech API.
- **Quiz đa chương** với chế độ chọn bài, chấm điểm tức thời, diễn giải đáp án song ngữ và lưu tiến trình người học.
- **Trợ lý học tập AI** gọi Groq Chat Completion API (LLaMA 3.1 8B) để trả lời câu hỏi, hỗ trợ copy câu trả lời và thống kê token.
- **Biểu mẫu phản hồi** lưu dữ liệu vào Supabase, cung cấp quick suggestions, xác thực đầu vào và trạng thái gửi rõ ràng.
- **Trang Giới thiệu** tổng hợp thông tin hệ thống, thành viên nhóm, QR code, cùng các chỉ số phiên bản tự động từ `utils/systemInfo.ts`.
- **Đa ngôn ngữ & chủ đề**: chuyển Việt/Anh, ghi nhớ cấu hình trong `localStorage`, và bật/tắt dark mode qua `ThemeContext`.

## Kiến trúc & Công nghệ
- **Vite 5 + React 18 + TypeScript**: khởi chạy nhanh, hỗ trợ HMR và kiểm tra kiểu tĩnh (`tsconfig.app.json`).
- **Tailwind CSS** kết hợp với `globals.css` giúp dựng giao diện responsive và dễ mở rộng.
- **Framer Motion** điều khiển animation ở cấp độ trang, hero, section và các component như carousel.
- **React Router 7** quản lý điều hướng SPA với các route: trang chủ, chương, bài viết, quiz, chat, feedback, about.
- **i18next + browser languagedetector** lưu ngôn ngữ ưa thích vào `localStorage` và đồng bộ `document.documentElement.lang`.
- **Supabase** xử lý backend-as-a-service cho phản hồi người dùng (chỉ khởi tạo client khi có đủ biến môi trường).
- **Groq Chat API** (qua `src/lib/aiClient.ts`) để gọi mô hình ngôn ngữ; fallback an toàn khi thiếu API key.
- **React Markdown + remark-gfm** hiển thị nội dung học liệu giàu định dạng; `markdownToPlainText` phục vụ text-to-speech.

## Cấu trúc thư mục
```text
project/
├─ public/              # Ảnh, QR code, cấu hình SPA (_redirects)
├─ src/
│  ├─ components/       # Header, Footer, Hero, Sections, tiện ích như TextToSpeech
│  ├─ contexts/         # ThemeContext quản lý dark/light mode
│  ├─ data/             # JSON tĩnh cho chapters, articles, quizzes
│  ├─ i18n/             # Cấu hình và từ điển dịch song ngữ
│  ├─ lib/              # Kết nối Supabase, Groq API client
│  ├─ pages/            # Trang chính của ứng dụng (Home, Chapters, Article, Quiz, Chat, Feedback, About)
│  ├─ utils/            # Tiện ích chuyển đổi markdown, thu thập thông tin hệ thống
│  ├─ App.tsx           # Định tuyến và bố cục tổng thể
│  └─ main.tsx          # Điểm vào ứng dụng React
├─ package.json
├─ README.md
└─ ...
```

## Thiết lập môi trường
1. Cài đặt **Node.js 18 LTS** (hoặc mới hơn) và npm.
2. Cài đặt phụ thuộc: `npm install`.
3. Tạo file `.env` ở thư mục gốc (tham khảo mẫu bên dưới) trước khi chạy dự án.

### Biến môi trường
```bash
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_GROQ_API_KEY=your-groq-api-key # tùy chọn: chat AI sẽ bị vô hiệu hóa nếu để trống
```

- Không commit trực tiếp khóa thật lên kho mã.
- Nếu chỉ muốn chạy offline, có thể bỏ `VITE_GROQ_API_KEY` (chat sẽ hiển thị cảnh báo và bỏ qua lời gọi API).

## Lệnh npm sẵn có
- `npm run dev` – khởi chạy server phát triển Vite (mặc định tại `http://localhost:5173`).
- `npm run build` – build sản phẩm tĩnh vào thư mục `dist/`.
- `npm run preview` – chạy thử bản build để kiểm tra trước khi triển khai.
- `npm run lint` – kiểm tra chuẩn hóa mã với ESLint.
- `npm run typecheck` – kiểm tra type TypeScript không kết hợp build.

## Tích hợp dịch vụ ngoài

### Supabase (lưu phản hồi)
1. Tạo dự án Supabase mới, bật chế độ xác thực email hoặc anonymous tùy nhu cầu.
2. Trong bảng `feedback`, tạo schema với các cột:
   | Cột        | Kiểu dữ liệu | Bắt buộc | Ghi chú                         |
   |------------|--------------|----------|---------------------------------|
   | `id`       | `uuid`       | ✔ (PK)   | `default uuid_generate_v4()`    |
   | `created_at` | `timestamp` | ✔        | `default now()`                 |
   | `rating`   | `smallint`   | ✔        | Giá trị 1–5                     |
   | `feedback` | `text`       | ✔        | Nội dung phản hồi               |
   | `email`    | `text`       | ✖        | Tùy chọn của người dùng         |
   | `language` | `text`       | ✔        | `vi` hoặc `en`                  |
3. Lấy `Project URL` và `anon public key` đưa vào `.env`.
4. Kiểm tra lại bằng cách gửi phản hồi trong trang `/feedback`.

### Groq Chat Completion API
1. Tạo API key tại https://console.groq.com/.
2. Gán khóa vào `VITE_GROQ_API_KEY`.
3. Mặc định sử dụng mô hình `llama-3.1-8b-instant`; có thể thay đổi trong `src/pages/Chat.tsx` và `src/lib/aiClient.ts`.
4. Nếu cần streaming hoặc mô hình khác, mở rộng hàm `callGroqChat` (đã chú thích TODO).

## Dữ liệu & nội dung
- **Chương trình học**: cập nhật qua `src/data/chapters.json` và `src/data/articles.json`. Mỗi bài viết chứa cả nội dung tiếng Việt (`content`) và tiếng Anh (`contentEn`).
- **Quiz**: cấu hình trong `src/data/quizzes.json`, phân nhóm theo `chapterId`.
- **Tài liệu nội bộ**: 
  - `AI_TRAINING_SECTION_IMPLEMENTATION.md` – mô tả luồng triển khai phần AI.
  - `TEAM_CAROUSEL_UPDATE.md` – ghi chú cập nhật carousel thành viên.
- **QR/Asset**: `public/image.png` được tái sử dụng ở trang About (QR code hoặc ảnh team).

## Đa ngôn ngữ & trải nghiệm người dùng
- Ngôn ngữ mặc định là tiếng Việt, được phát hiện từ `localStorage`, ngôn ngữ trình duyệt hoặc thẻ `html`.
- `Header` cho phép chuyển đổi nhanh và lưu lựa chọn (`localStorage.language`).
- `ThemeContext` đồng bộ dark mode với `localStorage.theme` và `prefers-color-scheme`.
- `TextToSpeech` dùng Web Speech API: trình duyệt cần hỗ trợ voice `vi-VN`/`en-US`.

## Triển khai
- Build SPA: `npm run build`.
- File `public/_redirects` (Netlify-style) bảo đảm tất cả route chạy về `index.html`. Giữ file này nếu triển khai trên Netlify, Vercel (sử dụng rewrite tương đương) hoặc bất kỳ CDN SPA-friendly nào.
- Có thể host Supabase & Groq từ bất kỳ môi trường nào miễn script phía client truy cập được.

## Kiểm thử & bảo trì
- Chạy `npm run lint` và `npm run typecheck` trước khi commit để tránh lỗi cú pháp/type.
- Đảm bảo Supabase rule bảo vệ bảng `feedback` (ví dụ sẽ chỉ cho phép insert ẩn danh).
- Kiểm tra tốc độ mạng trước khi demo tính năng chat AI (phụ thuộc Groq API).
- Theo dõi `console.warn` khi thiếu biến môi trường để kịp thời cấu hình lại.

## Định hướng phát triển đề xuất
- Bổ sung unit test cho logic quiz và formatter Markdown → plain text.
- Tách nội dung bài viết sang CMS/Supabase để quản trị trực tuyến.
- Hỗ trợ lưu lịch sử chat & quiz theo tài khoản người học.
- Triển khai hỗ trợ PWA/offline cho nội dung cốt lõi.

## Nhóm thực hiện
Chi tiết từng thành viên, vai trò và đóng góp được trình bày ở trang `/about` (xem `src/pages/About.tsx`). Dữ liệu có thể chỉnh sửa trực tiếp trong component hoặc tái cấu trúc thành file JSON riêng nếu cần quản trị.

## Liên hệ & hỗ trợ
- Email hỗ trợ: `support@e-learning-philosophy.com`
- Điện thoại: `(84) 123-456-789`
- Facebook: **Ho Chi Minh Ideology Vietnam**

---

Nếu bạn có thêm câu hỏi hoặc cần hỗ trợ triển khai, hãy mở issue hoặc liên hệ qua các kênh trên. Chúc bạn học tốt!
