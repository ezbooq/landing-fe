import CarDetailing from "../public/cardetailing.jpg";
import CarWash from "../public/carwash.jpg";
import HomeCleaning from "../public/carcleaning.jpg";
import PetGroomers from "../public/petgrooming.jpg";
import DogWalker from "../public/petwalking.jpeg";
import CarpetCleaning from "../public/Carpet cleaning.jpg";
import Accountant from "../public/accountent.jpg";
import PoolCleaning from "../public/pool cleaning.jpg";
import LawnCare from "../public/Lawn care.jpg";
import MovingBusiness from "../public/Moving Business.jpeg";
import NailSaloon from "../public/Nail-Salon.webp";
import Spa from "../public/Spa.jpg";
import Massage from "../public/massage.jpg";	
import GutterCleaning from "../public/gutter cleaning.jpg";
import Lawyers from "../public/lawyers.jpeg";
import Tutors from "../public/tutors.jpg";
import Consultation from "../public/consultation.jpg";
import Coaches from "../public/couches.jpg";

export const Industries = [
  {
    id: "1",
    title: "Car Detailing",
    slug: "car-detailing",
    image: [CarDetailing, CarWash],
    subTitle1: "Streamlined Service Management",
    description1:
      "At EzBooq, we transform your car detailing business with streamlined scheduling, real-timeanalytics, and automated invoicing. Focus on delivering pristine results while our platform optimizes every appointment and minimizes administrative burdens.",
    subTitle2: "Customer-Centric Growth",
    description2:
      "Manage service records, assign skilled technicians, and send timely reminders using our intuitive dashboard. EzBooq integrates seamlessly into your workflow, reducing paperwork and boosting repeat business. Enhance customer satisfaction with digital payment options and personalized service that drives reputation and growth.",
    features: [
      "Keep your schedule full and organized by reducing last-minute cancellations with automated appointment reminders.",
      "Assign the right technician for each job based on past service history and expertise.",
      "peed up payment collection with automated invoicing and secure digital transactions.",
      "Build long-term customer loyalty by offering personalized service recommendations based on vehicle history.",
    ],
  },
  {
    id: "2",
    title: "Car Wash",
    slug: "car-wash",
    image: [CarWash],
    subTitle1: "Efficient Operations",
    description1:
      "EzBooq propels your car wash business with automated scheduling, secure payment processing, and intelligent reporting. It also delivers spotless service while our platform minimizes wait times and streamlines daily operations seamlessly.",
    subTitle2: "Enhanced Customer Experience",
    description2:
      "Coordinate teams, track chemical usage, and manage memberships from one centralized interface. EzBooq’s real-time insights allow you to optimize workflows and enhance service quality. Automate billing and send reminders effortlessly to ensure a consistently superior, customer-focused car wash experience.",
    features: [
      "Eliminate long wait times by allowing customers to book in advance and track service status in real-time.",
      "Reduce chemical waste and manage supplies efficiently to cut unnecessary costs.",
      "Automate membership renewals and payments to ensure steady revenue without chasing customers.",
      "Keep customers coming back with consistent service quality and timely maintenance reminders.",
    ],
  },
  {
    id: "3",
    title: "Home Cleaning",
    slug: "home-cleaning",
    image: [HomeCleaning],
    subTitle1: "Simplified Booking & Management",
    description1:
      "EzBooq revolutionizes your home cleaning services with a user-friendly booking system, automated invoicing, and real-time tracking. Focus on delivering impeccable cleaning while our platform handles scheduling and follow-ups smoothly.",
    subTitle2: "Optimized Service Delivery",
    description2:
      "Assign cleaning crews, optimize routes, and automate follow-up communications with ease. EzBooq centralizes operations and inventory management to ensure consistent quality. Enhance customer satisfaction through digital payments, prompt reminders, and seamless rescheduling that drives loyal, repeat business.",
    features: [
      "Prevent double bookings and missed appointments with an automated scheduling system that keeps everything on track.",
      "Get paid faster with seamless invoicing and easy online payment options for clients.",
      "Reduce travel time and fuel costs by optimizing routes for your cleaning staff.",
      "Keep customers happy and informed with real-time updates on job progress and completion.",
    ],
  },
  {
    id: "4",
    title: "Pet Groomers",
    slug: "pet-groomers",
    image: [PetGroomers],
    subTitle1: "Streamlined Appointment Scheduling",
    description1:
      "EzBooq simplifies pet grooming with flexible booking, automated reminders, and secure payment options. Delight pet owners by providing stress-free appointments and personalized grooming services every time.",
    subTitle2: "Personalized Client Engagement",
    description2:
      "Manage client preferences, track grooming sessions, and promote retail products from one intuitive dashboard. EzBooq automates follow-ups and invoicing, enabling you to deliver tailored services that keep pet owners returning and foster a reputation for exceptional care.",
    features: [
      "Minimize last-minute cancellations with automated reminders that keep your schedule organized.",
      "Store detailed pet profiles to provide a stress-free grooming experience tailored to each animal’s needs.",
      "Make payments hassle-free with automated billing and easy checkout options.",
      "Keep pet owners coming back with personalized follow-ups and exclusive loyalty rewards.",
    ],
  },
  {
    id: "5",
    title: "Dog Walker",
    slug: "dog-walker",
    image: [DogWalker],
    subTitle1: "Optimized Scheduling & Tracking",
    description1:
      "Our solution elevates your dog walking service with efficient scheduling, real-time route tracking, and automated notifications. Build trust by offering transparent, reliable service that pet owners can depend on.",
    subTitle2: "Seamless Service Coordination",
    description2:
      "Assign dog walkers, coordinate routes, and send detailed walk updates through our intuitive platform. EzBooq’s integrated GPS tracking and appointment management ensure timely, hassle-free service. Enjoy smoother communication and prompt billing that converts new inquiries into loyal, repeat clients.",
    features: [
      "Plan efficient walking routes to save time and take on more clients each day.",
      "Give pet owners peace of mind with real-time updates and check-ins during walks.",
      "Eliminate billing confusion with automatic invoicing and payment tracking.",
      "Secure steady bookings with recurring appointments and membership plans.",
    ],
  },
  {
    id: "6",
    title: "Carpet Cleaning",
    slug: "carpet-cleaning",
    image: [CarpetCleaning],
    subTitle1: "Quick Booking & Efficient Workflow",
    description1:
      "This portal transforms carpet cleaning with rapid booking, automated estimates, and streamlined invoicing. Deliver spotless results while focusing on quality service and efficient scheduling without administrative delays.",
    subTitle2: "Enhanced Operational Control",
    description2:
      "Effortlessly manage job assignments, track cleaning supplies, and automate follow-up communications. EzBooq’s real-time analytics and digital invoicing simplify workflows, ensuring consistent service quality. Enhance customer trust with transparent pricing and swift scheduling that maximizes repeat business.",
    features: [
      "Reduce scheduling conflicts by automating bookings and service requests.",
      "Improve cash flow with instant digital invoices and online payments.",
      "Track equipment usage and cleaning supplies to avoid running out unexpectedly.",
      "Keep clients coming back by sending timely reminders for deep cleaning services.",
    ],
  },
  {
    id: "7",
    title: "Pool Cleaning",
    slug: "pool-cleanig",
    image: [PoolCleaning],
    subTitle1: "Simplified Service Scheduling",
    description1:
      "EzBooq redefines pool cleaning with a simple booking system, route optimization, and precise chemical tracking. Keep pools pristine while our platform manages your schedule efficiently, reducing delays.",
    subTitle2: "Optimized Maintenance & Communication",
    description2:
      "Coordinate service teams, monitor water quality, and automate maintenance reminders through our centralized dashboard. EzBooq streamlines operational tasks and enhances customer communication, ensuring timely services.",
    features: [
      "Avoid last-minute cancellations with appointment reminders and real-time service updates.",
      "Keep pool maintenance efficient by tracking water quality and chemical levels automatically.",
      "Simplify billing with digital invoices and secure online payments.",
      "Increase repeat business with personalized service plans for each client.",
    ],
  },
  {
    id: "8",
    title: "Lawn Care",
    slug: "lawn-care",
    image: [LawnCare],
    subTitle1: "Streamlined Scheduling & Billing",
    description1:
      "EzBooq elevates lawn care services with an intuitive scheduling system, automated billing, and efficient route planning. Focus on cr eating lush landscapes while our platform handles administrative tasks smoothly.",
    subTitle2: "Optimized Crew Management",
    description2:
      "Assign teams, schedule recurring visits, and send automatic service reminders from a centralized dashboard. EzBooq’s real-time insights help optimize resource allocation and track inventory efficiently.",
    features: [
      "Ensure a smooth schedule by automating appointment bookings and reminders.",
      "Increase efficiency by assigning the right crew for each lawn care job.",
      "Monitor equipment and track material usage to prevent waste and extra costs.",
      "Retain clients by offering seasonal service plans and timely follow-ups.",
    ],
  },
  {
    id: "9",
    title: "Moving Business",
    slug: "moving-business",
    image: [MovingBusiness],
    subTitle1: "Seamless Booking & Coordination",
    description1:
      "EzBooq streamlines your moving business with automated scheduling, digital estimates, and real-time driver tracking. Deliver prompt, professional relocations while our platform minimizes delays and simplifies logistics.",
    subTitle2: "Integrated Relocation Management",
    description2:
      "Coordinate move crews, generate instant quotes, and manage routes from a centralized dashboard. EzBooq automates invoicing and securely tracks inventory, ensuring transparent, stress-free moves.",
    features: [
      "Reduce customer stress by providing real-time tracking updates during the move.",
      "Prevent scheduling conflicts with an automated booking system that keeps everything organized.",
      "Avoid lost or misplaced items by maintaining an accurate inventory list.",
      "Boost customer trust by offering clear pricing, easy quotes, and digital invoices.",
    ],
  },
  {
    id: "10",
    title: "Nail saloon",
    slug: "nail-saloon",
    image: [NailSaloon],
    subTitle1: "Effortless Appointment Management",
    description1:
      "EzBooq revitalizes nail salon operations with seamless booking, automated reminders, and integrated payment options. Create a luxurious experience while our platform streamlines your daily scheduling and service management.",
    subTitle2: "Enhanced Client Engagement",
    description2:
      "Assign technicians, track supply usage, and automate promotions via a centralized dashboard. EzBooq delivers real-time scheduling insights and digital payment integration that enhance service delivery and cultivate repeat business.",
    features: [
      "Fill appointment slots efficiently by minimizing cancellations with automated reminders.",
      "Speed up checkout with seamless digital payment options for customers.",
      "Keep supplies stocked by tracking inventory and product usage accurately.",
      "Encourage repeat visits with personalized offers based on past services.",
    ],
  },
  {
    id: "11",
    title: "Spa",
    slug: "spa",
    image: [Spa],
    subTitle1: "Elegant Scheduling & Booking",
    description1:
      "We transform spa management with an elegant booking system, automated reminders, and secure client records. Focus on delivering relaxing, personalized treatments while our platform handles the administrative details.",
    subTitle2: "Optimized Service & Resource Management",
    description2:
      "Manage treatment schedules, track product usage, and send wellness follow-ups via our intuitive dashboard. EzBooq’s real-time analytics streamline resource allocation and boost client satisfaction. Deliver consistently rejuvenating experiences that drive loyalty and elevate your spa’s reputation.",
    features: [
      "Avoid no-shows and gaps in scheduling with automated appointment confirmations.",
      "Keep clients relaxed by offering a seamless check-in and payment experience.",
      "Maintain an organized inventory to prevent product shortages.",
      "Increase customer retention with personalized wellness plans and follow-ups.",
    ],
  },
  {
    id: "12",
    title: "Massage",
    slug: "massage",
    image: [Massage],
    subTitle1: "Streamlined Session Scheduling",
    description1:
      "EzBooq empowers massage therapy practices with a streamlined scheduling system, automated reminders, and secure payment processing. Focus on delivering therapeutic treatments while our platform handles appointments efficiently.",
    subTitle2: "Efficient Client Management",
    description2:
      "Manage session bookings, track individual preferences, and automate billing seamlessly with our intuitive dashboard. EzBooq simplifies follow-up communications and digital invoicing, enhancing client satisfaction and ensuring your massage practice runs smoothly and profitably.",
    features: [
      "Prevent last-minute cancellations with automated reminders that keep clients accountable.",
      "Offer a tailored experience by tracking client preferences and past sessions.",
      "Speed up transactions with digital invoices and secure payment options.",
      "Keep clients engaged with personalized wellness packages and follow-up messages.",
    ],
  },
  {
    id: "13",
    title: "Gutter Cleaning",
    slug: "gutter-cleaning",
    image: [GutterCleaning],
    subTitle1: "Efficient Booking & Coordination",
    description1:
      "EzBooq revolutionizes gutter cleaning services with an efficient scheduling system, automated reminders, and integrated payment solutions. Focus on delivering timely,professional cleaning while our platform reduces administrative hassle.",
    subTitle2: "Streamlined Service Execution",
    description2:
      "Coordinate cleaning crews, schedule maintenance visits, and automate customer notifications using our centralized dashboard. EzBooq simplifies inventory tracking and optimizes resource allocation, ensuring consistent service quality and enhanced customer satisfaction that builds trust and encourages repeat business.",
    features: [
      "Eliminate scheduling conflicts by automating appointment bookings and reminders.",
      "Get jobs done faster by optimizing routes for efficiency.",
      "Track materials and supplies to prevent waste and manage costs effectively.",
      "Build long-term customer relationships with regular maintenance plans.",
    ],
  },
  {
    id: "14",
    title: "Lawyers",
    slug: "lawyers",
    image: [Lawyers],
    subTitle1: "Professional Appointment Management",
    description1:
      "EzBooq empowers legal practices with an intuitive scheduling system, automated reminders, and secure client management. Focus on case preparation and consultation while our platform handles routine administrative tasks efficiently.",
    subTitle2: "Enhanced Client Interaction",
    description2:
      "Manage client appointments, track consultation histories, and automate follow-up communications with ease. EzBooq’s centralized dashboard supports secure virtual meetings and simplifies billing, ensuring your legal practice operates smoothly while building lasting professional relationships.",
    features: [
      "Save valuable time by automating appointment scheduling and reducing missed meetings.",
      "Securely manage case files and client documents for easy access",
      "Avoid billing disputes with clear, automated invoices and tracking.",
      "Strengthen client relationships with timely follow-ups and legal updates.",
    ],
  },
  {
    id: "15",
    title: "Accountant",
    slug: "accountant",
    image: [Accountant],
    subTitle1: "Streamlined Scheduling & Invoicing",
    description1:
      "EzBooq simplifies accounting services with automated appointment scheduling, digital invoicing, and secure data management. Focus on delivering expert financial advice while our platform handles routine administrative tasks seamlessly.",
    subTitle2: "Optimized Client Engagement",
    description2:
      "Enhance your financial consultancy with a centralized dashboard that manages appointments, records, and precise invoicing. EzBooq automates follow-up communications and offers real-time analytics, allowing you to build lasting client relationships and ensure transparency and efficiency in every transaction.",
    features: [
      "Reduce administrative work by automating appointment bookings and client follow-ups.",
      "Ensure accurate record-keeping with secure digital document management.",
      "Streamline invoicing and payment tracking for faster transactions.",
      "Improve client satisfaction with automated tax reminders and financial insights.",
    ],
  },
  {
    id: "16",
    title: "All Tutors",
    slug: "all-tutors",
    image: [Tutors],
    subTitle1: "Effortless Lesson Scheduling",
    description1:
      "EzBooq empowers tutors with an integrated scheduling system, automated reminders, and secure payment options. Focus on delivering quality education while our platform handles lesson bookings efficiently.",
    subTitle2: "Enhanced Educational Management",
    description2:
      "Streamline class scheduling, track student progress, and automate fee collection through our intuitive dashboard. EzBooq centralizes lesson management and communications, ensuring seamless interactions, timely session updates, and improved operational efficiency that enhances student satisfaction and tutor reputation.",
    features: [
      "Prevent scheduling mix-ups by automating lesson bookings and reminders.",
      "Track student progress easily with organized digital records.",
      "Get paid on time with seamless invoicing and payment options.",
      "Keep students engaged with personalized learning plans and feedback.",
    ],
  },
  {
    id: "17",
    title: "All Consultation",
    slug: "all-consultation",
    image: [Consultation],
    subTitle1: "Simplified Appointment Booking",
    description1:
      "We enhance consultation services with streamlined scheduling, secure virtual meeting integrations, and automated follow-up reminders. Focus on delivering expert advice while our platform simplifies client interactions and meeting logistics.",
    subTitle2: "Efficient Session Management",
    description2:
      "Facilitate seamless consultations with a centralized dashboard that manages appointments, records outcomes, and automates communications. EzBooq supports secure video calls, digital documentation, and personalized follow-up messages, ensuring every session runs smoothly and builds lasting professional relationships.",
    features: [
      "Save time by automating appointment scheduling and avoiding last-minute cancellations.",
      "Keep client records secure and accessible for seamless consultation sessions.",
      "Simplify invoicing and payment collection with automated systems.",
      "Strengthen client relationships with personalized follow-ups and insights.",
    ],
  },
  {
    id: "18",
    title: "All coaches",
    slug: "all-coaches",
    image: [Coaches],
    subTitle1: "Integrated Session Scheduling",
    description1:
      "EzBooq empowers coaches with an intuitive scheduling system, automated reminders, and secure payment integration. Focus on providing personalized guidance while our platform streamlines session bookings and client communications effortlessly.",
    subTitle2: "Optimized Coaching Experience",
    description2:
      "Elevate your practice with a centralized dashboard that manages appointments, tracks progress, and automates follow-ups. EzBooq’s real-time insights and communication tools ensure smoother client interactions and efficient session management, driving conversions and long-term growth in your coaching business.",
    features: [
      "Manage multiple clients efficiently with automated appointment scheduling.",
      "Track client progress with detailed session history and personalized plans.",
      "Ensure hassle-free payments with automated invoicing and reminders.",
      "Boost client engagement with follow-ups, challenges, and personalized support.",
    ],
  },
];
