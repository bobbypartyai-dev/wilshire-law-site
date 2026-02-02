export const FIRM = {
  name: "Wilshire Law Firm",
  phone: "855-977-9094",
  phoneFormatted: "(855) 977-9094",
  phoneTel: "tel:+18559779094",
  email: "info@wilshirelawfirm.com",
  address: "660 S. Figueroa Street Sky Lobby",
  city: "Los Angeles",
  state: "CA",
  zip: "90017",
  fullAddress: "660 S. Figueroa Street Sky Lobby, Los Angeles, CA 90017",
  founded: 2007,
  yearsInBusiness: new Date().getFullYear() - 2007,
  professionals: "500+",
  recovered: "$2 Billion+",
  motto: "We Walk Side by Side with Our Clients",
  hours: "Available 24/7",
};

export const STATS = [
  { label: "Recovered for Clients", value: 2, prefix: "$", suffix: " Billion+", duration: 2 },
  { label: "Legal Professionals", value: 500, suffix: "+", duration: 2.5 },
  { label: "Years of Experience", value: FIRM.yearsInBusiness, suffix: "+", duration: 1.5 },
  { label: "Available", value: 24, suffix: "/7", duration: 1 },
];

export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  longDescription: string;
  subtypes?: string[];
  relatedSettlements?: Settlement[];
}

export interface Settlement {
  amount: string;
  amountNum: number;
  type: string;
}

export interface Attorney {
  name: string;
  title: string;
  role: "Senior Partner" | "Partner";
  initials: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  rating: number;
}

