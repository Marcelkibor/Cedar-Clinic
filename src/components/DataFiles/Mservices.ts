import { FaRadiation, FaMicroscope, FaHands, FaHeadSideCough } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import { TbVaccine } from 'react-icons/tb';
import { GiKidneys, GiCancer } from 'react-icons/gi';
import { IconType } from 'react-icons';
type Medical = {
    id:number
    name:string,
    description:string
}
const Mservice:Medical[] = [
    { id: 1, name: 'Radiology', description: 'Experience exceptional radiation therapy at our clinic: compassionate care, and remarkable outcomes.' },
    { id: 2, name: 'Oncology Services', description: 'Our Comprehensive Oncology Centre is fully equipped with the latest state of the art equipment for cancer diagnosis and treatment.' },
    { id: 3, name: 'Histopathology', description: 'New radiology services' },
    { id: 4, name: 'Palliative Care', description: 'New radiology services' },
    { id: 5, name: 'Renal Services', description: 'Our clinic offers specialized renal services to support and manage kidney-related conditions and treatments.' },
    { id: 6, name: 'Tuberculosis (TB)', description: 'Our clinic provides diagnosis, treatment, and management services for tuberculosis (TB) to ensure the health and well-being of our patients.' },
    { id: 7, name: 'Lab Services', description: 'Our clinic provides comprehensive lab services to meet your healthcare needs.' },
    { id: 8, name: 'Vaccine Therapy', description: 'Discover the transformative power of vaccine therapy at our clinic: compassionate guidance, and remarkable results.' }
]
const serviceIcons: { [key: number]: IconType } = {
    1: FaRadiation,
    2: GiCancer,
    3: FaMicroscope,
    4: FaHands,
    5: GiKidneys,
    6: FaHeadSideCough,
    7: ImLab,
    8: TbVaccine
  };
export {Mservice,serviceIcons};
