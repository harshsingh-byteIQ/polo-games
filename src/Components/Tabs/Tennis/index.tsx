import { Badge, Row, Col } from "antd";
import { PlayCircleOutlined, TagOutlined } from "@ant-design/icons";
import styles from "../tabs.module.scss"
const tennisData = [
    {
      key: "1",
      match: "Novak Djokovic v Carlos Alcaraz",
      league: "Grand Slam Finals",
      status: "live",
      date: "24 Nov",
      time: "9:00 PM",
      odds: [
        { key: "1", value: "1.55", extra: "1.4", color: "#add8e6" },
        { key: "2", value: "2.25", extra: "3.5", color: "#ffc0cb" },
        { key: "3", value: "3.25", extra: "5.6", color: "#ffc0cb" },
      ],
    },
    {
      key: "2",
      match: "Serena Williams v Naomi Osaka",
      league: "WTA Championship",
      status: "upcoming",
      date: "27 Nov",
      time: "5:30 PM",
      odds: [
        { key: "1", value: "1.85", extra: "1.0", color: "#add8e6" },
        { key: "2", value: "2.05", extra: "1.4", color: "#ffc0cb" },
        { key: "3", value: "2.05", extra: "2.4", color: "#ffc0cb" },
      ],
    },
    {
        key: "3",
        match: "Serena Williams v Naomi Osaka",
        league: "WTA Championship",
        status: "upcoming",
        date: "27 Nov",
        time: "5:30 PM",
        odds: [
          { key: "1", value: "1.85", extra: "Returning Champion", color: "#add8e6" },
          { key: "2", value: "2.05", extra: "Defending Title", color: "#ffc0cb" },
          { key: "3", value: "2.05", extra: "Defending Title", color: "#ffc0cb" },
        ],
      },

  ];
  

const TennisSection = () => {
  return (
    <div style={{ margin: "16px" }}>
      <div
       className={styles.tableWrapper}
      >
        <PlayCircleOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
        <h3 style={{ margin: 0 }}>Tennis</h3>
      </div>

      <div
        className={styles.table}
      >
        {tennisData.map((item) => (
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

export default TennisSection;
