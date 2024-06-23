import { Card } from "antd"
import React from "react";

const CustomerAnalysis = () => {
    return <>
        <Card bordered={false} title="用户价值度模型分析(不同类型客户 倾向不同种类商品 倾向度占比)"></Card>
        <Card bordered={false} title="不同类别商品下 不同类型客户 贡献销售金额"></Card>
    </>
}
export default CustomerAnalysis;