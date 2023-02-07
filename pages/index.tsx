import Head from 'next/head'
import { Collapse } from 'antd';
import styled from 'styled-components';
import Link from 'next/link'
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
      <main className="min-h-screen pb-14 flex justify-center relative">
        <img className="top-0 left-0 border border-white border-2 w-screen h-screen" src="/bgs/bg0.png" />
        {/* <p className='absolute text-white font-mono my-36'>Before Cutie, After Doggo</p> */}
        <img className=" absolute m-auto my-48 border border-white border-2 justify-center w-1/4 h-auto" src="/images/1.png" />
        {/* <p className='text-center absolute text-white font-mono bottom-40 inset-x-0'>Beautifully Crafted, Aptly Developed</p> */}
      </main>

      <Collapse style={{ border: "2px solid white", borderRadius: 0 }} defaultActiveKey={['1']}>
        <StyledPanel showArrow={false} style={{ cursor: 'pointer' }} header={<span className="text-3xl font-mono" style={{ cursor: 'pointer', color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>DROP #000001</span>} key="1">

          <div>
            <p className=' font-mono mb-2'>🍄 The Trip Book</p>
            <Link href='/project/1'>
            <img src="/drops/drop1.png" />
            </Link>
          </div>
        </StyledPanel>
        <StyledPanel showArrow={false} header={<span className="text-3xl font-mono" style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>DROP #000002</span>} key="2">
          <div >
            <p>Coming Soon</p>
          </div>
        </StyledPanel>
        <StyledPanel showArrow={false} header={<span className="text-3xl font-mono" style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>DROP #000003</span>} key="3">
          <p>Coming Soon</p>
        </StyledPanel>
      </Collapse>
    </>
  )
}
