import React from "react";
import { Card } from "antd";

const ProductAnalysis = () => {
  return (<>
  <Card bordered={false} title="商品销售量分析"></Card>
  <Card bordered={false} title="商品利润分析"></Card>
  <Card bordered={false} title="商品销售类型占比"></Card>
  <Card bordered={false} title="各类型商品销售数量占比"></Card>
  </>)
}

export default ProductAnalysis;