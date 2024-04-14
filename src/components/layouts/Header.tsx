import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { RootState, useAppSelector } from "../../setup/stores";
import ProfileHeader from "../common/ProfileHeader";
import ButtonGradient from "../form/ButtonGradient";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logoGreen.png";
import "./Header.css";

interface IHeaderTab {
  title: string;
  name: string;
  path: string;
}
const headerTabList: IHeaderTab[] = [
  {
    title: "intro",
    name: "Giới thiệu",
    path: "/about",
  },
  {
    title: "mission",
    name: "Nhiệm vụ",
    path: "/mission",
  },
  {
    title: "activity",
    name: "Hành động",
    path: "/activity",
  },
  {
    title: "contact",
    name: "Liên hệ",
    path: "/contact",
  },
];

function Header() {
  const user = useAppSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();
  const [headerPicked, setHeaderPicked] = React.useState<string>("");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavigate = (option: IHeaderTab) => {
    setHeaderPicked(option.title);
    setAnchorElNav(null);
    navigate(option.path);
  };

  const handleLogoClick = () => {
    setHeaderPicked("/");
    navigate("/");
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSignInScreen = () => {
    navigate("/login");
  };

  return (
    <AppBar position="fixed" style={{ background: "#fff" }}>
      <Container style={{ padding: "0 5%" }}>
        <Toolbar
          disableGutters
          sx={{ display: { xs: "flex", justifyContent: "space-between" } }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headerTabList.map((page) => (
                <MenuItem key={page.title} onClick={() => handleNavigate(page)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* LOGO */}
          <div className="header--logo_container">
            <img
              className="header--logo"
              style={{ background: 'white' }}
              src={logo}
              alt="Blue Wave logo"
              onClick={handleLogoClick}
            />
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {headerTabList.map((option) => (
              <Button
                key={option.title}
                onClick={() => handleNavigate(option)}
                sx={{ my: 2, color: "#000", display: "block" }}
              >
                {option.name}
                {option.title === headerPicked && (
                  <div className="header--option_chosen"></div>
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <ProfileHeader />
            ) : (
              <div>
                <ButtonGradient
                  btnText="Đăng nhập"
                  onClick={handleSignInScreen}
                  style={{ padding: "8px 16px" }}
                />
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
