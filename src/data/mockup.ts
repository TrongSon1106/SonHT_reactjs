import { collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { firebaseDB, firebaseStorage } from "../setup/firebase";
import { IMission } from "../types/mission";

// const missionSample: IMission[] = [
//   {
//     title: "Khảo sát môi trường",
//     address:
//       "Khu vực công viên thành phố, P. Phước Long, Quận 5, Thành phố Hồ Chí Minh",
//     content: `Tổ chức buổi khảo sát ở một bãi biển về mức độ ô nhiễm của nguồn nước hiện nay, có thể vừa tuyên truyền cho mọi người biết vừa thêm 1 số trò chơi và đổi rác lấy cây xanh , giống như mục tích điểm đổi quà. Ví dụ như 5kg rác đc 1 cây xanh.`,
//     mission: "Thu Gom và Xử Lý Rác Thải",
//     phoneNumber: "0123 456 789",
//     startDate: new Date("January 14, 2024 03:24:00"),
//     endDate: new Date("January 17, 2024 03:24:00"),
//     score: 50,
//     participants: 10,
//   },
// ];

// export const uploadImage = async (uri: string) => {
//   // It won't upload image if image is not change
//   const blob: any = await new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       resolve(xhr.response);
//     };
//     xhr.onerror = function (e) {
//       console.log(e);
//       reject(new TypeError("Network request failed"));
//     };
//     xhr.responseType = "blob";
//     xhr.open("GET", uri, true);
//     xhr.send(null);
//   });
//   const avatarName = "test";
//   const fileRef = ref(firebaseStorage, avatarName);
//   await uploadBytes(fileRef, blob);

//   // We're done with the blob, close and release it
//   blob.close();

//   const avatarUrl = await getDownloadURL(fileRef);
//   return { avatarName, avatarUrl };
// };

// export const createMissions = async () => {
//   const missionUpload = missionSample.map(async (mission) => {
//     const missionDocRef = doc(collection(firebaseDB, "missions"));
//     await setDoc(missionDocRef, {
//       ...mission,
//       id: missionDocRef.id,
//     });
//   });
//   await Promise.all(missionUpload);
// };



export const missions: IMission[] = [
  {
    id: '1',
    title: 'Bảo vệ nguồn nước',
    address: 'số 135 Nam Kỳ Khởi Nghĩa, phường Bến Thành, quận 1, thành phố Hồ Chí Minh',
    content: 'Lập 1 nhóm bạn làm vệ sinh 1 nguồn nước/ khu vực ven biển. Trong quá trình thực hiện, chúng ta sẽ kiểm tra và dọn dẹp mọi rác thải trên bờ biển, đồng thời tìm hiểu về những biện pháp bảo vệ môi trường nước hiện nay.',
    startDate: '20/04/2024',
    endDate: '24/06/2024',
    mission: 'Dọn dẹp vệ sinh và tạo ra nhận thức về bảo vệ nguồn nước',
    participants: 10,
    phoneNumber: '023221223',
    score: 200,
    img: 'https://congtyxulynuoc.com/wp-content/uploads/2017/04/o-nhiem-nuoc-tp.hcm_.jpg',
  },
  {
    id: '2',
    title: 'Kiểm tra chất lượng nước',
    address: 'Sông ABC, Huyện Củ Chi, thành phố Hồ Chí Minh',
    content: 'Thu thập mẫu nước từ sông để kiểm tra chất lượng. Chúng ta sẽ sử dụng các phương pháp phân tích hóa học và vi sinh để đánh giá chất lượng nước, đồng thời ghi nhận kết quả và đề xuất các biện pháp cải thiện nếu cần.',
    startDate: '25/05/2024',
    endDate: '30/05/2024',
    mission: 'Kiểm tra chất lượng nước và ghi nhận kết quả',
    participants: 8,
    phoneNumber: '0987654321',
    score: 180,
    img: 'https://climatejusticeonline.org/wp-content/uploads/2019/12/hau-qua-cua-o-nhiem-moi-truong-nuoc.jpg',
  },
  {
    id: '3',
    title: 'Sử dụng hợp lý nguồn nước',
    address: 'Khu dân cư XYZ, Quận 10, thành phố Hồ Chí Minh',
    content: 'Tổ chức buổi tập huấn về cách sử dụng hợp lý nguồn nước cho cộng đồng. Trong buổi tập huấn, chúng ta sẽ trao đổi và chia sẻ kinh nghiệm về cách sử dụng nước một cách tiết kiệm và hiệu quả, từ đó giúp giảm thiểu lãng phí và bảo vệ nguồn nước.',
    startDate: '10/06/2024',
    endDate: '12/06/2024',
    mission: 'Tạo ra nhận thức về việc sử dụng hợp lý nguồn nước',
    participants: 20,
    phoneNumber: '0123456789',
    score: 200,
    img: 'https://bloganchoi.com/wp-content/uploads/2023/05/bai-van-nghi-luan-ve-o-nhiem-moi-truong-1.jpg'
  },
  {
    id: '4',
    title: 'Xây dựng hồ chứa nước',
    address: 'Xã ABC, Huyện DEF, thành phố Hồ Chí Minh',
    content: 'Xây dựng hồ chứa nước để phục vụ cho nhu cầu sinh hoạt và sản xuất. Quá trình xây dựng sẽ được tiến hành với sự hợp tác của cộng đồng, từ việc định vị địa điểm, thiết kế, đến việc thi công và vận hành hồ chứa nước.',
    startDate: '01/07/2024',
    endDate: '30/09/2024',
    mission: 'Cải thiện nguồn nước cho cộng đồng',
    participants: 30,
    phoneNumber: '0987654321',
    score: 250,
    img: 'https://vannuoccongnghiep.vn/wp-content/uploads/2023/03/O-nhiem-moi-truong-nuoc.webp'
  },
  {
    id: '5',
    title: 'Rà soát hệ thống thoát nước',
    address: 'Khu vực phường ABC, Quận XYZ, thành phố Hồ Chí Minh',
    content: 'Tiến hành rà soát và bảo dưỡng hệ thống thoát nước để đảm bảo không gian môi trường sạch sẽ và tránh nguy cơ ngập lụt trong mùa mưa.',
    startDate: '15/08/2024',
    endDate: '20/08/2024',
    mission: 'Kiểm tra, rà soát và bảo dưỡng hệ thống thoát nước',
    participants: 12,
    phoneNumber: '0365987412',
    score: 220,
    img: 'https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/pulse-nhip-song-khoe/song-khoe/2020/suc-khoe-the-chat/bai-viet-bao-ve-nguon-nuoc-tu-nhung-hanh-dong-nho-moi-ngay-desktop-1366x560.jpg'
  },
  {
    id: '6',
    title: 'Trồng cây bảo vệ nguồn nước',
    address: 'Khu vực kênh ABC, Quận DEF, thành phố Hồ Chí Minh',
    content: 'Tổ chức hoạt động trồng cây xanh dọc bờ kênh nhằm bảo vệ nguồn nước và tạo ra không gian xanh cho cộng đồng.',
    startDate: '05/09/2024',
    endDate: '10/09/2024',
    mission: 'Trồng cây bảo vệ nguồn nước',
    participants: 15,
    phoneNumber: '0912345678',
    score: 190,
    img: 'https://vcdn-vnexpress.vnecdn.net/2022/09/05/Screen-Shot-2022-09-05-at-9-35-5330-8234-1662345432.png'
  }
]