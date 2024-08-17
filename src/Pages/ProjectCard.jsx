import React from 'react';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function ProjectCard({ project }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }} // Stack vertically on small screens, horizontally on larger
      overflow="hidden"
      variant="outline"
      boxShadow="md"
      _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
      transition="all 0.3s"
      width={{ base: "auto", sm: "500px" }} // Uniform width for all cards
      height="auto" // Uniform height for all cards
      borderRadius="lg"
      bg="gray.800" 
      color="white"
      border={"none"}
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }} // Adjust layout for responsive design
    >
      <Image
        objectFit="cover"
        width={{ base: "100%", md: "200px" }} // Adjust width for responsiveness
        height="200px" // Make the image take up the full height of the card
        m={"auto"}        
        src={project.image}
        alt={project.title}
      />

      <Stack p={4} flex="1" justifyContent="space-between"> {/* Adjust Stack to distribute space evenly */}
        <CardBody>
          <Heading size="md" mb={2}>
            {project.title}
          </Heading>
          <Text> 
            {project.description}
          </Text>
        </CardBody>

        <CardFooter>
          <Link href={project.url} isExternal style={{ textDecoration: 'none', width: '100%' }}>
            <Button colorScheme='teal' size='xs'>
              View Project <ExternalLinkIcon mx="2px" />
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default ProjectCard;
