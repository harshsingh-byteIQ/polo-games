import { useEffect, useState } from "react";
import styles from "./topbar.module.scss"; // Import your custom styles
import { useNavigate } from "react-router-dom";
import { Drawer, Row } from "antd";
import SideBar from "../SideBar";
import { MenuOutlined } from "@ant-design/icons";

const TopBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const menuItems = [
    { key: "home", label: "Home" },
    { key: "in-play", label: "In Play", badge: 8 },
    { key: "cricket", label: "Cricket", badge: 5 },
    { key: "soccer", label: "Soccer", badge: 2 },
    { key: "tennis", label: "Tennis", badge: 2 },
    { key: "horse-racing", label: "Horse Racing", badge: 1 },
  ];

  const handleTabClick = (key: any) => {
    setActiveTab(key);
    navigate(`/${key}`);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [openModal, setModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWindowWidth(currentWidth);
      if (currentWidth < 768) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setModalOpen(!openModal);
  };

  return (
    <div className={styles.topbar}>
      {!isSidebarVisible && (
        <div
          key={9}
          className={`${styles.topbar_item}`}
          style={{ backgroundColor: "red" }}
          onClick={() => setModalOpen(!openModal)}
        >
          <MenuOutlined></MenuOutlined>
        </div>
      )}
      {menuItems.map(({ key, label, badge }) => (
        <div
          key={key}
          className={`${styles.topbar_item} ${
            activeTab === key ? styles.active : ""
          }`}
          onClick={() => handleTabClick(key)}
        >
          {label}
          {badge && <span className={styles.topbar_badge}>{badge}</span>}
        </div>
      ))}
      <Drawer
        title={null} // Removes title space
        placement="left"
        onClose={toggleDrawer}
        visible={openModal}
        width={200} // Match this with your sidebar width
        bodyStyle={{
          padding: 0, // Remove extra padding
          background: "#fff", // Optional: Match the sidebar background color
        }}
        headerStyle={{
          display: "none", // Remove the default drawer header
        }}
      >
        <>
          <Row style={{ width: "100%", height:"10vh" , backgroundColor: "black" }}></Row>
          <SideBar></SideBar>
        </>
      </Drawer>
    </div>
  );
};

export default TopBar;
