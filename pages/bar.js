import React from "react";
import Link from "next/link";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    "hot dog": 71,
    "hot dogColor": "hsl(321, 70%, 50%)",
    burger: 46,
    burgerColor: "hsl(7, 70%, 50%)",
    sandwich: 133,
    sandwichColor: "hsl(136, 70%, 50%)",
    kebab: 17,
    kebabColor: "hsl(269, 70%, 50%)",
    fries: 184,
    friesColor: "hsl(227, 70%, 50%)",
    donut: 45,
    donutColor: "hsl(354, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 43,
    "hot dogColor": "hsl(198, 70%, 50%)",
    burger: 146,
    burgerColor: "hsl(77, 70%, 50%)",
    sandwich: 151,
    sandwichColor: "hsl(261, 70%, 50%)",
    kebab: 160,
    kebabColor: "hsl(205, 70%, 50%)",
    fries: 32,
    friesColor: "hsl(150, 70%, 50%)",
    donut: 100,
    donutColor: "hsl(206, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 178,
    "hot dogColor": "hsl(221, 70%, 50%)",
    burger: 158,
    burgerColor: "hsl(201, 70%, 50%)",
    sandwich: 165,
    sandwichColor: "hsl(133, 70%, 50%)",
    kebab: 10,
    kebabColor: "hsl(219, 70%, 50%)",
    fries: 64,
    friesColor: "hsl(150, 70%, 50%)",
    donut: 47,
    donutColor: "hsl(219, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 74,
    "hot dogColor": "hsl(217, 70%, 50%)",
    burger: 104,
    burgerColor: "hsl(177, 70%, 50%)",
    sandwich: 138,
    sandwichColor: "hsl(104, 70%, 50%)",
    kebab: 143,
    kebabColor: "hsl(176, 70%, 50%)",
    fries: 159,
    friesColor: "hsl(341, 70%, 50%)",
    donut: 21,
    donutColor: "hsl(341, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 43,
    "hot dogColor": "hsl(37, 70%, 50%)",
    burger: 81,
    burgerColor: "hsl(155, 70%, 50%)",
    sandwich: 57,
    sandwichColor: "hsl(237, 70%, 50%)",
    kebab: 33,
    kebabColor: "hsl(108, 70%, 50%)",
    fries: 69,
    friesColor: "hsl(322, 70%, 50%)",
    donut: 126,
    donutColor: "hsl(88, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 136,
    "hot dogColor": "hsl(286, 70%, 50%)",
    burger: 177,
    burgerColor: "hsl(200, 70%, 50%)",
    sandwich: 114,
    sandwichColor: "hsl(184, 70%, 50%)",
    kebab: 11,
    kebabColor: "hsl(165, 70%, 50%)",
    fries: 34,
    friesColor: "hsl(157, 70%, 50%)",
    donut: 162,
    donutColor: "hsl(72, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 104,
    "hot dogColor": "hsl(4, 70%, 50%)",
    burger: 106,
    burgerColor: "hsl(123, 70%, 50%)",
    sandwich: 160,
    sandwichColor: "hsl(43, 70%, 50%)",
    kebab: 31,
    kebabColor: "hsl(87, 70%, 50%)",
    fries: 185,
    friesColor: "hsl(271, 70%, 50%)",
    donut: 99,
    donutColor: "hsl(202, 70%, 50%)",
  },
];

const MyResponsiveBar = () => (
  <div className="container">
    <h1>Response Bar</h1>
    <Link href="/">
      <a>Go Home</a>
    </Link>
    <div style={{ height: 650, width: "100%" }}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
    <style jsx>{`
      .container {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
    `}</style>
  </div>
);

export default MyResponsiveBar;
