import React, { useEffect } from "react";
import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4
import "./Main.css";
import gift from "./pictures/gifts.png";
import volunteer2 from "./pictures/volunteer2.png";
import { useNavigate } from "react-router";
import ButtonGradient from "../../components/form/ButtonGradient";
import { Box, Grid } from "@mui/material";

type Props = {
  className?: string;
};
// TODO: Fix Home UI
const Home = (props: Props) => {
  // const { className } = props;
  const { classes } = useStyles();
  const navigate = useNavigate();

  const HandleToMissions = () => {
    navigate("/mission");
    // navigate("/MissionDetails");
  };

  const handleToContact = () => {
    navigate("/contact");
    // createMissions();
  };

  useEffect(() => {}, []);
  return (
    <main className={classes.root}>
      <div className="main--container">
        <main>
          <Box className="main--intro">
            <div className="blurBg"></div>
            <Grid container justifyContent={"center"} rowSpacing={12}>
              <Grid container className="main--assist">
                <Grid
                  item
                  md={12}
                  textAlign="center"
                  className="main--chungtoii"
                >
                  Chúng tôi là Green Env
                </Grid>
                <Grid item md={12} className="main--mission">
                  Nhiệm vụ của chúng tôi
                </Grid>
                <Grid item md={7} xs={12} className="main--la">
                  là truyền cảm hứng, thúc đẩy và trao quyền cho các cá nhân 
                  tham gia vào những phong trào môi trường tại Việt Nam.
                </Grid>
              </Grid>

              <Grid container justifyContent={"center"}>
                <Box paddingTop={"40px"}>
                  <ButtonGradient
                    btnText="Tham gia cùng chúng tôi"
                    onClick={handleToContact}
                    style={{ paddingLeft: 16, paddingRight: 16 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <div className="main--challenge">
            <h3 className="main--challenge_header">Thách thức</h3>
            <div className="main--challenge_content">
            Trong bối cảnh đô thị hóa và tình trạng bùng nổ dân số 
            gia tăng thì rác thải đã trở thành một vấn đề môi trường ngày càng nghiêm trọng. Rác thải 
            gây ra rất nhiều vấn đề, như: mùi khó chịu, vi trùng gây bệnh, điều kiện sinh hoạt mất vệ sinh. Rác 
            thải không được thu gom, tồn đọng, lâu ngày sẽ sinh ra các tác nhân tác động đến sức khoẻ con người.
            </div>
          </div>

          <div className="main--dump">
            <div className="blurBg"></div>
            <Grid container justifyContent={"center"} rowSpacing={12}>
              <Grid item md={6} xs={12} className="main--mission">
                <div className="main--problem">
                  <h1 className="main--problem1">Vấn nạn ô nhiễm môi trường</h1>
                  <div className="main--problem2">
                    Cần hành động ngay vì một Việt Nam xanh và sạch
                  </div>
                </div>
              </Grid>
              <Grid item md={6} xs={12} className="main--mission">
                <div className="main--pics">
                  <div className="main--second_pic"></div>
                  <div className="main--third_pic"></div>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="main--doiqua">
            <div className="main--gift">
              <div className="main--left_text">
                <div className="main--upper">
                  <h3 className="main--tichdiem">Tích điểm đổi quà</h3>
                  <div className="main--banseduoc">
                    Bạn sẽ được thưởng điểm tương ứng với mỗi nhiệm vụ thành
                    công. Quy đổi điểm thưởng để đổi lấy các phần quà hấp dẫn.
                  </div>
                </div>
                <Box>
                  <ButtonGradient
                    btnText="Đến nhiệm vụ"
                    onClick={HandleToMissions}
                    style={{ paddingLeft: 48, paddingRight: 48 }}
                  />
                </Box>
              </div>
              <div className="main--right_text">
                <img src={gift} alt="fck"></img>
              </div>
            </div>
          </div>
          <div className="main--tiepcan">
            <h3 className="main--cachchungta">Cách chúng ta tiếp cận</h3>
            <div className="main--chungtoi">
            Chúng tôi tạo ra các cơ hội cho những ai tham gia có thể đóng góp tích cực vào việc bảo vệ môi
            trường, phát huy giá trị của bản thân và tạo ra môi trường sạch đẹp.
            </div>
            <img src={volunteer2} alt="fuck" className="main--volunteer2"></img>
            <h3 className="main--hayhanhdong">
            “HÃY HÀNH ĐỘNG cùng nhau, chúng ta có thể cứu môi trường”
            </h3>
          </div>
        </main>
      </div>
    </main>
  );
};

export default Home;

const useStyles = makeStyles()((theme) => ({
  root: {
    // "&:hover": {
    //   border: "4px solid black",
    // },
    // [theme.breakpoints.up("md")]: {
    //   border: "10px solid cyan",
    // },
    // color: "red",
  },

  test: {
    [theme.breakpoints.down("md")]: {
      color: "black",
      paddingTop: "50px",
    },
    color: "red",
    paddingTop: "100px",
  },
}));
