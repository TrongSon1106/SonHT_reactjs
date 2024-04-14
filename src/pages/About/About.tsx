import React from "react";
import "./About.css";
import img1 from "./img/sea1.png";
import img2 from "./img/sea2.png";
import img3 from "./img/sea3.png";
import { Box, Grid, Stack } from "@mui/material";

const aboutData = {
  group1: {
    title: "Chúng tôi là ai?",
    content: `Blue Wave là tổ chức thiện nguyện, hướng đến giải quyết các vấn đề môi trường, đặc biệt là môi trường nước.
    Blue Wave được thành lập với sứ mệnh lan tỏa, khuyến khích, thúc đẩy việc giữ gìn và bảo tồn môi trường, truyền thông
     sáng tạo nhằm tạo ra sự đổi mới và truyền cảm hứng để mọi người có thể cùng nhau chung tay góp sức.`,
  },
  group2: [img1, img2, img3],
  group3: {
    title: "Chiến lược của chúng tôi",
    content: `Chúng tôi tạo ra các hoạt động chung tay làm sạch môi trương. Chia sẻ những thông điệp đến với bạn bè, gia đình
    và cộng đồng để tạo ra sự nhận thức và hành động tích cực. Truyền tải các thông điệp, cảm hứng, và thúc đẩy sự thay đổi trong cộng đồng, chung tay góp sức tạo nên một môi trường xanh-sạch-đẹp và nói không với "RÁC THẢI".`,
  },
};

const About = () => {
  return (
    <Box className="about">
      <Grid className="about--text_container">
        <Stack className="about--who" spacing={6}>
          <div className="about--headline">{aboutData.group1.title}</div>
          <div className="about--text">{aboutData.group1.content}</div>
        </Stack>
      </Grid>
      <Stack
        className="about--images"
        flexDirection={"row"}
        alignItems={"center"}
        gap={2}
      >
        {aboutData.group2.map((img, idx) => (
          <Box flex={1} key={`${img}-${idx}`}>
            <img
              src={img}
              alt="person collecting litter"
              style={{ width: "100%" }}
            />
          </Box>
        ))}
      </Stack>
      <Grid className="about--text_container">
        <Stack className="about--what" spacing={8}>
          <div className="about--headline">{aboutData.group3.title}</div>
          <div className="about--text">{aboutData.group3.content}</div>
        </Stack>
      </Grid>
    </Box>
  );
};

export default About;
