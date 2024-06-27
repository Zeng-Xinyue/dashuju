import React from "react";
import { Card, Form, Row, Col, Tag, Select } from "antd";

const RecommendedProgram = () => {
    const alreadtBought = ['FUR-SAF-10000085', 'FUR-SAF-10001949', 'OFF-AME-10000244', 'OFF-AVE-10000585',
        'OFF-AVE-10003504', 'OFF-BIC-10001458', 'OFF-ELD-10001477', 'OFF-FEL-10002658', 'OFF-KRA-10004876',
        'OFF-SAN-10004618', 'OFF-SAN-10004881', 'OFF-TEN-10000025', 'OFF-TEN-10004270', 'TEC-LOG-10003254',
        'TEC-STA-10004336']
    const recommended = ['TEC=HEW-10002304', 'OFF-HAM-10003872', 'FUR-HON-10001622', 'FUR-SAF-10004252',
        'OFF-SAN-10003393', 'TEC-CIS-10001938', 'OFF-ELI-10001507', 'TEC-CIS-10002814', 'OFF-BIN-10004729', 'OFF-XER-10002906']
    const color = ["magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple"]
    return (
        <Card bordered={false} title="推荐方案">
            <Card>
                <Form>
                    <Form.Item label="请选择用户ID:" name="customerId">
                        <Select defaultValue="TB-11280" options={[{
                            label: "TB-11280",
                            value: "TB-11280"
                        }]} style={{ width: "200px" }}></Select>
                    </Form.Item>

                    <Row gutter={24}>
                        <Col span={12}>
                            <div>用户 TB-1128 购买过的商品:</div>
                            <div style={{ margin: "10px", width: "1000px" }}>
                                {
                                    alreadtBought?.map((name, index) =>
                                        (<Tag style={{ margin: "10px" }} color={color[index % 10]} >{name}</Tag>)
                                    )
                                }
                            </div>
                        </Col>
                    </Row>

                </Form>

            </Card>
            <Card title="推荐的相似商品ID(去除已购):" style={{ margin: "20px 0" }}>
                <div style={{ width: "1000px" }}>
                    {
                        alreadtBought?.map((name,index) =>
                            (<Tag style={{ margin: "10px" }} color={color[index % 10]} >{name}</Tag>)
                        )
                    }

                </div>
            </Card>
        </Card >
    )
}

export default RecommendedProgram;