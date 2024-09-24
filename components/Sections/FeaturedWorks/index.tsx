import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text >
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Foodie Ai"
            description="I developed Foodie AI, an application that provides food recipes 
            using Next.js for the frontend and a Python API for backend processing. The app leverages AI to recommend
             recipes based on user preferences and ingredients, offering a personalized cooking experience. 
             It features a clean and intuitive interface, making it easy for users to discover and try new recipes."
            src="/works/Food.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/jeevan-sysadmin/foodieai2.2"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Networking Services Provider Management System"
            description="I developed a Networking Services Provider Management System using Laravel.
             This system streamlines the management of service providers, allowing users to efficiently handle provider information, 
             service requests, and customer interactions. It features a robust backend for data management and an intuitive frontend for user engagement."
            src="/works/net.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/jeevan-sysadmin/Services-Provider-Management-System"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Wallie AI!"
            src="/works/tobira/wallie.png"
            description="Developing a stock prediction AI using the React framework involves leveraging languages like JavaScript, HTML, and
                  CSS for frontend development. Additionally, backend
                    languages like Node.js are utilized for data processing and model implementation."
            height={{ base: '20px', md: '2px', '5xl': '500px' }}
            ctaUrl="https://github.com/jeevan-sysadmin/wallieai2.2"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Hospital-donation-app"
            description="I developed a Hospital Donation App using Flutter. The app aims to facilitate donations for hospitals,
             providing users with an easy way to contribute and support healthcare initiatives. It features a user-friendly interface,
              secure payment processing, and real-time updates on donation impacts."
            src="/works/hos.png"
            height={{ base: '530px', md: '225px', '5xl': '300px' }}
            ctaUrl="https://github.com/jeevan-sysadmin/Hospital-donation-app"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        

        
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
