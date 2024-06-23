import React from "react";
import { Card, Form, Row, Col, Tag } from "antd";

const RecommendedProgram = () => {
    return (
        <Card bordered={false} title="Recommendation scheme analysis">
            <Card title="Customer Info" style={{ margin: "10px 0" }}>
                <Form>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="Product ID">{ }</Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Segment">{ }</Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Card>
            <Card title="Recommendation Products" style={{ margin: "10px 0" }}>
                <Tag>Product Name</Tag>
            </Card>
        </Card >
    )
}

export default RecommendedProgram;