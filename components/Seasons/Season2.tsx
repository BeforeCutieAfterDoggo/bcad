import { Collapse } from "antd";
import styled from "styled-components";
import Link from "next/link";
const StyledPanel = styled(Collapse.Panel)`
  &&& {
    border: none;
    border-radius: 0px;
    box-shadow: none;
  }
  .ant-collapse-content {
    background: #1e1e1e;
    color: white;
  }
`;
export default function Season2(): any {
  return (
    <div>
      <p className="text-white font-mono text-2xl mx-4">
        SEASON 2: SEASON OF THE ANTI-BUSINESS
      </p>
      <Collapse
        style={{ border: "2px solid white", borderRadius: 0 }}
          defaultActiveKey={["1"]}
      >
        <StyledPanel
          showArrow={false}
          style={{ cursor: "pointer" }}
          header={
            <span
              className="text-xl md:text-3xl font-mono"
              style={{
                cursor: "pointer",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              DROP #000008 🤖 Bast Captcha, Automation Defense
            </span>
          }
          key="1"
        >
          <div className="xl:bg-[#E4E4E2] xl:text-black">
            <Link href="/project/8">
              <img className="mx-auto" src="/drops/drop8.png" />
            </Link>
          </div>
        </StyledPanel>
      </Collapse>
    </div>
  );
}
