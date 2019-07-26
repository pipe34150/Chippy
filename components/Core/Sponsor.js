import React, { Component } from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: auto;
  max-height: 70px;
  padding: 0.5em 1.5em;
`

const SponsorBox = styled.div`
  color: rgb(105, 48, 44);
  background-image: url('/static/img/Top.png');
  width:100vw;
  background-size: cover;
  min-height: 10vh;
  background-repeat: no-repeat;
  padding-top: 15vh;
`

const Bangmod = styled.div`
  margin-top: 3vh;
  background: rgb(240, 240, 240);
  padding-bottom: 25vh;
`

const Images = {
  itForge: "/static/img/ITFORGE.png",
  alchemist: "/static/img/logoAlchemist.png",
  thinc: "/static/img/Thinc.png"
}

export default class Sponsor extends Component {
  render() {
    return (
      <SponsorBox className = "text-center">
        <div className = "container">
          ด้วยรักจึงจัดให้จาก
          <Img src={Images.itForge} /> X
          <Img src={Images.alchemist} /> X
          <Img src={Images.thinc} />
        </div>
        <Bangmod>
          <small>สนับสนุนโดย</small><br/>
          <Img src = "/static/img/bangmod.png" />
        </Bangmod>
      </SponsorBox>
    )
  }
}
