import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Drawer, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SideBar from "../SideBar";
import styles from "./topbar.module.scss";

const TopBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();


  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth >= 768
  );

  const [openModal, setModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setIsSidebarVisible(currentWidth >= 768); 
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle active tab based on location
  useEffect(() => {
    setActiveTab(location.pathname.substring(1));
  }, [location]);

  const handleTabClick = useCallback((key : any) => {
    setActiveTab(key);
    navigate(`/${key}`);
    if (window.innerWidth < 768) {
      setModalOpen(false); // Close drawer on mobile
    }
  }, [navigate]);

  const toggleDrawer = useCallback(() => {
    setModalOpen((prev) => !prev);
  }, []);

  const menuItems = [
    { key: "home", label: "Home" },
    { key: "in-play", label: "In Play", badge: 8 },
    { key: "cricket", label: "Cricket", badge: 5 },
    { key: "soccer", label: "Soccer", badge: 2 },
    { key: "tennis", label: "Tennis", badge: 2 },
    { key: "horse-racing", label: "Horse Racing", badge: 1 },
  ];

  const renderMenuItems = (items : any) =>
    items.map(({ key, label, badge } : any) => (
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
    ));

  return (
    <div className={styles.topbar}>
      {!isSidebarVisible && (
        <div
          className={styles.topbar_item}
          style={{ backgroundColor: "red" }}
          onClick={toggleDrawer}
          aria-label="Toggle Menu"
        >
          <MenuOutlined />
        </div>
      )}
      {renderMenuItems(menuItems)}
      <Drawer
        placement="left"
        onClose={toggleDrawer}
        open={openModal}
        width={200}
        bodyStyle={{
          padding: 0,
          background: "#fff",
        }}
        headerStyle={{
          display: "none",
        }}
      >
        <Row style={{ width: "100%", height: "10vh", backgroundColor: "black" }} />
        <SideBar />
      </Drawer>
    </div>
  );
};

export default TopBar;
