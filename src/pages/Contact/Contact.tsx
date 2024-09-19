import React from "react";
import JoinInvitation from "./components/JoinInvitation";
import CommonQuestions from "./components/CommonQuestions";
import CollaborationInvitation from "./components/CollaborationInvitation";
import { makeStyles } from "tss-react/mui";

export const contactData = {
  group1: {
    title: "Sẵn sàng chung tay",
    content:
      "Chúng tôi luôn tìm kiếm những cá nhân tin vào sứ mệnh vì một tương lai sạch hơn và xanh hơn. Nếu bạn thấy hứng thú tham gia cùng chúng tôi hoặc có câu hỏi nào, xin vui lòng liên hệ.",
    gmail: "greenenv@gmail.com",
    phone: "(+84) 921 365 478"
  },
  group2: {
    title:
      "Trước khi gửi tin nhắn cho chúng tôi đây là những điều bạn nên biết",
    ques: [
      {
        ques: "Sứ mệnh của Green Env là gì?",
        ans: "Thúc đẩy phong trào bảo vệ môi trường. Nâng cao nhận thức, trách nhiệm của mỗi cá nhân; tuyên truyền, chia sẻ thông điệp với bạn bè và gia đình; góp sức chung tay cùng với cộng đồng mang lại vẻ đẹp vốn có của môi trường.",
      },
      {
        ques: "Green Env hoạt động trên lĩnh vực nào?",
        ans: "Green Env sẽ hoạt động chủ yếu đến lĩnh vực liên quan về môi trường cạn (dọn rác,...)",
      },
      {
        ques: "Làm thế nào để bạn có thể tham gia?",
        ans: "Để tham gia các hoạt động. 1. Đăng kí tài khoản 2. Chọn nhiệm vụ bạn muốn tham gia trong phần nhiệm vụ 3. Đến đúng thời gian, địa điểm trên nhiệm vụ và cùng mọi người thực hiện",
      },
      {
        ques: "Tại sao Green Env cần sự đóng góp từ bạn?",
        ans: 'Để thúc đẩy phong trào bảo vệ môi trường, chúng tôi cần những sự góp sức của các bạn. Dù chỉ là một sự đóng góp hay hành động nhỏ nhưng dần dần nó sẽ trở nên lớn lao và có thể mở rộng phạm vi phong trào, thông điệp sẽ dễ dàng đến mọi người. "Đoàn kết là sức mạnh" vì vậy chúng tôi cần những hỗ trợ và đóng góp từ mỗi cá nhân các bạn.',
      },
      {
        ques: "Tiền đóng góp sẽ được Green Env sử dụng thế nào?",
        ans: `Tiền đóng góp cho nhóm sẽ được dùng cho các hoạt động thiện nguyện khác về sau. Mua các vật dụng cần thiết cho nhiệm vụ hoặc thức ăn cho những thành viên tham gia. Đóng góp vào các tổ chức bảo vệ môi trường lớn hơn hay và các tổ chức từ thiện.`,
      },
      {
        ques: "Tôi có thể đóng góp cho Green Env bằng cách nào?",
        ans: "Để đóng góp cho Green Env bạn hãy tích cực tham gia các hoạt động bảo vệ môi trường, truyền tải thông điệp, kêu gọi bạn bè, người thân cùng tham gia. ",
      },
      {
        ques: "Tiền đóng góp sẽ được Green Env sử dụng thế nào?",
        ans: "Green Env sẽ dùng tiền quyên góp của các bạn để bảo trì web hoặc mua thêm các phần thưởng cho tình nguyện viên tham gia nhiệm vụ, tạo niềm vui để các bạn tích cực tham gia.",
      },
    ],
  },
  group3: {
    title: "Bạn có một dự án?",
    content: `Sử dụng biểu mẫu để liên hệ và đóng góp với chúng tôi. Chúng tôi sẽ liên hệ với bạn khi có thể
    Ngoài ra, hãy liên lạc bằng cách sử dụng thông tin bên dưới.`,
    gmail: "greenenv@gmail.com",
    phone: "(+84) 921 365 478",
  },
};

const Contact = () => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <JoinInvitation />
      <CommonQuestions />
      <CollaborationInvitation />
    </main>
  );
};

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 144,
    margin: "144px 0",
  },
}));

export default Contact;
