import React from "react";
import "./About.css";
import img1 from "./img/environment-volunteer-concept 1.png";
import img2 from "./img/environment-volunteer-teamwork-concept 1.png";
import img3 from "./img/group-volunteers-collecting-garbage 3.png";
import { Box, Grid, Stack } from "@mui/material";

const aboutData = {
  group1: {
    title: "Green Env là ai?",
    content: `Green Env là tổ chức phi lợi nhuận hoạt động tại thành phố Hồ Chí Minh, hướng đến giải quyết các vấn đề môi trường cấp bách tại Việt Nam.
Green Env được thành lập năm 2022 với sứ mệnh khuyến khích, thúc đẩy việc giữ gìn và bảo tồn môi trường, truyền thông sáng tạo nhằm thay đổi hành vi và truyền cảm hứng để cộng đồng Việt Nam cùng hành động.`,
  },
  group2: [img1, img2, img3],
  group3: {
    title: "Chiến lược của Green Env",
    content: `Chúng tôi tạo ra các hoạt động chung tay làm sạch môi trường. Lan tỏa tinh thần, trách nhiệm và kêu gọi những hành động thiết thực từ mỗi cá nhân, gia đình, xã hội và cộng đồng để xây dựng môi trường sống của chúng ta xanh, sạch, đẹp, bền vững`,
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
