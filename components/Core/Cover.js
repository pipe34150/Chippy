import React, { Component } from 'react'
import styled from 'styled-components'

const HeadText = styled.div`
  margin-bottom: 3%;
  margin-top: 10%;
  font-size: 55px;
  font-weight: bold;
  line-height: 1.35;
  color: rgb(105, 48, 44);
`
const BigText = styled.h1`
  color: #69302c;
  margin-bottom: 3%;
  font-size: 55px;
  font-weight: bold;
  line-height: 0.7;
`

const MediumText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: rgb(105, 48, 44);
`

const Button = styled.button`
  cursor: pointer;
  background-color: rgb(105, 48, 44);
  color: rgb(255, 255, 255);
  font-size: 21px;
  width: auto;
  border-width: 0px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  border-radius: 3px;
  padding: 0.4em 1.25em;
  margin-top:1em;
  margin-right:2.5em;

  &:hover{
    background-color : #421714;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: rgb(105, 48, 44);
  font-size: 21px;
  font-weight: 500;

  &:hover{
    color: rgb(105, 48, 44);
  }
`

const Text = styled.span`
  font-size: 21px;
  color: rgb(105, 48, 44);
  font-weight: 500;
`
export default class Cover extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col">
            <HeadText>
              <BigText>ถ้าพูดเยอะอาจจะเจ็บคอ</BigText>  
              <BigText>แต่ถ้ามา Talk n' Chip 2019</BigText>
              <BigText>แล้วพูดไม่พอจะเสียใจ</BigText>
            </HeadText>
            <MediumText>23 กุมพาพันธ์ 2019 ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี อาคารเรียนรวม 2 ชั้น 4 ห้อง 2401 และ 2402</MediumText>
            <Text><Button>ส่งหัวข้อที่จะไปพูดกันเลย !</Button>หรือ <Link href = "/">ดูหัวข้อที่น่าสนใจ></Link></Text>
          </div>
        </div>
      </div>
      
    )
  }
}
