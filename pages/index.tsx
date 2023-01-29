import Head from 'next/head'
import { Collapse } from 'antd';
import styled from 'styled-components';
const StyledPanel = styled(Collapse.Panel)`
  &&& {
    border: none;
    border-radius: 0px;
    box-shadow: none;
  }
  .ant-collapse-content {
    background: #1E1E1E;
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
      <main className="min-h-screen pb-14 flex justify-center">
        <img className="top-0 left-0 border border-white border-2 w-screen h-screen" src="/bgs/bg0.png" />
        <img className=" absolute m-auto my-48 border border-white border-2 justify-center w-1/4 h-auto" src="/images/1.png" />
      </main>
      <Collapse style={{ border: "2px solid white", borderRadius: 0 }} defaultActiveKey={['1']}>
        <StyledPanel  style={{cursor:'pointer'}}header={<span className="text-3xl font-mono" style={{cursor:'pointer',color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>DROP #000001</span>} key="1">

          <div>
            <p className=' font-mono mb-2'>🍄 The Trip Book</p>
            <img src="/drops/drop1.png" />
          </div>
        </StyledPanel>
        <StyledPanel header={<span className="text-3xl font-mono" style={{ color: "white",  display: "flex", justifyContent: "center", alignItems: "center" }}>DROP #000002</span>} key="2">
          <div >
            <p>2</p>
          </div>
        </StyledPanel>
        <StyledPanel header={<span className="text-3xl font-mono" style={{ color: "white",  display: "flex", justifyContent: "center", alignItems: "center" }}>DROP #000003</span>} key="3">
          <p>3</p>
        </StyledPanel>
      </Collapse>
    </>
  )
}
