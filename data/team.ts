import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: 'Keshava AK',
        role: 'Chairman',
        image: '/assets/members/KESHAVA AK/IMG-20260115-WA0067.jpg',
        bio: 'Leads the IEEE TEMS student chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/keshavaak/' },
        size: 'large'
    },
    {
        id: 2,
        name: 'Amaeya Sesha Narayanan',
        role: 'Vice Chairperson',
        image: '/assets/members/AMAEYA SESHA NARAYANAN/IMG-20260115-WA0071.jpg',
        bio: 'Supports the Chairman and assists in leading the chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/amaeya-sesha-narayanan-57490726a/' },
        size: 'medium',
        imagePosition: 'center 20%'
    },
    {
        id: 3,
        name: 'Mohamed Basheer',
        role: 'Secretary',
        image: '/assets/members/MOHAMED BASHEER/IMG-20260115-WA0064.jpg',
        bio: 'Handles chapter documentation and records.',
        socials: { linkedin: 'https://www.linkedin.com/in/mohamed-basheer/' },
        size: 'small'
    },
    {
        id: 4,
        name: 'Prakhar Srivastava',
        role: 'Treasurer',
        image: '/assets/members/PRAKHAR SRIVASTAV/IMG-20260115-WA0068.jpg',
        bio: "Manages the chapter's finances and budget.",
        socials: { linkedin: 'https://www.linkedin.com/in/prakhar-s39/' },
        size: 'small'
    },
    {
        id: 5,
        name: 'Tamil Adhavan',
        role: 'Technical Lead',
        image: '/assets/members/TAMIL ADHAVAN/IMG-20260115-WA0066.jpg',
        bio: 'Oversees technical projects and activities.',
        socials: { linkedin: 'https://www.linkedin.com/in/tamiladhavan/' },
        size: 'medium'
    },
    {
        id: 6,
        name: 'Kanishq Goud',
        role: 'R&D Lead',
        image: '/assets/members/KANISHQ/kanishq_photo_new.jpeg',
        bio: 'Leads Research & Development initiatives and projects.',
        socials: { linkedin: 'https://www.linkedin.com/in/kanishq-goud/' },
        size: 'small'
    },
    {
        id: 7,
        name: 'Shrinesh T M',
        role: 'Event Management Lead',
        image: '/assets/members/SHRINESH T/IMG-20260115-WA0064.jpg',
        bio: 'Plans and executes chapter events and workshops.',
        socials: { linkedin: 'https://www.linkedin.com/in/shrinesh-t-m-788a29293/' },
        size: 'small'
    },
    {
        id: 8,
        name: 'Sarathi Chandran R',
        role: 'Entrepreneurship Lead',
        image: '/assets/members/SARATHI CHANDRAN/IMG-20260115-WA0072.jpg',
        bio: 'Drives innovative projects and initiatives within the chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/sarathi-chandran-r-10a923323/' },
        size: 'medium'
    },
    {
        id: 9,
        name: 'Akshaya KV',
        role: 'Public Relations Lead',
        image: '/assets/members/AKSHAYA KV/IMG-20260115-WA0075.jpg',
        bio: 'Manages communication and outreach for the chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/akshaya-kv-a30877348/' },
        size: 'small'
    },
    {
        id: 13,
        name: 'Prashanth Reddy',
        role: 'Social Media Lead',
        image: '/assets/members/PRASANTH REDDY/IMG-20260115-WA0080.jpg',
        bio: 'Manages the chapter\'s social media presence and online engagement.',
        socials: { linkedin: 'https://www.linkedin.com/in/prasanth-reddy-7163a0324/' },
        size: 'small',
        imagePosition: 'center 25%'
    },
    {
        id: 10,
        name: 'Didhiti Rai',
        role: 'Industry Connect Lead',
        image: '/assets/members/DIDHITI RAI/IMG-20260115-WA0069.jpg',
        bio: 'Builds relationships between the chapter and industry professionals.',
        socials: { linkedin: 'https://www.linkedin.com/in/didhitirai/' },
        size: 'medium'
    },
    {
        id: 11,
        name: 'Ayisha Hemni K',
        role: 'Creative Lead',
        image: '/assets/members/AYISHA HEMINI/Ayisha_Hemini.jpeg',
        bio: 'Leads creative design and branding initiatives for the chapter.',
        socials: { linkedin: 'https://www.linkedin.com/in/ayisha-hemni-k-952a57287/' },
        size: 'small'
    },
    {
        id: 12,
        name: 'Aryan Gupta',
        role: 'Sponsorship Lead',
        image: '/assets/members/ARYAN GUPTA/IMG-20260115-WA0079.jpg',
        bio: 'Secures sponsorships and funding for chapter events and initiatives.',
        socials: { linkedin: '#' },
        size: 'small'
    }
];

export interface Advisor {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    socials: {
        linkedin?: string;
    };
}

export const ADVISORS: Advisor[] = [
    {
        id: 1,
        name: 'Abishai Gosula',
        role: 'Founding Advisor',
        image: '/assets/members/ABISHAI GOSULA/Abishai_new.jpeg',
        bio: 'An integral pillar in founding IEEE TEMS SRM, Abishai\'s dedication and strategic guidance helped establish the chapter\'s strong foundation for innovation and leadership.',
        socials: { linkedin: 'https://www.linkedin.com/in/abishai-george-e-gosula/' }
    }
];
