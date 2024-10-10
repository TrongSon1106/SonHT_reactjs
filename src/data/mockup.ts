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
    title: 'Phân loại rác',
    address: 'Đường Nam Kỳ Khởi Nghĩa, phường Bến Thành, quận 1, thành phố Hồ Chí Minh',
    content: 'Tách riêng rác hữu cơ, tái chế và không tái chế để xử lý phù hợp.',
    startDate: '20/09/2024',
    endDate: '24/11/2024',
    mission: 'Tạo ra nhận thức về phân loại rác thải, dễ xử lý',
    participants: 10,
    phoneNumber: '012332123',
    score: 200,
    img: 'https://eakar.daklak.gov.vn/Upload/Images/rac-thai-sinh-hoat-co-may-loai.jpg',
  },
  {
    id: '2',
    title: 'Chiến dịch tái sử dụng',
    address: 'Địa bàn thành phố Hồ Chí Minh',
    content: 'Tìm cách sử dụng lại các vật dụng cũ theo cách mới, tránh bỏ đi, tăng lượng rác thải.',
    startDate: '25/10/2024',
    endDate: '30/12/2024',
    mission: 'Tái sử dụng vài vật dụng trong nhà, kêt hợp quay phim, ghi nhận kết quả',
    participants: 8,
    phoneNumber: '0987654321',
    score: 180,
    img: 'https://img.freepik.com/premium-vector/reuse-recycle-sign-isolated-white-background-vector-illustration_76844-3535.jpg?w=360',
  },
  {
    id: '3',
    title: 'Đốt rác an toàn',
    address: 'Các bãi rác lớn ở thành phố Hồ Chí Minh',
    content: ' Áp dụng cho rác không thể tái chế, với kiểm soát khí thải, giảm thiểu tối đa ô nhiễm không khí, đất và nguồn nước.',
    startDate: '10/06/2024',
    endDate: '12/06/2024',
    mission: 'Giảm thiệt hại môi trường do tiêu hủy rác thải gây ra',
    participants: 20,
    phoneNumber: '011123444',
    score: 200,
    img: 'https://xulymoitruongsaosang.com.vn/admin/tintuc/dot_344_anhtintuc.png'
  },
  {
    id: '4',
    title: 'Giảm sử dụng đồ nhựa dùng một lần',
    address: 'Thành phố Hồ Chí Minh',
    content: 'Thay thế bằng các sản phẩm tái sử dụng, sử dụng đồ nhựa dùng 1 lần cũng không tốt cho sức khỏe. Nếu có thể, sử dụng dụng cụ ăn uống tại nhà bằng inox hay đồ có thể tái sử dụng.',
    startDate: '01/07/2024',
    endDate: '30/09/2024',
    mission: 'Cải thiện nguồn rác xả ra từ các đô dùng nhựa dùng 1 lần',
    participants: 30,
    phoneNumber: '0983425421',
    score: 250,
    img: 'https://provietnam.com.vn/wp-content/uploads/2023/08/plastic-jpg.webp'
  },
  {
    id: '5',
    title: 'Xử lý rác thải điện tử',
    address: 'Khu vực phường ABC, Quận XYZ, thành phố Hồ Chí Minh',
    content: 'Tái chế hoặc xử lý đúng cách các thiết bị điện tử cũ, vì các thiết bị điện tử chứa rất nhiều chất gây ô nhiễm môi trường (VD: pin điện thoại hay máy tính chứa chất khó phân hủy)',
    startDate: '15/11/2024',
    endDate: '20/11/2024',
    mission: 'Giảm tối đa thiệt hại cho các chất độc trong thiết bị điện tử gây ra',
    participants: 12,
    phoneNumber: '0365987412',
    score: 220,
    img: 'https://consosukien.vn/pic/News/Nam_2021/ra-c-tha-i-die-n-tu-mo-i-lo-nga-i-toa-n-ca-u.jpg'
  },
  {
    id: '6',
    title: 'Giáo dục cộng đồng',
    address: 'Các trường học trên địa bàn thành phố Hồ Chí Minh',
    content: 'Nâng cao nhận thức về quản lý rác thải và môi trường, phổ cập giáo dục cho các bậc tiểu học, trung học về môi trường.',
    startDate: '05/09/2024',
    endDate: '10/10/2024',
    mission: 'Nâng cao ý thức cộng đồng về rác thải, ảnh hưởng của rác thải lên môi trường',
    participants: 15,
    phoneNumber: '0912345678',
    score: 190,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1C7CUTlvDNMBknOXwsTCVhlX3H5c1CZARQ&s'
  }
]