export const SETTLEMENTS: Settlement[] = [
  { amount: "$38.5M", amountNum: 38.5, type: "Motor Vehicle Accident" },
  { amount: "$35.2M", amountNum: 35.2, type: "Truck Accident" },
  { amount: "$28.7M", amountNum: 28.7, type: "School District Liability" },
  { amount: "$18.5M", amountNum: 18.5, type: "Motorcycle Accident" },
  { amount: "$17.1M", amountNum: 17.1, type: "Pedestrian v. Bus" },
  { amount: "$14M", amountNum: 14, type: "Auto v. Truck" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "motor-vehicle-accidents",
    title: "Motor Vehicle Accidents",
    shortTitle: "Auto Accidents",
    icon: "Car",
    description: "Aggressive representation for all types of motor vehicle accident victims. We fight for maximum compensation.",
    longDescription: "Motor vehicle accidents can change your life in an instant. At Wilshire Law Firm, our dedicated team of over 500 legal professionals has recovered billions of dollars for accident victims across California. Whether you've been in a car crash, truck collision, motorcycle accident, or any other motor vehicle incident, we have the expertise and resources to fight for the maximum compensation you deserve. We handle all aspects of your case — from investigating the accident scene to negotiating with insurance companies to taking your case to trial if necessary.",
    subtypes: ["Car Accidents", "Truck Accidents", "Motorcycle Accidents", "Pedestrian Accidents", "Bicycle Accidents", "Uber/Lyft Accidents", "Taxi Accidents", "Bus Accidents"],
    relatedSettlements: [
      { amount: "$38.5M", amountNum: 38.5, type: "Motor Vehicle Accident" },
      { amount: "$35.2M", amountNum: 35.2, type: "Truck Accident" },
      { amount: "$18.5M", amountNum: 18.5, type: "Motorcycle Accident" },
    ],
  },
  {
    slug: "sexual-abuse",
    title: "Sexual Abuse",
    shortTitle: "Sexual Abuse",
    icon: "ShieldAlert",
    description: "Compassionate, confidential legal support for survivors of sexual abuse. Your courage deserves justice.",
    longDescription: "Survivors of sexual abuse deserve compassionate, dedicated legal representation. Wilshire Law Firm provides confidential and sensitive handling of sexual abuse cases, fighting tirelessly to hold perpetrators and negligent institutions accountable. Our experienced attorneys understand the profound impact of abuse and work to secure justice and compensation for medical care, therapy, lost wages, and pain and suffering. We believe every survivor deserves to be heard, respected, and supported throughout the legal process.",
    relatedSettlements: [
      { amount: "$28.7M", amountNum: 28.7, type: "School District Liability" },
    ],
  },
  {
    slug: "slip-fall",
    title: "Slip & Fall",
    shortTitle: "Slip & Fall",
    icon: "AlertTriangle",
    description: "Property owners must maintain safe premises. If you've been injured in a slip and fall, we can help.",
    longDescription: "Slip and fall accidents can result in serious injuries including broken bones, head trauma, and spinal cord damage. Property owners and managers have a legal duty to maintain safe premises for visitors, tenants, and customers. When they fail in this duty, Wilshire Law Firm is here to hold them accountable. Our attorneys have extensive experience proving liability in premises liability cases and securing significant compensation for our clients' injuries, medical bills, and lost income.",
  },
  {
    slug: "dog-bite",
    title: "Dog Bite",
    shortTitle: "Dog Bite",
    icon: "Dog",
    description: "Dog bite injuries can be severe and traumatic. We hold negligent pet owners accountable.",
    longDescription: "Dog bite injuries can be devastating, causing severe physical wounds, infections, scarring, and lasting emotional trauma. In California, dog owners are strictly liable for bite injuries, meaning you don't need to prove the owner was negligent. Wilshire Law Firm's experienced attorneys understand the complexities of dog bite law and work diligently to secure full compensation for medical treatment, reconstructive surgery, psychological counseling, and pain and suffering.",
  },
  {
    slug: "wrongful-death",
    title: "Wrongful Death",
    shortTitle: "Wrongful Death",
    icon: "Heart",
    description: "When negligence takes a loved one, our compassionate attorneys fight for justice on behalf of families.",
    longDescription: "Losing a loved one due to someone else's negligence is an unimaginable tragedy. Wilshire Law Firm's wrongful death attorneys provide compassionate, dedicated representation to grieving families seeking justice and accountability. We understand that no amount of money can replace your loved one, but we fight to secure compensation that can help cover funeral expenses, lost income, loss of companionship, and provide financial security for your family's future.",
  },
  {
    slug: "product-liability",
    title: "Product Liability",
    shortTitle: "Product Liability",
    icon: "Package",
    description: "Defective products cause thousands of injuries annually. We hold manufacturers accountable.",
    longDescription: "When defective or dangerous products cause injuries, the manufacturers, distributors, and retailers responsible must be held accountable. Wilshire Law Firm has the resources and expertise to take on major corporations and fight for the compensation you deserve. Our product liability attorneys handle cases involving defective vehicles, dangerous medications, faulty medical devices, contaminated food products, and other hazardous consumer goods.",
  },
  {
    slug: "personal-injury",
    title: "Other Personal Injury",
    shortTitle: "Personal Injury",
    icon: "UserCheck",
    description: "Comprehensive personal injury representation for all types of accidents and injuries.",
    longDescription: "Wilshire Law Firm handles a wide range of personal injury cases beyond the specific categories listed. Whether you've suffered a neck injury, broken bones, catastrophic injuries, spine injuries, brain injuries, or burn injuries, our team has the expertise to pursue maximum compensation. We handle each case with dedication and the full weight of our 500+ member legal team, ensuring no detail is overlooked in your pursuit of justice.",
    subtypes: ["Neck Injuries", "Broken Bone Injuries", "Catastrophic Injuries", "Spine Injuries", "Brain Injuries", "Burn Injuries"],
  },
  {
    slug: "employment-rights",
    title: "Employment Rights",
    shortTitle: "Employment",
    icon: "Briefcase",
    description: "Protecting workers' rights against unfair wages, discrimination, and workplace violations.",
    longDescription: "Every worker deserves fair treatment, proper compensation, and a safe workplace. Wilshire Law Firm's Employment Rights department, led by Senior Partner John G. Yslas, fights for employees who have been victims of wage theft, unpaid overtime, meal and rest break violations, discrimination, harassment, wrongful termination, and other workplace violations. We handle individual claims as well as class action lawsuits to hold employers accountable.",
  },
  {
    slug: "class-action",
    title: "Class Action Lawsuits",
    shortTitle: "Class Action",
    icon: "Users",
    description: "Strength in numbers. We represent groups of individuals harmed by the same corporate wrongdoing.",
    longDescription: "When corporations engage in practices that harm large groups of people, class action lawsuits provide a powerful mechanism for justice. Wilshire Law Firm has the scale, resources, and legal expertise to prosecute complex class action cases against major corporations. Our class action attorneys have recovered significant settlements for groups of consumers, employees, and other individuals who have been wronged by deceptive business practices, defective products, or labor violations.",
  },
];

