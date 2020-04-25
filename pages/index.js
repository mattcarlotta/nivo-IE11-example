import React from "react";
import Link from "next/link";

export default () => (
  <div className="container">
    <h1 className="title">@nivo examples</h1>
    <Link href="/bar">
      <a>Bar</a>
    </Link>
    <br />
    <Link href="/pie">
      <a>Pie</a>
    </Link>
    <br />
    <Link href="/test">
      <a>Test</a>
    </Link>
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 98vh;
        background: #eee;
      }

      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        text-align: center;
        transition: 100ms ease-in background;
      }
    `}</style>
  </div>
);
