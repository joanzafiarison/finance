import React, { useEffect } from "react";
import * as echarts from "echarts";

type ItemProps = {
  symbol: string;
  name: string;
  price: number;
  change: number;
};

const Item: React.FC<ItemProps> = ({ symbol, name, price, change }) => {
  return (
    <div className="p-4 hover:bg-gray-50 cursor-pointer border-b">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold text-gray-900">{symbol}</h4>
          <p className="text-sm text-gray-600">{name}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">${price.toFixed(2)}</p>
          <p className={`text-sm ${change >= 0 ? "text-green-600" : "text-red-600"}`}>
            {change >= 0 ? "+" : ""}{change.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-gray-900">Portfolio Value</h2>
      <p className="mt-2 text-4xl font-bold text-blue-600">$247,582.64</p>
      <p className="text-green-600 text-sm font-medium mt-1">
        <i className="fas fa-arrow-up mr-1"></i> +2.4% today
      </p>
    </div>
  );
};

const Info: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Market Information</h3>
      <p className="text-sm text-gray-600">Market Cap: <span className="font-semibold">$2.85T</span></p>
      <p className="text-sm text-gray-600">P/E Ratio: <span className="font-semibold">30.24</span></p>
      <p className="text-sm text-gray-600">Dividend Yield: <span className="font-semibold">0.51%</span></p>
    </div>
  );
};

const Dashboard: React.FC = () => {
  useEffect(() => {
    const dividendChart = echarts.init(document.getElementById("dividendChart")!);
    dividendChart.setOption({
      series: [{
        type: "pie",
        radius: ["40%", "70%"],
        data: [
          { value: 1048, name: "AAPL" },
          { value: 735, name: "MSFT" },
          { value: 580, name: "GOOGL" },
        ],
      }],
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 grid grid-cols-3 gap-8">
      <Portfolio />
      <Info />
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900">Dividend Distribution</h3>
        <div id="dividendChart" style={{ height: 300 }}></div>
      </div>
      <div className="col-span-3 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900">Assets</h3>
        <Item symbol="AAPL" name="Apple Inc." price={182.63} change={1.24} />
        <Item symbol="MSFT" name="Microsoft Corp." price={378.92} change={-0.32} />
      </div>
    </div>
  );
};

export default Dashboard;