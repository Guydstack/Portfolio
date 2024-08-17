import { useState, useEffect, useRef } from 'react';
import ProjectCard from './Pages/ProjectCard';
import { Box, Heading, Text, Stack, Flex, Link, Avatar,List, ListItem, ListIcon, UnorderedList, Button } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaChevronRight, FaChevronDown } from "react-icons/fa";
import EmailPopover from './Pages/EmailPopOver';
import EducationSection from './Pages/EducationSection';


const projects = [
  {
    title: "E-commerce Website",
    description: "An online store with a user login, order history, search bar, and checkout via PayPal or credit card. Features email automation. Built with React, Node.js, Firebase, and Chakra UI.",
    url: "https://dnd-board-client.onrender.com/",
    image:"https://res.cloudinary.com/doxiillcn/image/upload/v1723299716/Portfolio/hyiiqvfxaazueqha1rrs.png"
  },
  {
    title: "Admin Panel",
    description: "Admin dashboard for managing orders, users, and products. Includes analytics, authentication, and more. Developed using React, Node.js, MongoDB, and Syncfusion.",
    url: "https://dnd-board-admin.onrender.com/",
    image:"https://res.cloudinary.com/doxiillcn/image/upload/v1723700315/Portfolio/w6lkg0msindmehafyz4p.png"
  },
  {
    title: "SNAKE Game",
    description: "A classic snake game implemented using HTML, CSS, and JavaScript with Canvas.",
    url: "https://guydstack.github.io/Snake-Game/",
    image:"https://res.cloudinary.com/doxiillcn/image/upload/v1723299494/Portfolio/d6pwba3ld7tfkui6igl4.png"
  },
  {
    title: "NOTE App",
    description: "A simple note-taking app that allows users to create and manage notes. Built with HTML, CSS, and JavaScript.",
    url: "https://guydstack.github.io/notesApp/",
    image:"https://res.cloudinary.com/doxiillcn/image/upload/v1723299074/Portfolio/pkk6soldwthuuscpbpmj.png"
  },
  {
    title: "ATM App",
    description: "An ATM simulation app that allows users to insert a card, deposit, or withdraw funds. Developed with HTML, CSS, and JavaScript.",
    url: "https://guydstack.github.io/ATM/",
    image:"https://res.cloudinary.com/doxiillcn/image/upload/v1723297560/Portfolio/jycn3vjkbuky6xkjbvsp.png"
  }
];



