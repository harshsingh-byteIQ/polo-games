import { Badge, Row, Col } from "antd";
import { PlayCircleOutlined, TagOutlined } from "@ant-design/icons";
import styles from "../tabs.module.scss"
const cricketData = [
    {
      key: "1",
      match: "India v Australia",
      league: "International Cricket",
      status: "live",
      date: "24 Nov",
      time: "7:00 PM",
      odds: [
        { key: "1", value: "1.75", extra: "3.4", color: "#add8e6" },
        { key: "X", value: "2.05", extra: "1.5", color: "#ffc0cb" },
        { key: "2", value: "2.45", extra: "3.4", color: "#add8e6" },
      ],
    },
    {
      key: "2",
      match: "England v South Africa",
      league: "ODI Championship",
      status: "upcoming",
      date: "26 Nov",
      time: "3:30 PM",
      odds: [
        { key: "1", value: "1.85", extra: "2.3", color: "#add8e6" },
        { key: "X", value: "2.25", extra: "4.5", color: "#ffc0cb" },
        { key: "2", value: "2.75", extra: "1.3", color: "#add8e6" },
      ],
    },
  ];
  

const CricketSection = () => {
  return (
    <div style={{ margin: "16px" }}>
      <div
        className={styles.tableWrapper}
      >
        <PlayCircleOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
        <h3 style={{ margin: 0 }}>Cricket</h3>
      </div>

      <div
        className={styles.table}
      >
        {cricketData.map((item) => (
          <div
            key={item.key}
            className={styles.tableHeader}
          >
            <div
              style={{
                flex: 2,
                marginRight: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems:"center"
              }}
            >
              <div>
                <div style={{ fontWeight: "bold" }}>{item.match}</div>
                <div style={{ color: "#888", fontSize: "12px" }}>
                  {item.league}
                </div>
              </div>
              <div>
                {item.status === "live" && (
                  <Badge status="success" style={{ marginRight: 8 }} />
                )}
                {item.date} - {item.time}
              </div>
            </div>

            <div className={styles.tagIcon}>
              <TagOutlined style={{ fontSize: "24px" }} />
            </div>

            <Row gutter={8} style={{ flex: 3 }}>
              {item.odds.map((odd) => (
                <>
                  <Col
                    span={4}
                    key={odd.key}
                    style={{
                      background: odd.color,
                      padding: "8px",
                      border: "1px solid white",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>{odd.value}</div>
                    <div style={{ fontSize: "10px", color: "#666" }}>
                      {odd.extra}
                    </div>
                  </Col>
                  <Col
                    span={4}
                    key={odd.key}
                    style={{
                      background: odd.color,
                      padding: "8px",
                      border: "1px solid white",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>{odd.value}</div>
                    <div style={{ fontSize: "10px", color: "#666" }}>
                      {odd.extra}
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketSection;
