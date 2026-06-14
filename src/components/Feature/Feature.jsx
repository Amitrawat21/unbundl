import "./Feature.css";

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

const CHEVRON_URL =
  "https://static.codia.ai/s/image_4622ebda-420e-4cb1-9a2f-9160292c34a0.png";
const CHEVRON2_URL =
  "https://static.codia.ai/s/image_35355df8-b33b-4a69-b71e-10d2c8fa04e6.png";
const CHEVRON3_URL =
  "https://static.codia.ai/s/image_e3a1d176-a2f8-4471-b99c-8c00cd807b11.png";
const CHEVRON4_URL =
  "https://static.codia.ai/s/image_dbcc1159-d025-499f-b680-4250b8a6199d.png";
const CHEVRON5_URL =
  "https://static.codia.ai/s/image_075ae91c-c34e-46b9-a10d-96b9218f4bbf.png";

const rows = [
  {
    feature: "Easy to complex cases",
    chevron: CHEVRON_URL,
    whistle: { type: "text", value: "Yes, mild to\ncomplex" },
    other: { type: "text", value: "No, only mild to\nmoderate" },
  },
  {
    feature: "Clear-cut Pricing",
    chevron: CHEVRON2_URL,
    whistle: { type: "icon", url: CHECK_GREEN3_URL },
    other: { type: "icon", url: CROSS_RED1_URL },
  },
  {
    feature: "Aligner Change",
    chevron: CHEVRON3_URL,
    whistle: { type: "text", value: "Every 10 days" },
    other: { type: "text", value: "Every 2 weeks" },
  },
  {
    feature: "Clinical Partnership",
    chevron: CHEVRON4_URL,
    whistle: { type: "icon", url: CHECK_GREEN2_URL },
    other: { type: "icon", url: CROSS_RED2_URL },
  },
  {
    feature: "Movement Between Cities",
    chevron: CHEVRON5_URL,
    whistle: { type: "icon", url: CHECK_GREEN_URL },
    other: { type: "icon", url: CROSS_RED3_URL },
  },
  {
    feature: "Complimentary Teeth Scaling",
    chevron: CHEVRON2_URL,
    whistle: { type: "icon", url: CHECK_GREEN4_URL },
    other: { type: "icon", url: CROSS_RED4_URL },
  },
];

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
  return (
    <div className="feature-wrapper">
      <div className="comparison-table">
        {/* Header */}
        <div className="table-header">
          <div className="col-features">
            <span className="features-label">Features</span>
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

        {/* Rows */}
        {rows.map((row, idx) => (
          <div key={idx} className="table-row">
            <div className="col-features feature-cell">
              <span className="feature-name">{row.feature}</span>
              <img src={row.chevron} alt="" className="chevron-icon" />
            </div>

            <div className="col-whistle value-cell">
              <CellContent cell={row.whistle} />
            </div>

            <div className="col-other value-cell">
              <CellContent cell={row.other} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
