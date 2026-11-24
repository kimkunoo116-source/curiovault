# QUY CHUẨN XUẤT BẢN NỘI DUNG & TỰ ĐỘNG HÓA CURIOVAULT (SOP)

> **Mục đích:** Quy định bộ tiêu chuẩn bắt buộc cho toàn bộ bài viết và video trên hệ sinh thái **CurioVault (Astro + Cloudflare Pages + YouTube Shorts / Reels)**. Đảm bảo 100% bài viết đạt chuẩn **E-E-A-T, SEO/GEO**, đồng bộ với video YouTube gốc, giữ chân độc giả trên 2 phút và tối ưu hóa doanh thu Google AdSense thị trường Mỹ ($25 – $40 RPM).

---

## I. NGUYÊN TẮC BẤT DI BẤT DỊCH (CORE PRINCIPLES)

1. **Đồng bộ 100% với Video (Zero Hallucination):**
   - Mọi bài viết bắt buộc phải bắt đầu bằng việc trích xuất phụ đề (transcript) của video YouTube bằng `python -m yt_dlp`.
   - Mọi số liệu, mốc thời gian, nhân vật, phát ngôn và địa danh phải chính xác tuyệt đối theo video gốc. Không suy đoán hay bịa đặt chi tiết.
2. **An toàn pháp lý 100% (Family-Friendly & Clean):**
   - Tuyệt đối KHÔNG đăng tải nội dung án mạng rùng rợn, bạo lực máu me, pháp luật kiện tụng.
   - Tập trung 100% vào: Khoa học kỳ thú, lịch sử bất ngờ, bí ẩn thiên nhiên, văn minh cổ đại và những câu chuyện truyền cảm hứng.
3. **Chuẩn mực E-E-A-T Quốc tế:**
   - Dẫn chứng nghiên cứu từ các tổ chức khoa học danh tiếng (NASA, National Geographic, Nature, các trường đại học lớn).
   - Có trang tác giả, ban biên tập và chính sách Fair Use minh bạch ở chân trang.

---

## II. KIẾN TRÚC 7 KHỐI CỦA MỘT BÀI VIẾT HOÀN HẢO

Mỗi bài viết mới lưu tại `src/content/blog/<slug>.md` phải tuân theo thứ tự 7 khối sau:

### Khối 1: Hook Title & Hộp Thực Thể (Quick Facts / TL;DR)
* **Tiêu đề (H1):** Dưới 65 ký tự, chứa Focus Keyword + tính từ kích thích trí tò mò (e.g. *The 2,000-Year-Old Analog Computer That Baffled Modern Science*).
* **Hộp Quick Facts:** Liệt kê 3–4 điểm then chốt nhất ngay dưới mô tả (Năm phát hiện, Địa điểm, Niên đại, Ý nghĩa khoa học) để Google AI Overviews và Perplexity trích dẫn thẳng lên vị trí Top 1.

### Khối 2: Full-Bleed YouTube Cinema Player
* Nhúng trình phát video YouTube 16:9 sắc nét ở ngay đầu bài viết.
* Có thông báo mời người đọc bấm phát video và xem các chi tiết phân tích bên dưới.

### Khối 3: Bối cảnh & Khởi nguồn Câu chuyện (The Origin)
* Kể lại câu chuyện mở đầu đầy kịch tính, tạo cảm giác người đọc đang được theo chân các nhà thám hiểm/khoa học khám phá hiện tượng.

### Khối 4: Giải mã Chi tiết & Bằng chứng Cốt lõi (The Deep Dive)
* Bám sát các mốc diễn biến của video gốc.
* Sử dụng các đoạn văn ngắn (2–3 câu), giãn dòng thoáng 1.85, căn lề trái tự nhiên (`text-align: left`).

### Khối 5: Phân tích Chuyên gia & Trích dẫn Nguồn gốc (E-E-A-T)
* Dẫn lời các nhà nghiên cứu, nhà sử học, tài liệu giải mã hoặc hình ảnh quét 3D/X-quang.

### Khối 6: Những Bí ẩn Còn Sót lại (The Unanswered)
* Nêu bật những câu hỏi mà khoa học hiện đại vẫn chưa giải thích được trọn vẹn, kích thích độc giả thảo luận.

### Khối 7: Câu hỏi thường gặp FAQ (Chuẩn Schema.org)
* Soạn 3–4 câu hỏi Q&A trực diện giải đáp các thắc mắc người Mỹ tìm kiếm nhiều nhất trên Google.

---

## III. QUY TRÌNH TỰ ĐỘNG CẮT VIDEO SHORTS (45s CLIFFHANGER)

Khi người dùng gửi link video yêu cầu cắt Reels, AI tự động thực hiện:

1. **Phân tích transcript:** Tìm 1–3 mốc thời gian gay cấn nhất (< 50 giây).
2. **Công thức 45 giây:**
   * **00s – 03s:** Câu Hook gây sốc + phụ đề to giữa màn hình.
   * **04s – 38s:** Diễn biến câu chuyện kỳ thú.
   * **39s – 42s:** **CẮT NGAY LẬP TỨC** khi chuẩn bị hé lộ lời giải (Cliffhanger).
   * **43s – 45s:** Hiện lời kêu gọi xem chi tiết ở Pinned Comment.
3. **Lách bản quyền 3 lớp:**
   * Khung hình dọc 9:16 (1080x1920), zoom nhẹ 106%.
   * Tăng tốc độ phát lên 1.03x.
4. **Xuất file:** Lưu trực tiếp file `.mp4` vào `C:\Users\DELL\Desktop\Reels US\`.

---

## IV. BÀN GIAO GÓI ĐĂNG BÀI (DELIVERY PACKAGE)

Sau khi xử lý xong, AI cung cấp ngay:
1. File video `.mp4` đã render trên Desktop.
2. Tiêu đề tiếng Anh giật gân (Hook Title).
3. Caption mô tả có gắn hashtag xu hướng (`#history #mysteries #ancientdiscoveries #sciencefacts`).
4. **Mẫu Pinned Comment có link dẫn về đúng bài viết trên website**.
