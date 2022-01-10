Xin chào thầy, thông tin của nhóm em bao gồm:  
Nguyễn Như Long. MSSV 1952179  
Nguyễn Quốc Quân: MSSV 19520871.  
Vì lí do là database truyện quá lớn khoảng 5gb trở lên, khiến cho việc up truyện lên host online khá khó khăn và tốn chi phí nhiều nến nhóm em quyết định làm host nodejs local.  
Để chạy được project thầy có thể tải thư mục trong 2 branch là client và server.  
  
git init  
git add .  
git commit -m "first commit"  
git branch -M client  
git remote add origin git@github.com:nguyennhulonggithub/demo.git  
git pull origin client  
  
Trên đây là các câu lệnh để clone client  .
  
git init  
git add .  
git commit -m "first commit"  
git branch -M server  
git remote add origin git@github.com:nguyennhulonggithub/demo.git  
git pull origin server  
  
Tương tự là câu lệnh để clone server, 2 thư mục client server là khác nhau, thầy có thể bố trí như sau:   
![image](https://user-images.githubusercontent.com/80632602/148716509-9cbecc56-96b6-440f-bc6a-8d7954705cac.png)  

Đồng thời nhập câu lệnh trong terminal là npm install để cài package và npm start để chạy server   
![image](https://user-images.githubusercontent.com/80632602/148716022-6241be80-f61f-4924-933b-a6b8f8aca41b.png)   
Đối với Client thì thầy cũng nhập câu lệnh npm install để cài package và expo start để chạy client sau đó ấn nút d trên bàn phím để mở giao diện expo  
![image](https://user-images.githubusercontent.com/80632602/148716182-c41e9285-c115-4d8a-99c9-f5a18d3b03d2.png)  
Sau đó thầy nhấn Run on Android emulator, đồng thời trước đó thầy đã bật sẵn máy ảo  
Đối với database thì tụi em đã úp online nên không cần config  
Việc kết nối tới server từ máy ảo có thể bị lỗi. Nên thầy có thể thay thông tin server ip vào đây như hình để kết nối server (với ipaddress là ipconfig ipv4m lưu ý thêm :3000 để kết nối tới local ):  
![image](https://user-images.githubusercontent.com/80632602/148716312-46f3ce5a-1d56-4f68-ac8d-3aba79e2db39.png)
![image](https://user-images.githubusercontent.com/80632602/148716336-a663bbf7-bd51-48fc-b614-84c74bf00db9.png)  
Thầy thông cảm vì local server nên gặp khá nhiều bất tiện   

Em xin cảm ơn thầy ạ
