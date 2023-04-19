import Head from "next/head";
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
const { Panel } = Collapse;
export default function Home(): any {
  return (
    <>
      <Head>
        <title>BCAD</title>
      </Head>
      <main className="min-h-screen pb-14 flex justify-center relative">
        <img
          className="top-0 left-0 border border-white border-2 w-screen h-screen object-cover"
          src="/bgs/bg0.png"
        />
        {/* <p className='absolute text-white font-mono my-36'>Before Cutie, After Doggo</p> */}
        <img
          className=" absolute m-auto my-64 border border-white border-2 justify-center w-1/2 md:w-1/3 md:my-40 lg:w-1/4 lg:my-36 h-auto xl:w-1/4 xl:my-32 2xl:w-1/4 2xl:my-24 "
          src="/images/1.png"
        />
        {/* <p className='text-center absolute text-white font-mono bottom-40 inset-x-0'>Beautifully Crafted, Aptly Developed</p> */}
      </main>

      <Collapse
        style={{ border: "2px solid white", borderRadius: 0 }}
        defaultActiveKey={["6"]}
      ><StyledPanel
        showArrow={false}
        header={
          <span
            className="text-xl md:text-3xl font-mono "
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            DROP #000006 🐟 Biennale Convention for Acquiring Doodads
          </span>
        }
        key="6"
      >
          <div className="relative bg-[#1C1B19]">
            <Link href="/project/6">
              <img
                style={{ cursor: "pointer" }}
                className="relative mx-auto"
                src="/drops/drop6.png"
              ></img>
            </Link>
          </div>
        </StyledPanel>

        <StyledPanel
          showArrow={false}
          header={
            <span
              className="text-xl md:text-3xl font-mono "
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              DROP #000005 🥰 Bonded Crowd Assessment Device
            </span>
          }
          key="5"
        >
          <div className="relative bg-[#1C1B19]">
            <Link href="/project/5">
              <img
                style={{ cursor: "pointer" }}
                className="relative mx-auto"
                src="/drops/drop5.png"
              ></img>
            </Link>
          </div>
        </StyledPanel>


        <StyledPanel
          showArrow={false}
          header={
            <span
              className="text-xl md:text-3xl font-mono "
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              DROP #000004 🥤 Bain x Coca-Cola: Advertisement Diffusion
            </span>
          }
          key="4"
        >
          <div className="relative bg-[#1C1B19]">
            <Link href="/project/4">
              <img
                style={{ cursor: "pointer" }}
                className="relative mx-auto"
                src="/drops/drop4.jpg"
              ></img>
            </Link>
          </div>
        </StyledPanel>
        <StyledPanel
          showArrow={false}
          header={
            <span
              className="text-xl md:text-3xl font-mono "
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              DROP #000003 🔮 Bella Coven, Automated Diviner
            </span>
          }
          key="3"
        >
          <div className="relative bg-[#1C1B19]">
            <Link href="/project/3">
              <img
                style={{ cursor: "pointer" }}
                className="relative mx-auto"
                src="/drops/drop3.png"
              ></img>
            </Link>
          </div>
        </StyledPanel>


        <StyledPanel
          showArrow={false}
          header={
            <span
              className="text-xl md:text-3xl font-mono "
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              DROP #000002 🍝 Boring Code Achieves Deliciousness
            </span>
          }
          key="2"
        >
          <div className="relative bg-white">
            <img
              className="absolute inset-0  h-56 md:h-96 w-screen object-cover "
              src="/drops/drop2/grad2.png"
              alt=""
            />
            <Link href="/project/2">
              <img
                style={{ cursor: "pointer" }}
                className="relative mx-auto"
                src="/drops/drop2/drop2.png"
              ></img>
            </Link>
          </div>
        </StyledPanel>


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
              DROP #000001 🍄 Biochemical Creative Adventure Diary
            </span>
          }
          key="1"
        >
          <div className="xl:bg-[#E4E4E2] xl:text-black">
            <Link href="/project/1">
              <img className="mx-auto" src="/drops/drop1.png" />
            </Link>
          </div>
        </StyledPanel>
      </Collapse>
    </>
  );
}
