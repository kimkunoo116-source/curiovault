## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build


## Quy chuẩn Bắt buộc: Tự động Viết bài & Sản xuất Nội dung Hệ thống Website Vệ tinh (CurioVault & DeepCosmos Standard)

Từ nay trở đi, BẤT KỲ KHI NÀO tạo bài viết mới hoặc tối ưu bài viết cũ cho **CurioVault** (`curiovault.site`) và **DeepCosmos** (`deepcosmos.pages.dev`), AI BẮT BUỘC tuân thủ 100% các tiêu chuẩn kỹ thuật bất di bất dịch sau:

### 1. Video YouTube THẬT 100% (Tuyệt đối CẤM Video Rác / Rickroll / Placeholder)
- **Nguồn video**: Bắt buộc tìm và nhúng đúng video tài liệu chính thức từ các kênh uy tín toàn cầu liên quan trực tiếp đến đề tài (BBC, National Geographic, Nature, NASA, ESA, SciShow, Clickspring...).
- **Đồng bộ nội dung (Zero Hallucination)**: Video nói về cái gì thì bài viết viết về cái đó. Tuyệt đối không được dùng mã video demo giữ chỗ (`dQw4w9WgXcQ` / Rick Astley).
- **Thông số chính xác**: Khai báo đúng `youtubeId` thật và nhãn thời lượng thật trong frontmatter (ví dụ: `videoDuration: "14:20 Documentary"`).

### 2. Chuẩn xác 10 Hình ảnh Minh họa Thực tế (In-Article Visuals Standard)
Mỗi bài viết BẮT BUỘC có chuẩn xác **10 hình ảnh khoa học / lịch sử thực tế** được chèn xen kẽ hợp lý trong thân bài Markdown theo cấu trúc phóng sự:
- **Ảnh 1 (Hero / Visual Hook)**: Đặt ngay sau đoạn mở đầu, toàn cảnh hiện vật hoặc thiên thể với độ nét cao nhất.
- **Ảnh 2 & 3 (Bối cảnh phát hiện & Lịch sử)**: Ảnh địa điểm trục vớt, tàu đắm, ảnh chụp viễn vọng mặt đất hoặc bản đồ tọa độ.
- **Ảnh 4 & 5 (Cận cảnh & X-quang CT 3D)**: Ảnh chụp vi mô bề mặt, ảnh cắt lớp X-quang CT 3D hiển thị cấu trúc bên trong.
- **Ảnh 6 & 7 (Sơ đồ kỹ thuật & Mô phỏng cơ khí/quang phổ)**: Bản vẽ đồ họa 3D phân rã từng bộ phận, sơ đồ chuyển động hoặc biểu đồ phổ.
- **Ảnh 8 & 9 (Mô hình phục dựng thực tế)**: Ảnh mô hình phục chế hoàn chỉnh của các trường đại học / bảo tàng công nghệ.
- **Ảnh 10 (Hiện vật tại bảo tàng)**: Ảnh hiện vật đang được lưu trữ, trưng bày tại viện bảo tàng quốc tế.

**Quy cách kỹ thuật ảnh**:
- Định dạng **WebP siêu nhẹ** (dung lượng mỗi ảnh **< 50 KB**, nén chất lượng 75–80).
- Căn giữa tuyệt đối (`mx-auto`), bo góc hiện đại `rounded-xl`, viền mỏng `border border-slate-800`, bóng đổ `shadow-2xl`.
- Bắt buộc có thẻ chú thích học thuật chuẩn:
  `<figcaption class="text-xs text-slate-400 mt-2.5">Figure X: [Mô tả chi tiết] (Image credit: [Nguồn viện bảo tàng/tổ chức])</figcaption>`.
- Gắn `loading="lazy"` cho tất cả các ảnh từ ảnh số 2 trở đi để tối ưu tốc độ mở trang dưới 1 giây.

### 3. Kiến trúc 7 Khối Chuẩn E-E-A-T & GEO (Google AI Overviews Ready)
Mỗi bài viết mới tạo trong `src/content/blog/<slug>.md` bắt buộc tuân theo cấu trúc 7 khối:
- **Khối 1: Hook Title & Hộp Quick Facts:** Tiêu đề cuốn hút + Hộp thực thể tóm tắt 4 điểm then chốt (Năm phát hiện, Niên đại, Công năng, Đột phá cơ khí/thiên văn) để Google AI Overviews dễ trích xuất.
- **Khối 2: Full-Bleed YouTube Cinema Player:** Khung phát video YouTube tài liệu chuẩn 16:9 responsive.
- **Khối 3: Bối cảnh & Khởi nguồn:** Kể lại câu chuyện mở đầu lôi cuốn, đưa độc giả vào bối cảnh lịch sử / phát hiện ban đầu.
- **Khối 4: Giải mã Bằng chứng & Chi tiết Khoa học:** Phân tích từng bước các khía cạnh kỳ thú, số liệu đo đạc thực nghiệm.
- **Khối 5: Dữ liệu Chuyên gia & Trích dẫn Nguồn gốc (E-E-A-T):** Dẫn chiếu các công bố khoa học, bảo tàng, viện nghiên cứu (NASA, Nature, Đại học khảo cổ, bảo tàng...) tạo uy tín tuyệt đối cho Google AdSense.
- **Khối 6: Bí ẩn còn sót lại & Câu hỏi gợi mở:** Đặt câu hỏi kích thích độc giả suy ngẫm và bình luận.
- **Khối 7: Câu hỏi thường gặp FAQ Schema:** 3–4 câu hỏi Q&A chuẩn giải đáp trực diện các thắc mắc người Mỹ hay tìm kiếm nhất.

### 4. Trải nghiệm Đọc, Ngôn ngữ & AdSense Ready
- **Độ dài bài viết:** Từ 1.200 – 1.800 từ chuẩn 100% tiếng Anh Mỹ (US English).
- **Trình bày di động:** Căn lề trái tự nhiên (`text-align: left`), cỡ chữ 18px, giãn dòng thoáng 1.85. Tuyệt đối không để lọt ký tự LaTeX thô (`$...$`) ra giao diện.
- **Vị trí AdSense:** Chừa sẵn 3 vị trí quảng cáo bao quanh nội dung: (1) Dưới video, (2) Giữa bài viết, (3) Cuối bài viết.

### 5. Quy trình Kiểm thử & Triển khai Tự động (Auto-Deploy)
Mọi bài viết sau khi soạn thảo xong bắt buộc:
1. Chạy `npm run build` kiểm tra 0 lỗi biên dịch.
2. Commit và push trực tiếp lên GitHub repository của website tương ứng.
3. Kiểm tra phản hồi HTTP 200 OK trên tên miền chính thức của website.
