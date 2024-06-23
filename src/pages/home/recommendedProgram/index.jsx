import React from "react";
import { Card, Avatar } from "antd";

const RecommendedProgram = () => {
    return (
        <Card bordered={false} title="Recommendation scheme analysis">
            <Card title="Customer Info" style={{ margin: "10px 0" }}>
            <Avatar size={64} icon="user" />
            </Card>
            <Card title="Recommendation Products" style={{ margin: "10px 0" }}></Card>
        </Card >
    )
}

export default RecommendedProgram;