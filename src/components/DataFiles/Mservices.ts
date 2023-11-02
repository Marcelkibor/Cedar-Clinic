import { FaHands, FaHeadSideCough } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import {RiBodyScanFill} from 'react-icons/ri'
import{MdSick} from 'react-icons/md'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {LuTablets} from 'react-icons/lu'
import { TbVaccine } from 'react-icons/tb';
import { IconType } from 'react-icons';
type Medical = {
    id:number
    name:string,
    description:string
}
const Mservice:Medical[] = [
    { id: 1, name: 'Primary Care Services', description: "Experience comprehensive primary care at our clinic, where your health and well-being are our top priorities. Our primary care services include regular check-ups, diagnosis and treatment of common health conditions" },
    { id: 2, name: 'Chronic Management', description: "Explore our Chronic Disease Management services at the clinic, designed to provide continuous care and support for individuals with long-term health conditions such as diabetes, hypertension, and heart disease. Our expert team ensures you receive personalized, effective management to help you lead a healthier life." },
    { id: 3, name: 'Allergy Treatment', description: 'Our comprehensive services include thorough evaluations, allergy testing, and tailored treatment plans, which may involve allergy shots (immunotherapy), medications, or lifestyle adjustments, all aimed at ensuring your comfort and well-being' },
    { id: 4, name: 'Pharmacy Services', description: 'Our on-site pharmacy team is dedicated to streamlining your healthcare experience by ensuring timely prescription fulfillment. We offer professional guidance, making it hassle-free for you to understand and manage your medications, all while focusing on your health and well-being.' },
    { id: 5, name: 'Physical Therapy', description: 'Our experienced team offers personalized rehabilitation plans tailored to your unique needs, whether you are recovering from surgery, managing a sports injury, or seeking relief from chronic pain. We employ a range of techniques, including manual therapy, therapeutic exercises' },
    { id: 6, name: 'Tuberculosis(TB)', description: 'Our clinic provides diagnosis, treatment, and management services for tuberculosis (TB) to ensure the health and well-being of our patients.' },
    { id: 7, name: 'Lab Services', description: 'Explore our Lab Services at the clinic, providing a wide range of diagnostic tests to aid in your healthcare journey. From routine blood work and cholesterol checks to specialized tests like allergy panels and cancer screenings, our state-of-the-art lab facilities offer precise and timely results to support your well-being' },
    { id: 8, name: 'Vaccine Therapy', description: 'Discover the transformative power of vaccine therapy at our clinic: compassionate guidance, and remarkable results.' }
]
const serviceIcons: { [key: number]: IconType } = {
    1: FaHands,
    2: MdOutlineManageAccounts,
    3: MdSick,
    4: LuTablets,
    5: RiBodyScanFill,
    6: FaHeadSideCough,
    7: ImLab,
    8: TbVaccine
  };
export {Mservice,serviceIcons};
