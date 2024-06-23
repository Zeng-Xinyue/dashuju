import { Card, Tag } from "antd"
import React from "react";

const CustomerAnalysis = () => {
    return <>
        <Card bordered={false} title="用户价值度模型分析(不同类型客户 倾向不同种类商品 倾向度占比)"></Card>
        <Card bordered={false} title="不同类别商品下 不同类型客户 贡献销售金额"></Card>
        <Card bordered={false} title="RFM模型分析">
            <div style={{ display: "flex", flexDirection: ' column' }}>
                <Tag color="green" style={{display:'block',width:"auto",margin:"10px 0",fontSize:"18px",padding:"10px 20px"}}>R是指用户的最近一次消费时间，用最通俗的话说就是，用户最后一次下单时间距今天有多长时间了，这个指标与用户流失和复购直接相关。</Tag>
                <Tag color="blue" style={{display:'block',width:"auto",margin:"10px 0",fontSize:"18px",padding:"10px 20px"}}>F是指用户下单频率，通俗一点儿就是，用户在固定的时间段内消费了几次。这个指标反映了用户的消费活跃度。</Tag>
                <Tag color="orange"  style={{display:'block',width:"auto",margin:"10px 0",fontSize:"18px",padding:"10px 20px"}}>M是指用户消费金额，其实就是用户在固定的周期内在平台上花了多少钱，直接反映了用户对公司贡献的价值。</Tag>
                <Tag color="red"  style={{display:'block',width:"auto",margin:"10px 0",fontSize:"18px",padding:"10px 20px"}}>RFM模型就是通过一个客户的近期购买行为、购买的总体频率以及花了多少钱三项指标，来描述该客户的价值状况。</Tag>
            </div>

        </Card>
    </>
}
export default CustomerAnalysis;