import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  font-size: 45px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: rgb(105, 48, 44);
  margin-top: 5vh;
`

const Button = styled.button`
  cursor: pointer;
    background-color:#69302c;
    border:0px solid transparent;
    border-radius: 3px;
    color: #fff;
    padding: 0.4em 1.25em;
    font-size: 21px;
    width: auto;
    margin: 5vh 0;
    color: #FFF;
    max-width: 431px;
    width: 100%;
    height: 64px;
    &:hover, &:active {
      background-color: #421714 !important;
      text-decoration: none;
      box-shadow: none !important;
    }
    
`

const Link = styled.a`
  text-decoration: none;
  background-color: transparent;
`

const Text = styled.span`
  font-size: 21px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgb(115, 60, 11);
`

const Bg = styled.div`
  background-color: rgb(241, 241, 241);

`

const Yellow = styled.span`
  font-weight: 600;
  color: rgb(248, 188, 0);
`

const Love = {
  love : "<3"
}

const Spanny = styled.span`
  font-size: 23px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-bottom: 0px;
`

const Downy = styled.div`
  justify-content: center;
  align-items :center;
  min-height:40vh;
`


const CreditImage = styled.img`
  width: auto;
  max-height: 75px;
  padding: 15px 25px;
  margin: 15px 0px;
  @media (max-width: 992px) {
    max-height: 50px;
    margin: 0px;
    padding: 10px 20px;
  }
`

const images = {
  itforge: "/static/img/Artisan Logo.png",
  alchemist: "/static/img/logoAlchemist.png",
  thinc: "/static/img/Thinc.png"

}

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className = "container text-center">
          <div className = "row">
            <div className = "py-5 d-flex flex-column col">
              <div className = "align-item-center ">
                <Header>อ่านมาขนาดนี้แล้วยังไม่ส่งหัวข้ออีกเหรอ ? ส่งเร็ว!</Header>
                <Button>ส่งหัวข้อที่จะไปพูดกันเลย !</Button>
                <div>
                  <Text>หรือ <Link>ดูหัวข้อที่น่าสนใจ ></Link></Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bg>
          <div className = "container">
            <Downy className = "row">
              <div className = "col-7">
                <Spanny>Made with {Love.love} by <Yellow>Artisan + Alchemist + Thinc.</Yellow></Spanny>
              </div>
              <div className = "col-5">
                <CreditImage src={images.itforge} />
                <CreditImage src={images.alchemist} />
                <CreditImage src={images.thinc} />
              </div>
            </Downy>
          </div>
        </Bg>
      </div>
    )
  }
}
