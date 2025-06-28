interface Experience {
  id: number;
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  workSummery: string;
}

interface Education {
  id: number;
  universityName: string;
  startDate: string;
  endDate: string;
  degree: string;
  major: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
  rating: number;
}

export interface ResumeInfo {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;
  themeColor: string;
  summery: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

const dummy: ResumeInfo = {
  firstName: 'James',
  lastName: 'Carter',
  jobTitle: 'full stack developer',
  address: '525 N tryon Street, NC 28117',
  phone: '(123)-456-7890',
  email: 'exmaple@gmail.com',
  themeColor: "#ff6666",
  summery: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat recusandae ducimus quis repudiandae alias optio porro eos autem delectus ut, impedit officiis maxime beatae culpa necessitatibus fugit, consectetur ea odio, tenetur saepe quas quod. Nostrum illum a, itaque eos magni eius quidem consequuntur magnam odio porro quia vero libero provident.',
  
  experience: [
    {
      id: 1,
      title: 'Full Stack Developer',
      companyName: 'Amazon',
      city: 'New York',
      state: 'NY',
      startDate: 'Jan 2021',
      endDate: '',
      currentlyWorking: true,
      workSummery: ' Designed, developed, and maintained full-stack applications using React and Node.js. ...'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      companyName: 'Google',
      city: 'Charlotte',
      state: 'NC',
      startDate: 'May 2019',
      endDate: 'Jan 2021',
      currentlyWorking: false,
      workSummery: ' Designed, developed, and maintained full-stack applications using React and Node.js. ...'
    }
  ],
  education: [
    {
      id: 1,
      universityName: 'Western Illinois University',
      startDate: 'Aug 2018',
      endDate: 'Dec:2019',
      degree: 'Master',
      major: 'Computer Science',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...'
    },
    {
      id: 2,
      universityName: 'Western Illinois University',
      startDate: 'Aug 2018',
      endDate: 'Dec:2019',
      degree: 'Master',
      major: 'Computer Science',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...'
    }
  ],
  skills: [
    { id: 1, name: 'Angular', rating: 80 },
    { id: 2, name: 'React', rating: 100 },
    { id: 3, name: 'MySql', rating: 80 },
    { id: 4, name: 'React Native', rating: 100 }
  ]
};

export default dummy;
