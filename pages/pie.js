import React from "react";
import Link from "next/link";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "make",
    label: "make",
    value: 75,
    color: "hsl(207, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 528,
    color: "hsl(220, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 153,
    color: "hsl(91, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 161,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 319,
    color: "hsl(111, 70%, 50%)",
  },
];

const MyResponsivePie = () => (
  <div className="container">
    <h1>Response Pie</h1>
    <Link href="/">
      <a>Go Home</a>
    </Link>
    <div style={{ height: 650, width: "100%" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
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

export default MyResponsivePie;
