import { Badge, Row, Col } from "antd";
import { PlayCircleOutlined, TagOutlined } from "@ant-design/icons";

const dataSource = [
    {
      key: "1",
      match: "Samsunspor v Alanyaspor",
      league: "Turkish Soccer",
      status: "live",
      date: "24 Nov",
      time: "6:30 PM",
      odds: [
        { key: "1", value: "3.65", extra: "446.33", color: "#add8e6" },
        { key: "X", value: "3.75", extra: "45.56", color: "#ffc0cb" },
        { key: "2", value: "1.8", extra: "529.98", color: "#add8e6" },
      ],
    },
    {
      key: "2",
      match: "Samsunspor v Alanyaspor",
      league: "Turkish Soccer",
      status: "live",
      date: "24 Nov",
      time: "6:30 PM",
      odds: [
        { key: "3", value: "3.65", extra: "446.33", color: "#add8e6" },
        { key: "X", value: "3.75", extra: "45.56", color: "#ffc0cb" },
        { key: "2", value: "1.8", extra: "529.98", color: "#add8e6" },
      ],
    },
    {
      key: "3",
      match: "Samsunspor v Alanyaspor",
      league: "Turkish Soccer",
      status: "live",
      date: "24 Nov",
      time: "6:30 PM",
      odds: [
        { key: "1", value: "3.65", extra: "446.33", color: "#add8e6" },
        { key: "X", value: "3.75", extra: "45.56", color: "#ffc0cb" },
        { key: "2", value: "1.8", extra: "529.98", color: "#add8e6" },
      ],
    },
    {
      key: "4",
      match: "Samsunspor v Alanyaspor",
      league: "Turkish Soccer",
      status: "live",
      date: "24 Nov",
      time: "6:30 PM",
      odds: [
        { key: "1", value: "3.65", extra: "446.33", color: "#add8e6" },
        { key: "X", value: "3.75", extra: "45.56", color: "#ffc0cb" },
        { key: "2", value: "1.8", extra: "529.98", color: "#add8e6" },
      ],
    },
  ];
  

const SoccerSection = () => {
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
        {dataSource.map((item) => (
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

export default SoccerSection;