function App() {
  const [activeNav, setActiveNav] = useState(""); // Active navigation state
  const sectionsRef = useRef({}); // Reference for all sections

  const sections = ['about', 'skills', 'projects', 'experience', 'education']; // IDs of the sections

  useEffect(() => {
    sections.forEach((section) => {
      sectionsRef.current[section] = document.getElementById(section);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -90% 0px', // Adjust to trigger when the section is near the top
        threshold: 0, // Trigger as soon as any part of the section is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(sectionsRef.current[section]);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(sectionsRef.current[section]);
      });
    };
  }, []);

  const handleNav = (id) => {
    setActiveNav(id);
    sectionsRef.current[id].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box p={5}>
      {/* Flexbox Container for About Me and Skills Sections */}
      <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
        {/* About Me Section */}
        <Box
          flex="1"
          textAlign="left"
          p={4}
          position={{ base: 'static', md: 'static', lg: 'sticky' }}
          top="0"
          height="80vh"
        >
          {/* Header */}
          <Flex maxW="400px" mx="auto" gap={5} justifyContent={{ base: 'center', md: 'center', lg: 'flex-start' }}>
            <Heading as="h1" marginBottom={5}>
              Guy Dahan
            </Heading>
            <Text fontSize="lg" pt={3}>|</Text>
            <Text fontSize="lg" pt={3}>Portfolio</Text>
          </Flex>
          <Flex maxW="400px" mx="auto" gap={5} justifyContent={{ base: 'center', md: 'center', lg: 'flex-start' }}>
            <Avatar mb={{ base:0, md:0, lg:5 }} size='xl' name='Guy Dahan' src='https://res.cloudinary.com/doxiillcn/image/upload/c_crop,g_auto,h_800,w_800/Portfolio/vcft927jltirajtvxwv2.jpg'/>
          </Flex>

{/* Navigation List */}
<Box as="nav" maxW="400px" mx="auto" mb={5}>
  <List spacing={3} display={{ base: 'none', md: 'none', lg: 'block' }}>
  {sections.map((section) => (
    <ListItem key={section}>
      <Link
        href={`#${section}`}
        onClick={() => handleNav(section)}
        pl={activeNav === section ? '20px' : '0'}
        _hover={{ pl: '20px' }}
        transition="padding-left 0.3s ease"
      >
        <ListIcon as={activeNav === section ? FaChevronDown : FaChevronRight} />
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    </ListItem>
  ))}
  </List>
</Box>

          {/* Contact Section */}
          <Box pt={{ base:0, md:0, lg:5 }} maxW="400px" mx="auto" textAlign={{ base: 'center', md: 'center', lg: 'left' }}>
            <Heading as="h2" size="lg" mb={4}>
              Contact
            </Heading>
            <Flex direction="row" align="center" gap={5} justifyContent={{ base: 'center', md: 'center', lg: 'flex-start' }}>
              <Link href="https://www.linkedin.com/in/guy-dahan-63b198221/" isExternal>
                <FaLinkedin size={"30px"} />
              </Link>
              <Link href="https://github.com/Guydstack" isExternal>
                <FaGithub size={"30px"} />
              </Link>
              <EmailPopover />
            </Flex>
          </Box>
        </Box>


        {/* Skills Section */}
        <Box
          flex="1"
          height="80vh"
          overflowY="auto"
          p={5}
        >
          <Heading as="h2" size="lg" mb={4} maxW="500px" mx="auto" id='about'>
            About Me
          </Heading>
          <Text fontSize="md" textAlign="justify" maxW="500px" mx="auto" mb={4}>
          I am a dedicated full-stack web developer with a robust background in crafting dynamic and 
          user-centric applications. My expertise lies in JavaScript, React, and Node.js, 
          where I focus on building scalable solutions that solve real-world problems. 
          I am adaptable and thrive in fast-paced environments, using my experiences from 
          diverse industries to bring fresh perspectives to every project. My passion for technology 
          is matched by my strong work ethic and a continuous drive to learn and grow.
          </Text>
          <Heading as="h2" size="lg" mb={4} maxW="500px" mx="auto" id='skills'>
            Skills
          </Heading>
          <Text fontSize="md" maxW="500px" mx="auto" mb={10}>
            <UnorderedList spacing={3}>
              <ListItem>
                <strong>Frontend:</strong> JavaScript, React, HTML, CSS, Chakra UI
              </ListItem>
              <ListItem>
                <strong>Backend:</strong> Node.js, Express, MongoDB, Firebase
              </ListItem>
              <ListItem>
                <strong>Tools & Platforms:</strong> Git, SQL, Docker, RESTful APIs, Axios
              </ListItem>
              <ListItem>
                <strong>Additional Skills:</strong> Problem-solving, teamwork, adaptability, project management
              </ListItem>
            </UnorderedList>
          </Text>
          {/* Projects Section */}
          <Box mb={10} >
            <Heading as="h2" size="lg" mb={10} maxW="500px" mx="auto" id='projects'>
              Projects
            </Heading>
            <Stack direction={['column', 'row']} spacing="24px" wrap="wrap" justify="center">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Stack>
          </Box>
          {/* Experience Section */}
          <Box mb={10} maxW="500px" mx="auto">
            <Heading as="h2" size="lg" mb={4} id='experience'>
              Experience
            </Heading>
            <Text fontSize="md" maxW="500px" mx="auto" mb={4}>
              <UnorderedList spacing={3}>
                <ListItem>
                  <strong>Full-Stack Web Developer (2023 - Present):</strong><br />
                  Gained experience through self-training and a comprehensive course, focusing on creating user-friendly and efficient web applications using JavaScript, React, Node.js, and other modern technologies.
                </ListItem>
                <ListItem>
                  <strong>Self-Employed Carpenter (2021 - Present):</strong><br />
                  Leveraged problem-solving skills and attention to detail in carpentry projects, demonstrating adaptability and a strong work ethic.
                </ListItem>
              </UnorderedList>
            </Text>
            <Box ml={4} mt={4}>
              <Link href="/Guy Dahan - Full Stack CV.pdf" download="Guy_Dahan_CV.pdf">
                <Button colorScheme='teal' size='xs'>
                  Download My CV
                </Button>
              </Link>
            </Box>
          </Box>

          {/* Education Section */}
          <EducationSection/>

          {/* Languages Section */}
          <Box mb={10} maxW="500px" mx="auto">
            <Heading as="h2" size="lg" mb={4} id='languages'>
              Languages
            </Heading>
            <Text fontSize="md" maxW="500px" mx="auto" mb={4}>
              <UnorderedList spacing={3}>
                <ListItem>
                  <strong>German:</strong> B2
                </ListItem>
                <ListItem>
                  <strong>English:</strong> Fluent
                </ListItem>
                <ListItem>
                  <strong>Hebrew:</strong> Native
                </ListItem>
              </UnorderedList>
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* Footer */}
      <Text fontSize="xs" mt={70} textAlign="center">&copy; 2024 Guy Dahan </Text>
    </Box>
  );
}

export default App;