export const ATTORNEYS: Attorney[] = [
  { name: "Colin M. Jones, Esq.", title: "Senior Partner & Senior Trial Attorney, Chair of Personal Injury Litigation Dept", role: "Senior Partner", initials: "CJ" },
  { name: "John G. Yslas, Esq.", title: "Senior Partner, Chair of Employment Wage & Hour Class Action Dept", role: "Senior Partner", initials: "JY" },
  { name: "Tyler J. Woods, Esq.", title: "Senior Partner", role: "Senior Partner", initials: "TW" },
  { name: "Mary Lee Caruso, Esq.", title: "Partner", role: "Partner", initials: "MC" },
  { name: "Jennifer P. Burkes, Esq.", title: "Partner", role: "Partner", initials: "JB" },
  { name: "Nicol Hajjar, Esq.", title: "Partner", role: "Partner", initials: "NH" },
  { name: "Benjamin Haber, Esq.", title: "Partner", role: "Partner", initials: "BH" },
  { name: "Megan Koster, Esq.", title: "Partner", role: "Partner", initials: "MK" },
  { name: "Thiago M. Coelho, Esq.", title: "Partner", role: "Partner", initials: "TC" },
  { name: "Arrash Fattahi, Esq.", title: "Partner", role: "Partner", initials: "AF" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "I definitely recommend Wilshire Law Firm. I really could have not dealt with insurance companies, get all the medical attention that I needed and get a good settlement from the insurance parties without the help and expertise of Wilshire Law Firm.",
    author: "Soheil M.",
    rating: 5,
  },
  {
    quote: "Wilshire Law provided a service that is most closely compared to the concierge service on my American Express. They provided me with a dedicated line that gave me access to my case manager at any time.",
    author: "Rohan G.",
    rating: 5,
  },
  {
    quote: "Staff is very friendly and super knowledgeable. My attorney was amazing at settling the case and the lien specialist was fast and very efficient.",
    author: "Chris M.",
    rating: 5,
  },
  {
    quote: "The customer service and responsiveness provided throughout the entire process were excellent. From day one through the end, I was always well informed.",
    author: "Christina A.",
    rating: 5,
  },
  {
    quote: "From day one, I received professional care from this outstanding law firm. They helped me reach a substantial settlement.",
    author: "Moin E.",
    rating: 5,
  },
  {
    quote: "This law firm truly came through for me and has been very helpful and thorough since I first reached out.",
    author: "Christopher F.",
    rating: 5,
  },
];

export const BILL_OF_RIGHTS = [
  { title: "Confidentiality", description: "Your personal information and case details are kept strictly confidential." },
  { title: "Full Disclosure", description: "We keep you fully informed about every aspect of your case at all times." },
  { title: "Diligent Approach", description: "We pursue every case with thorough preparation and aggressive advocacy." },
  { title: "Respect & Courtesy", description: "Every client is treated with the utmost respect and professionalism." },
  { title: "Ethical Standards", description: "We maintain the highest ethical standards in everything we do." },
  { title: "Ultimate Decision Power", description: "You always have the final say in all decisions regarding your case." },
  { title: "No Fees Unless You Get Paid", description: "You pay nothing unless we win your case. That's our guarantee." },
];

export const VALUE_PROPS = [
  { title: "Powerhouse Team", description: "500+ legal professionals fighting for you", icon: "Users" },
  { title: "Top Medical Care", description: "Access to the best medical treatment available", icon: "Stethoscope" },
  { title: "No Money Upfront", description: "Zero fees until we win your case", icon: "DollarSign" },
  { title: "Ride Assistance", description: "Transportation to and from appointments", icon: "Car" },
  { title: "Maximum Compensation", description: "We fight for every dollar you deserve", icon: "TrendingUp" },
  { title: "As Seen on TV", description: "Featured on major news networks", icon: "Tv" },
];

export const AWARDS = [
  "Best Law Firms — U.S. News & World Report (2020–2026)",
  "AV-Preeminent Rated",
  "Top 100 Personal Injury Settlements in CA — TopVerdict.com",
  "Super Lawyers Rising Stars",
  "ABOTA Member",
  "Multi-Million Dollar Advocates Forum",
];
