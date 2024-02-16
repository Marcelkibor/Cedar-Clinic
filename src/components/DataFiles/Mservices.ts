import { FaEye,FaRadiation,FaUserInjured, FaBaby } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';
import {RiBodyScanFill} from 'react-icons/ri'
import { IconType } from 'react-icons';
import { GiMedicines } from 'react-icons/gi';
import { BiFemale } from 'react-icons/bi';
type Medical = {
    id:number
    name:string,
    description:string
}
const Mservice:Medical[] = [
    { id: 1, name: 'Out Patient', description: "Experience efficient outpatient care at our clinic, where our dedicated team is committed to providing personalized attention and timely treatment. With our focus on your well-being, you can trust us to deliver comprehensive care that meets your needs effectively." },
    { id: 2, name: 'Pharmacy', description: "Access convenient pharmacy services at our clinic, where your medication needs are our priority. Our experienced pharmacists provide expert guidance and support, ensuring you receive the right medications and advice for your health. From prescription fills to medication management, we're here to help you stay on track with your wellness journey." },
    { id: 3, name: 'Optical', description: 'We offer comprehensive eye exams and personalized consultations to ensure optimal vision correction. Whether you need prescription glasses, contact lenses, or specialized eye care, trust our team to provide precise solutions tailored to your needs. Your vision is our focus, and we are here to help you see the world clearly.' },
    { id: 4, name: 'Radiology', description: 'Access advanced radiology services at our clinic, ensuring accurate diagnosis and treatment planning. Our top-tier technology and expert radiologists deliver precise imaging results promptly, prioritizing your health and well-being.' },
    { id: 5, name: 'Minor Theatre', description: 'Experience efficient minor theater services at our clinic, ensuring swift procedures and optimal care. Our skilled team prioritizes your comfort and safety, delivering precise treatments with attention to detail. Trust us to provide comprehensive minor surgical care tailored to your needs, promoting your well-being every step of the way.' },
    { id: 6, name: 'Obstetric & Gynaecology', description: '. Our experienced team offers personalized consultations, prenatal care, and a range of gynecological services to support your reproductive health journey. From routine check-ups to specialized treatments, trust us to provide compassionate care tailored to your unique needs. Your health and well-being are in good hands with our dedicated obstetric and gynecological treatment.' },
    { id: 7, name: 'Lab Services', description: 'Explore our Lab Services at the clinic, providing a wide range of diagnostic tests to aid in your healthcare journey. From routine blood work and cholesterol checks to specialized tests like allergy panels and cancer screenings, our state-of-the-art lab facilities offer precise and timely results to support your well-being' },
    { id: 8, name: 'Mother & Child Clinic', description: 'Our dedicated team offers a range of services including prenatal care, postnatal support, pediatric check-ups, and vaccinations. With a focus on nurturing both maternal and child health, trust us to provide comprehensive care tailored to your family needs. Your journey to parenthood is supported every step of the way at our clinic.' }
]
const serviceIcons: { [key: number]: IconType } = {
    1: FaUserInjured,
    2: GiMedicines,
    3: FaEye,
    4: FaRadiation,
    5: RiBodyScanFill,
    6: BiFemale,
    7: ImLab,
    8: FaBaby
  };
export {Mservice,serviceIcons};
