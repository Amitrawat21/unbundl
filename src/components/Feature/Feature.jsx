import { useState } from "react";
import "./Feature.css";

import rows from "../../assets/Data/ResultData";

const CHECK_GREEN_URL =
  "https://static.codia.ai/s/image_008cff6e-8990-46ee-aeee-5b2b3b79ee7c.png";
const CHECK_GREEN2_URL =
  "https://static.codia.ai/s/image_864d73d3-66bd-4984-9344-e103ef5325ba.png";
const CHECK_GREEN3_URL =
  "https://static.codia.ai/s/image_763b42bd-e85f-43d4-9542-18a07dc028f1.png";
const CHECK_GREEN4_URL =
  "https://static.codia.ai/s/image_97b70997-40b2-49e4-b804-28ab69aee502.png";

const CROSS_RED1_URL =
  "https://static.codia.ai/s/image_51bfe448-8bc9-45ba-8461-2184f59ceb06.png";
const CROSS_RED2_URL =
  "https://static.codia.ai/s/image_6f8fdcd6-1e62-432b-9774-898a85417985.png";
const CROSS_RED3_URL =
  "https://static.codia.ai/s/image_6c44fa09-5fc1-4953-b34d-cccf2d4d7727.png";
const CROSS_RED4_URL =
  "https://static.codia.ai/s/image_6cfafa35-4cae-4c0c-89de-b534b7d07989.png";



function CellContent({ cell }) {
  if (cell.type === "icon") {
    return <img src={cell.url} alt="" className="cell-icon" />;
  }
  return (
    <span className="cell-text">
      {cell.value.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </span>
  );
}

export default function Feature() {
  const [openRow, setOpenRow] = useState(null);

  return (
    <div className="feature">
      <h1>What sets Whistle apart?</h1>
      <div className="feature-wrapper">
        <div className="comparison-table">
  
          <div className="table-header">
            <div className="col-features">
              <span className="features-labell">Features</span>
            </div>
            <div className="col-whistle">
              <div className="whistle-brand">
                <span className="whistle-name">whistle</span>
                <span className="whistle-sub">AND SMILE</span>
              </div>
            </div>
            <div className="col-other">
              <span className="other-label">Other Brands</span>
            </div>
          </div>

    
          {rows.map((row, idx) => (
            <div key={idx}>
              <div
                className="table-row"
                onClick={() =>
                  row.expand && setOpenRow(openRow === idx ? null : idx)
                }
                style={{ cursor: row.expand ? "pointer" : "default" }}
              >
                <div className="col-features feature-cell">
                  <span className="feature-name">{row.feature}</span>
                
                  {row.expand && (
                    <span
                      className={`arrow-icon ${openRow === idx ? "arrow-up" : "arrow-down"}`}
                    >
                      ‹
                    </span>
                  )}
                </div>
                <div className="col-whistle value-cell">
                  <CellContent cell={row.whistle} />
                </div>
                <div className="col-other value-cell">
                  <CellContent cell={row.other} />
                </div>
              </div>

          
              {openRow === idx && row.expand && (
                <div className="expand-panel">{row.expand}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
