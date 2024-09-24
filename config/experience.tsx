import { Link } from '@chakra-ui/react'

export type Company = 'CDS' | 'ArafaGroup' | 'CDS2'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  CDS: {
    name: 'CDS',
    longName: 'CDS Technologies',
    subDetail: 'Software Company',
    url: 'https://cdstech.in/',
    position: 'DevOps Engineer',
    duration: 'Jan 2023 - May 2024',
    logo: {
      light: '/worked_at_logos/deloitte/cds.png',
      dark: '/worked_at_logos/deloitte/cds.png',
    },
    roles: [
      <>
       I have deployed more than 5 projects using various JavaScript-based frameworks on AWS Cloud.
        This experience has allowed me to develop a strong understanding of cloud services and deployment strategies. 
      </>,
      <>
         I focus on optimizing application performance and ensuring reliability in production environments.
          My work involves leveraging AWS features to enhance scalability and maintainability. Through these projects,
           I have honed my skills in cloud management and continuous integration.{' '}
       
      </>
     
    ],
  },
CDS2: {
    name: 'CDS',
    longName: 'CDS Technologies',
    subDetail: 'Software Company',
    url: 'https://cdstech.in/',
    position: 'Frontend Developer',
    duration: 'Jan 2022 - Jan 2023',
    logo: {
      light: '/worked_at_logos/deloitte/cds.png',
      dark: '/worked_at_logos/deloitte/cds.png',
    },
    roles: [
      <>
       As a Frontend Developer specializing in React.js and Next.js, I have successfully completed 2 projects.
        My focus is on creating responsive, user-friendly interfaces and ensuring a seamless experience for end-users.
      </>,
      <>
        Worked as a Lawchat Ai projects{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://lawchat.digivox.ai/"
          target="_blank"
          rel="noreferrer"
        >
          Lawchat AI
        </Link>
      </>
     
    ],
  },
  ArafaGroup: {
    name: 'Arafa Groups',
    longName: 'Arafa Groups',
    subDetail: 'multiple matches for Arafa Group',
    url: 'https://www.arafagroups.com/',
    position: 'Network Engineer & System admin Internship',
    duration: 'May 2022 - Jun 2022',
    logo: {
      light: '/worked_at_logos/scg/logo.png',
      dark: '/worked_at_logos/scg/logo.png',
    },
    roles: [
      <>
        I've tackled diverse networking projects, from
         configuring Linux Apache servers to enabling seamless file
         sharing between Linux and Windows systems. 
  {' '}
        
        
      </>,

      <>
        I'm skilled in Ethernet cable setup, repair, and troubleshooting, alongside
          managing IP address allocation using CIDR notation.
          Additionally, 
      </>,
      <>
       I excel in implementing firewall configurations
          to bolster network security and ensure smooth operations
          across varied environments.{' '}
      
      </>,
    ],
  },
  
}

export const ExperiencesList = [
  Experiences.CDS,
  Experiences.ArafaGroup,
  Experiences.CDS2
]
