import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { clinicalProcess } from './DataFiles/ClinicalProcess';
import {FaWalking} from 'react-icons/fa'
import {RiScales2Line} from 'react-icons/ri'
import {BiTransfer} from 'react-icons/bi'
import {BsCapsulePill} from 'react-icons/bs'
import {GiTalk,GiWeightScale} from 'react-icons/gi'
clinicalProcess


interface NumberIcons {
  [key: number]: React.ReactElement;
}

const numberIcons: NumberIcons = {
  1: <FaWalking/>,
  2: <GiWeightScale/>,
  3: <GiTalk/>,
  4: <BsCapsulePill/>,
  5: <BiTransfer/>,
  6:<FaWalking style={{ transform: 'scaleX(-1)' }} />
};

const Timeline: React.FC = () => {
  return (
    <VerticalTimeline>
      {clinicalProcess.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.cardTitle}
          contentStyle={{ background: '#58B19F', color: '#fff',height:'180px' }}
          contentArrowStyle={{ borderRight: '7px solid  #58B19F' }}
          iconStyle={{ background: '#58B19F', color: '#fff' }}
          icon={numberIcons[item.id]}
        >
          <h4 style={{color:'white'}}>{item.id}. <span>{item.cardTitle}</span></h4>
          <h6>{item.cardSubtitle}</h6>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
