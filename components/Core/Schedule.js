import React, { Component } from 'react'
import styled from 'styled-components'
import Map from './GoogleMap';

const Schedules = [
  {
    time: "10.00-10.30",
    schedule: "ลงทะเบียน"
  },
  {
    time: "11.00 - 12.00",
    schedule: "แนะนำตัว และพูดทำความรู้จักกัน"
  },
  {
    time: "12.00 - 13.00",
    schedule: "พักรับประทานอาหารกลางวัน"
  },
  {
    time: "13.00 - 13.20",
    schedule: "Session 1, 2"
  },
  {
    time: "13.20 - 13.30",
    schedule: "พัก"
  },
  {
    time: "13.30 - 13.50",
    schedule: "Session 3, 4"
  },
  {
    time: "13.50 - 14.00",
    schedule: "พัก"
  },
  {
    time: "14.00 - 14.20",
    schedule: "Session 5, 6"
  },
  {
    time: "14.20 - 14.30",
    schedule: "พัก"
  },
  {
    time: "14.30 - 14.50",
    schedule: "Session 7, 8"
  },
  {
    time: "14.50 - 15.00",
    schedule: "พัก"
  },
  {
    time: "15.00 - 15.20",
    schedule: "Session 9, 10"
  },
  {
    time: "15.20 - 15.30",
    schedule: "พัก"
  },
  {
    time: "15.30 - 15.50",
    schedule: "Session 11, 12"
  },
  {
    time: "15.50 - 16.00",
    schedule: "พัก"
  },
  {
    time: "16.00",
    schedule: "ปิดกิจกรรม"
  }
]

const Card = styled.div`
  margin-top: -15vh;
  background-color: rgb(255, 255, 255);
  width: 540px;
  border-radius: 5px;
  padding: 48px 24px;
`

const HText = styled.div`
  font-size: 79px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: rgb(248, 188, 0);
  margin-bottom: 1vh;
` 

const Time = styled.div`
  color: rgb(105, 48, 44);
  font-size: 32px;
  font-weight: bold;
`

const Text = styled.div`
  font-size: 32px;
  margin-bottom: 1rem;
`

const RightSection = styled.div`
  text-align: right;
  margin-top: 15vh;
`
const Bg = styled.div`
  background-image: url('/static/img/IT.png');
  background-repeat: no-repeat;
  background-size: cover;
`

const SecondText = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: right;
  color: rgb(248, 188, 0);
`

const ThirdText = styled.div`
  color: rgb(255, 255, 255);
  font-size: 26px;
`
export default class Schedule extends Component {
  render() {
    return (
      <Bg>
        <div className ="container">
          <div className = "row">
            <div className = "col-6">
              <Card>
                <div className = "container">
                  <HText>SCHEDULE</HText>
                  {
                    Schedules.map((data, index) => (
                      <div key={index}>
                        <Time>{data.time}</Time>
                        <Text>{data.schedule}</Text>
                      </div>
                    ))
                  }
                </div>
              </Card>
            </div>
            <RightSection className = "col-6">
              <HText>LOCATION</HText>
              <SecondText>อาคารเรียนรวม 2</SecondText>
              <ThirdText>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</ThirdText>
            </RightSection>
          </div>
          {/* <Map /> */}
          </div>
        </Bg>
    )
  }
}
