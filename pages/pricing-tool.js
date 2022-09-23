import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { FaLongArrowAltLeft } from "react-icons/fa";
// import MRRChart from "./MRRChart";

function PricingTool() {
  const router = useRouter();
  const [productCost, setProductCost] = React.useState(10);
  const [profitMargin, setProfitMargin] = React.useState(1);
  const [units, setUnits] = React.useState(0);
  const [fixedCost, setFixedCost] = React.useState(0);
  const [variableCost, setVariableCost] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);

  const [profit, setProfit] = React.useState(0);

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    // let endOfMonthUsers = totalUsers * usersLost + newUsersPerMonth;
    // let calcGrowth = ((endOfMonthUsers - totalUsers) / totalUsers) * 100;
    // setGrowthRate(calcGrowth);
    // let calcMrr = productCost * endOfMonthUsers;
    // let formatted = calcMrr.toFixed(2);
    // // let commaFormatted = formatted.toLocaleString("en-US")
    // setMrr(formatted);
    // let calcArr = (calcMrr * 12).toFixed(2);
    // setArr(calcArr);
    let calcTotalCost = (variableCost + fixedCost).toFixed(2);
    setTotalCost(calcTotalCost);
    let calcProfit = (productCost * units - totalCost).toFixed(2);
    setProfit(calcProfit);

    //Fixed Costs/(Unit Price-Variable Costs)
    //
    let calcUnits = (fixedCost / (productCost - variableCost)).toFixed(2);
    setUnits(calcUnits);

    // let calcYProfit = (calcMProfit * 12).toFixed(2);
    // setYProfit(calcYProfit);
    // let calcMargin = ((calcMProfit / calcMrr) * 100).toFixed(2);
    // setMargin(calcMargin);
    // //NEXT UP calculate chart data points and send to chart
    // let calcChartDataPoints = [];
    // let calcProfitChartDataPoints = [];
    // let amount;
    // let profitAmount;
    // for (let i = 0; i < 12; i++) {
    //   if (i === 0) {
    //     amount = calcMrr;
    //     profitAmount = calcMrr - calcTotalCost;
    //     let format = Number(amount).toFixed(2);
    //     let formatP = Number(profitAmount).toFixed(2);
    //     calcChartDataPoints.push(format);
    //     calcProfitChartDataPoints.push(formatP);
    //   } else {
    //     amount = amount * (1 + growthRate / 100);
    //     profitAmount = amount - calcTotalCost;
    //     let format2 = Number(amount).toFixed(2);
    //     let formatP2 = Number(profitAmount).toFixed(2);
    //     calcChartDataPoints.push(format2);
    //     calcProfitChartDataPoints.push(formatP2);
    //   }
    // }
    // setChartDataPoints([calcChartDataPoints, calcProfitChartDataPoints]);
  }, [
    // eslint-disable-line react-hooks/exhaustive-deps
    productCost,
    profitMargin,
    units,
    fixedCost,
    variableCost,
    totalCost,
    profit,
  ]);

  return (
    <div className="flex flex-col items-center w-full h-full fade-effect">
      <div className="relative flex flex-col items-center h-full ">
        <p className="text-3xl blue-gradient-text">Pricing Tool</p>

        <div className="flex gap-5 m-5 sm:flex-col md:flex-row sm:items-center">
          {/* <MRRChart chartDataPoints={chartDataPoints} /> */}

          <div className="normal-box bg-[hsla(200,0%,100%,0.764)]  dark:bg-[hsla(200,0%,20%,0.764)] w-[26em] flex-col flex !rounded-xl  nun ">
            {/* <hr /> */}

            <div className="flex justify-between">
              <p># of units sold to breakeven </p>
              <div className="flex">
                {/* <p>#</p> */}
                <p className={profit > 0 ? "text-green-400" : "text-red-400"}>
                  {units}
                </p>
              </div>
            </div>
            {/* <div className="flex justify-between">
              <p> Profit per unit: </p>

              <div className="flex">
                <p>$</p>
                <h3 className={profit > 0 ? "text-green-400" : "text-red-400"}>
                  {numberWithCommas(profit)}
                </h3>
              </div>
            </div> */}
          </div>
        </div>
        {/* <p>Formula: Fixed Costs / (Unit Price - Variable Costs)</p>
        <p>{fixedCost + " / (" + productCost + " - " + variableCost + ")"}</p>
        <p>Answer:{units}</p> */}
        <div className="flex flex-col items-center justify-start w-full gap-2 p-2 text-center normal-box-soft dark:bg-slate-700/80 ">
          <div className="flex flex-col normal-box-soft md:w-[40%] sm:w-full !rounded-xl items-center text-left gap-2 h-full dark:bg-slate-600/80 min-w-[20em]">
            <p className="text-xl font-bold text-left text-t-bd">Revenue</p>
            <div className="flex flex-col normal-box-soft w-[90%] !rounded-xl   p-3 !bg-clear-bl2 ">
              <p className="text-md">Price for product</p>
              <div className="flex items-center">
                <input
                  id="typeinp"
                  type="range"
                  className="mr-8 blue range"
                  min={0}
                  max={5000}
                  value={productCost}
                  step="1"
                  onChange={(e) => {
                    setProductCost(e.target.valueAsNumber);
                  }}
                />
                <p>$</p>

                <input
                  type="number"
                  id="quantity"
                  className="w-[8em] rounded-xl textarea-tw"
                  min="1"
                  max="5000000000000"
                  value={productCost}
                  onChange={(e) => {
                    setProductCost(e.target.valueAsNumber);
                  }}
                ></input>
              </div>
            </div>

            {/* <div className="flex flex-col normal-box-soft w-[90%] !rounded-xl gap-0 p-3 !bg-clear-bl2">
              <p className="text-md">Profit Margin</p>
              <div className="flex items-center ">
                <input
                  type="range"
                  className="mr-8 blue range"
                  min={0}
                  max={50}
                  value={profitMargin}
                  step="0.01"
                  onChange={(e) => {
                    setProfitMargin(e.target.valueAsNumber);
                  }}
                />
                <p>%</p>
                <input
                  type="number"
                  className="w-[8em] rounded-xl textarea-tw"
                  min="0.01"
                  max="50"
                  value={profitMargin}
                  onChange={(e) => {
                    setProfitMargin(e.target.valueAsNumber);
                  }}
                ></input>
              </div>
            </div> */}
          </div>

          <div className="flex flex-col normal-box-soft dark:bg-slate-600/80    !rounded-xl items-center text-left gap-2">
            <p className="text-xl font-bold text-left text-t-pd">Costs</p>

            <div className="flex flex-col normal-box-soft w-[90%] !rounded-xl gap-0 p-2 !bg-clear-pl2">
              <p className="text-md">Fixed costs</p>
              <div className="flex items-center ">
                <input
                  type="range"
                  className="mr-8 pink-range range"
                  min={0}
                  max={100000}
                  value={fixedCost}
                  step="1"
                  onChange={(e) => {
                    setFixedCost(e.target.valueAsNumber);
                  }}
                />
                <p>$</p>

                <input
                  type="number"
                  className="w-[8em] rounded-xl textarea-tw"
                  min="1"
                  max="500000000000"
                  value={fixedCost}
                  onChange={(e) => {
                    setFixedCost(e.target.valueAsNumber);
                  }}
                ></input>
              </div>
            </div>

            <div className="flex flex-col normal-box-soft w-[90%] !rounded-xl gap-0 p-3 !bg-clear-pl2">
              <p className="text-md">Variable cost (per unit)</p>
              <div className="flex items-center ">
                <input
                  type="range"
                  className="mr-8 pink-range range"
                  min={0}
                  max={5000}
                  value={variableCost}
                  step="1"
                  onChange={(e) => {
                    setVariableCost(e.target.valueAsNumber);
                  }}
                />
                <p>$</p>

                <input
                  type="number"
                  className="w-[8em] rounded-xl textarea-tw"
                  min="1"
                  max="500000000000"
                  value={variableCost}
                  onChange={(e) => {
                    setVariableCost(e.target.valueAsNumber);
                  }}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTool;
