import { FaEye,FaRadiation,FaUserInjured, FaBaby, FaPeopleArrows } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import {RiBodyScanFill} from 'react-icons/ri'
import { IconType } from 'react-icons';
import { GiMedicines } from 'react-icons/gi';
import {LuScissorsSquare} from 'react-icons/lu';
import { TbDentalBroken } from "react-icons/tb";
import { BiFemale } from 'react-icons/bi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
type Medical = {
    id:number
    name:string,
    description:string
}
const Mservice:Medical[] = [
    { id: 1, name: 'Out Patient', description: "Experience efficient outpatient care at our clinic, where our dedicated team is committed to providing personalized attention and timely treatment. With our focus on your well-being, you can trust us to deliver comprehensive care that meets your needs effectively." },
    { id: 2, name: 'Management: HIV/AIDS', description: "Our team in collaboration with Ampath (PPP) offers comprehensive treatment plans, including antiretroviral therapy, counseling services, and regular monitoring to manage your condition effectively and enhance your overall well-being." },
    { id: 3, name: 'Pharmacy', description: "Access convenient pharmacy services at our clinic, where your medication needs are our priority. Our experienced pharmacists provide expert guidance and support, ensuring you receive the right medications and advice for your health. From prescription fills to medication management, we're here to help you stay on track with your wellness journey." },
    { id: 4, name: 'Optical Services', description: 'We offer comprehensive eye exams and personalized consultations to ensure optimal vision correction. Whether you need prescription glasses, contact lenses, or specialized eye care, trust our team to provide precise solutions tailored to your needs. Your vision is our focus, and we are here to help you see the world clearly.' },
    { id: 5, name: 'Occupational Health', description: 'Benefit from comprehensive occupational health services designed to promote workplace safety and employee well-being. Our expert team provides a range of services including workplace assessments, health screenings, injury management, and health education to ensure a healthy and productive workforce.' },
    { id: 6, name: 'Radiology', description: 'Access advanced radiology services at our clinic, ensuring accurate diagnosis and treatment planning. Our top-tier technology and expert radiologists deliver precise imaging results promptly, prioritizing your health and well-being.' },
    { id: 7, name: 'Surgery', description: 'Experience exceptional surgical care at our facility, where our skilled team is dedicated to providing safe and effective procedures tailored to your needs. From pre-operative consultations to post-operative support, trust us to deliver comprehensive surgical services with precision, compassion, and expertise.' },
    {id: 12,name: "Dental Services",description: "Our dental clinic provides a wide array of services including routine check-ups, cleanings, fillings, root canals, crowns, and cosmetic dentistry procedures. We are dedicated to improve your oral health and give you a confident smile. Visit us for personalized care and treatments tailored to your dental needs."},
    { id: 8, name: 'Minor Theatre', description: 'Experience efficient minor theater services at our clinic, ensuring swift procedures and optimal care. Our skilled team prioritizes your comfort and safety, delivering precise treatments with attention to detail. Trust us to provide comprehensive minor surgical care tailored to your needs, promoting your well-being every step of the way.' },    
    { id: 9, name: 'Obstetric & Gynaecology', description: 'Our experienced team offers personalized consultations, prenatal care, and a range of gynecological services to support your reproductive health journey. From routine check-ups to specialized treatments, trust us to provide compassionate care tailored to your unique needs. Your health and well-being are in good hands with our dedicated obstetric and gynecological treatment.' },
    { id: 10, name: 'Lab Services', description: 'Explore our Lab Services at the clinic, providing a wide range of diagnostic tests to aid in your healthcare journey. From routine blood work and cholesterol checks to specialized tests like allergy panels and cancer screenings, our state-of-the-art lab facilities offer precise and timely results to support your well-being' },
    { id: 11, name: 'Mother & Child Clinic', description: 'Our dedicated team offers a range of services including prenatal care, postnatal support, pediatric check-ups, and vaccinations. With a focus on nurturing both maternal and child health, trust us to provide comprehensive care tailored to your family needs. Your journey to parenthood is supported every step of the way at our clinic.' }
]
const serviceIcons: { [key: number]: IconType } = {
    1: FaUserInjured,
    2: FaPeopleArrows,
    3: GiMedicines,
    4: FaEye,
    5: MdOutlineHealthAndSafety,
    6: FaRadiation,
    7: LuScissorsSquare,
    8: RiBodyScanFill,
    9: BiFemale,
    10: ImLab,
    11: FaBaby,
    12:TbDentalBroken
  };
export {Mservice,serviceIcons};
