import { Badge, Row, Col } from "antd";
import { PlayCircleOutlined, TagOutlined } from "@ant-design/icons";

const inPlayData = [
    // Cricket
    {
      key: "1",
      match: "India vs Australia",
      league: "Cricket World Cup",
      status: "live",
      date: "24 Nov",
      time: "3:00 PM",
      odds: [
        { key: "1", value: "1.6", extra: "India to win", color: "#add8e6" },
        { key: "X", value: "2.8", extra: "Draw", color: "#ffc0cb" },
        { key: "2", value: "3.5", extra: "Australia to win", color: "#add8e6" },
      ],
    },
    // Tennis
    {
      key: "2",
      match: "Novak Djokovic vs Carlos Alcaraz",
      league: "ATP Finals",
      status: "live",
      date: "24 Nov",
      time: "5:00 PM",
      odds: [
        { key: "1", value: "1.7", extra: "Novak Djokovic to win", color: "#ffc0cb" },
        { key: "X", value: "2.5", extra: "Draw", color: "#add8e6" },
        { key: "2", value: "2.1", extra: "Carlos Alcaraz to win", color: "#add8e6" },
      ],
    },
    // Horse Riding
    {
      key: "3",
      match: "Royal Derby 2024",
      league: "Equestrian Racing",
      status: "live",
      date: "24 Nov",
      time: "4:00 PM",
      odds: [
        { key: "1", value: "2.5", extra: "Lightning Bolt - Top Favorite", color: "#add8e6" },
        { key: "X", value: "3.1", extra: "Storm Chaser - Strong Contender", color: "#ffc0cb" },
        { key: "2", value: "4.2", extra: "Shadow Runner - Dark Horse", color: "#add8e6" },
      ],
    },
  ];
  

const InPlay = () => {
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
        <h3 style={{ margin: 0 }}>Soccer</h3>
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
        {inPlayData.map((item) => (
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

export default InPlay;
