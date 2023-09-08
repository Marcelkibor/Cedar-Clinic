import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaClinicMedical,FaAccessibleIcon } from 'react-icons/fa';
import { clinicalProcess } from './DataFiles/ClinicalProcess';
clinicalProcess


interface NumberIcons {
  [key: number]: React.ReactElement;
}

const numberIcons: NumberIcons = {
  1: <FaClinicMedical />,
  2: <FaAccessibleIcon />,
  3: <FaClinicMedical />,
  4: <FaClinicMedical />,
  5: <FaClinicMedical />,
};

const Timeline: React.FC = () => {
  return (
    <VerticalTimeline>
      {clinicalProcess.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.cardTitle}
          iconStyle={{ background: '#00b894', color: '#fff' }}
          icon={numberIcons[item.id]}
        >
          <h5 style={{color:'#00b894'}}>{item.cardTitle}</h5>
          <h6>{item.cardSubtitle}</h6>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
