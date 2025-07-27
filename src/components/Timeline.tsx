import React from 'react';
import {
  VerticalTimeline as RawVerticalTimeline,
  VerticalTimelineElement as RawVerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { clinicalProcess } from './DataFiles/ClinicalProcess';
import {FaMoneyBill, FaWalking} from 'react-icons/fa'
import {BsCapsulePill} from 'react-icons/bs'
import {GiTalk,GiWeightScale} from 'react-icons/gi'
import { RiSpyLine } from 'react-icons/ri';
clinicalProcess

const VerticalTimeline = RawVerticalTimeline as unknown as React.FC<any>;
const VerticalTimelineElement = RawVerticalTimelineElement as unknown as React.FC<any>;
interface NumberIcons {
  [key: number]: React.ReactElement;
}

const numberIcons: NumberIcons = {
  1: <FaWalking/>,
  2: <GiWeightScale/>,
  3: <GiTalk/>,
  4:<RiSpyLine/>,
  5:<GiTalk/>,
  6: <BsCapsulePill/>,
  7: <FaMoneyBill/>,
  8:<FaWalking style={{ transform: 'scaleX(-1)' }} />
};

const Timeline: React.FC = () => {
  return (
    <VerticalTimeline>
      {clinicalProcess.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.cardTitle}
          contentStyle={{ background: '#58B19F', color: '#fff',height:'180px',fontFamily:'Merriweather serif' }}
          contentArrowStyle={{ borderRight: '7px solid  #58B19F' }}
          iconStyle={{ background: '#58B19F', color: '#fff' }}
          icon={numberIcons[item.id]}
        >
          <p style={{fontSize:'20px',fontWeight:'bold'}}>{item.id}. <span>{item.cardTitle}</span></p>
          <p>{item.cardSubtitle}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;