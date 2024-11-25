import { Badge, Row, Col } from "antd";
import { PlayCircleOutlined, TagOutlined } from "@ant-design/icons";

const horseRidingData = [
    {
      key: "1",
      match: "Royal Derby 2024",
      league: "Equestrian Racing",
      status: "live",
      date: "25 Nov",
      time: "4:00 PM",
      odds: [
        { key: "1", value: "2.5", extra: "Lightning Bolt - Top Favorite", color: "#add8e6" },
        { key: "X", value: "3.1", extra: "Storm Chaser - Strong Contender", color: "#ffc0cb" },
        { key: "2", value: "4.2", extra: "Shadow Runner - Dark Horse", color: "#add8e6" },
      ],
    },
    {
      key: "2",
      match: "National Equestrian Championship",
      league: "Equestrian Racing",
      status: "upcoming",
      date: "27 Nov",
      time: "5:30 PM",
      odds: [
        { key: "1", value: "3.0", extra: "Thunderstrike - Fan Favorite", color: "#add8e6" },
        { key: "X", value: "2.8", extra: "Golden Glory - Experienced Winner", color: "#ffc0cb" },
        { key: "2", value: "5.0", extra: "Nightfall - Underestimated", color: "#add8e6" },
      ],
    },
  ];
  

const HorseRidding = () => {
  return (
    <div style={{ margin: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          background:
            "linear-gradient(to right,#d4af37 0%,#d4af37 20%,#c19a6b 25%,rgba(212, 175, 55, 0) 30%,rgba(0, 0, 0, 0.7) 40%,black 50%,black 100%)",
          color: "#fff",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <PlayCircleOutlined style={{ fontSize: "24px", marginRight: "16px" }} />
        <h3 style={{ margin: 0 }}>Horse Ridding</h3>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "0px 0px 8px 8px",

          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
        }}
      >
        {horseRidingData.map((item) => (
          <div
            key={item.key}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
              padding: "8px",
              minWidth: "300px",
            }}
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

            <div style={{ flex: 1, textAlign: "center" }}>
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

export default HorseRidding;
