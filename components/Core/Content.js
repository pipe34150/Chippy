import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  color: rgb(105, 48, 44);
  font-size: 45px;
  font-weight:500;
`
const Yellow = styled.span`
  color: rgb(248, 188, 0);
  font-weight:700;
`
const Text = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 40px;
`

const Circle = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  border-width: 7px;
  border-style: solid;
  border-color: rgb(248, 188, 0);
  border-image: initial;
  margin: 5vh;
`

const TextSection2 = styled.p`
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8em;
  margin-top: 1em;
  letter-spacing: normal;
  color: rgb(60, 60, 60);
  max-width: 383px;
`

const Talk = styled.img`
  max-width: 100px;
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
`

const Bg = styled.div`
  background: rgb(240,240,240);
  /* background-image: url('/static/img/Bottom.png'); */
  padding-bottom:10vh;

`
const Bottom = styled.div`
  background-image: url('/static/img/Bottom.png');
  background-size: cover;
  height: 20vh;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin-bottom: 10vh;
`
const Chip = () => {
  const Font = styled.h2`
    font-size: 28px;
    color: rgb(100, 52, 47);
    font-weight:700;
  `
  return(
    <div className = "pb-5 col-12 col-md-6">
      <Talk src = "/static/img/Asset_10.svg" />
      <Font className = "pt-3">Coming Soon...</Font>
    </div>
  )
}

const Down = styled.div`
  margin-bottom: 25vh;
`
export default class Content extends Component {
  render() {
    return (
      <div>
        <Bg>
        <div className = "container text-center">
          <Header>เพราะใดๆ ในโลกล้วนเป็น <Yellow>เรื่องน่าเมาท์</Yellow></Header>
          <Text>
  ในปีนี้ทางชุมนุม ITForge KMITL , Alchemist KMUTT , Thinc. CU จึงได้ลงเอย มานัดพบ ชวนทุกคนมานั่งเมาท์กินขนมให้เจ็บคอเล่นอย่างเป็นกันเอง เพื่อให้ทุกคนได้รู้จักกันมากขึ้นผ่าน Open Session ที่ใครอยากจะแชร์อะไร ก็เสนอหัวข้อกันมาได้แล้วมาฝอยกัน</Text>
          <div className = "row d-flex justify-content-between align-items-center ">
            <div className = "col-12 col-sm-12 col-lg-12">
              <Circle src = "/static/img/oval1.png" />
              <Circle src = "/static/img/oval2.png" />
              <Circle src = "/static/img/oval3.png" />
            </div>
          </div>
        </div>
        {/* <BottomImg src = "/static/img/Bottom.png" ></BottomImg> */}
      </Bg>
      <Bottom></Bottom>
      <Down className = "container">
        <div className = "row">
          <div className="py-5 col-12 col-lg-5">
            <Header>คนอยากเมาท์</Header>
            <Header><b>กับเรื่องที่จะเมาท์</b></Header>
            <TextSection2>
              นอกจากจะมี Open Session แล้วเรายังมีหัวข้อดีๆจาก Speaker ของทั้งสามทีมที่จะมาแชร์ความรู้แบบวร้ายๆให้ได้ฟังกันอีกด้วย
            </TextSection2>
          </div>
          <div className = "col-lg-7">
            <div className = "row">
              <Chip />
              <Chip />
              <Chip />
              <Chip />
              <Chip />
            </div>
          </div>
        </div>
      </Down>
    </div>
    )
  }
}
