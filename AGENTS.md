## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build


## Quy chuẩn Bắt buộc: Tự động Viết bài & Sản xuất Reels CurioVault (CurioVault Editorial Standard)

BẤT CỨ KHI NÀO người dùng gửi link video YouTube hoặc yêu cầu viết bài / cắt video cho CurioVault, AI BẮT BUỘC tự động tuân thủ 100% quy chuẩn 5 trụ cột sau:

### 1. Đồng bộ 100% Nội dung Video (Zero Hallucination)
- Bắt buộc dùng `python -m yt_dlp` tải toàn bộ transcript / phụ đề tiếng Anh của video.
- Mọi tình tiết, mốc thời gian, tên nhà nghiên cứu, địa danh và số liệu trong bài viết phải phản chiếu chính xác dữ liệu từ video gốc, tuyệt đối không bịa đặt số liệu hay chi tiết sai lệch.

### 2. Kiến trúc 7 Khối Chuẩn E-E-A-T & GEO (Google AI Overviews / Perplexity Ready)
Mỗi bài viết mới tạo trong `src/content/blog/<slug>.md` bắt buộc tuân theo cấu trúc 7 khối:
- **Khối 1: Hook Title & Hộp Quick Facts:** Tiêu đề cuốn hút (chứa từ khóa + tính từ kích thích tò mò) + Hộp thực thể tóm tắt 3–4 điểm then chốt (Năm phát hiện, Địa điểm, Ý nghĩa, Niên đại) để Google AI Overviews dễ trích xuất.
- **Khối 2: Full-Bleed YouTube Cinema Player:** Nhúng trực tiếp video YouTube gốc ở đầu bài với `youtubeId`, có nút play và nhãn thời lượng (`videoDuration`).
- **Khối 3: Bối cảnh & Khởi nguồn:** Kể lại câu chuyện mở đầu lôi cuốn, đưa độc giả vào bối cảnh lịch sử / phát hiện ban đầu.
- **Khối 4: Giải mã Bằng chứng & Chi tiết Khoa học:** Phân tích từng bước các khía cạnh kỳ thú nhất được đề cập trong video.
- **Khối 5: Dữ liệu Chuyên gia & Trích dẫn Nguồn gốc (E-E-A-T):** Dẫn chiếu các công bố khoa học, bảo tàng, viện nghiên cứu (NASA, viện khảo cổ, tạp chí Nature, đại học...) tạo điểm tin cậy tuyệt đối cho AdSense.
- **Khối 6: Bí ẩn còn sót lại & Câu hỏi gợi mở:** Đặt câu hỏi kích thích độc giả suy ngẫm và bình luận.
- **Khối 7: Câu hỏi thường gặp FAQ:** 3–4 câu hỏi Q&A chuẩn giải đáp trực diện các thắc mắc người Mỹ hay tìm kiếm nhất.

### 3. Tối ưu Trải nghiệm Đọc & Giữ chân (Time on Page > 2 phút)
- **Độ dài bài viết:** Từ 1.200 – 1.800 từ chuẩn 100% tiếng Anh Mỹ (US English).
- **Trình bày di động:** Chia đoạn ngắn (2–3 câu/đoạn), căn lề trái tự nhiên (`text-align: left`), cỡ chữ 18px, giãn dòng thoáng 1.85.
- **Vị trí AdSense:** Chừa sẵn 3 vị trí quảng cáo bao quanh nội dung: (1) Dưới video, (2) Giữa bài viết, (3) Cuối bài viết (Multiplex).

### 4. Tự động Cắt Video Shorts 45s (Reels / Shorts Automation)
Mỗi khi có yêu cầu cắt video, AI tự động:
- Lọc 1–3 đoạn cao trào nhất (< 50 giây) từ transcript: 3s Hook gây sốc $\rightarrow$ 35s diễn biến $\rightarrow$ 40s Cliffhanger (cắt ngay lúc gay cấn) $\rightarrow$ 43s Kêu gọi xem link ở Pinned Comment.
- Dùng `ffmpeg` crop khung dọc 9:16 (1080x1920), phóng to 106%, tăng tốc độ 1.03x để lách bản quyền.
- Xuất file `.mp4` hoàn chỉnh ra màn hình Desktop: `C:\Users\DELL\Desktop\Reels US\`.

### 5. Gói Bàn giao Hoàn chỉnh (Publishing Delivery Package)
Sau khi hoàn thành, AI tự động cung cấp:
- Đường dẫn file video trên Desktop.
- Tiêu đề video Shorts bằng tiếng Anh.
- Đoạn Caption kèm hashtag xu hướng.
- **Mẫu bình luận ghim (Pinned Comment)** đã gắn sẵn đường link trỏ về bài viết tương ứng vừa tạo trên web.
