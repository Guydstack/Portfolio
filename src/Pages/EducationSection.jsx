import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  useDisclosure
} from '@chakra-ui/react';

function EducationSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mb={10} maxW="500px" mx="auto">
      <Heading as="h2" size="lg" mb={4} id='education'>
        Education
      </Heading>
      <Text fontSize="md" maxW="500px" mx="auto" mb={4}>
        <UnorderedList spacing={3}>
          <ListItem>
            <strong>Full Stack Web Development Course (2023 - 2024):</strong><br />
            Completed a comprehensive course that provided in-depth knowledge of front-end and back-end technologies, including JavaScript, React, Node.js, Express, and MongoDB.
            <br />
            <Link color="blue.500" onClick={onOpen} cursor="pointer">
              View Certificate
            </Link>
          </ListItem>

          <ListItem>
            <strong>Carpentry Certification, TÜV Rheinland Akademie, Berlin (2019 - 2021):</strong><br />
            Acquired hands-on skills in woodworking and furniture making, with a focus on precision and craftsmanship.
          </ListItem>
        </UnorderedList>
      </Text>

      {/* Modal for displaying the certificate */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.700" color="white">
          <ModalHeader>Full Stack Web Development Certificate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1723711094/Portfolio/ryrffypto3jwb6rait8g.jpg" alt="Full Stack Web Development Certificate" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose} background={"teal.200"} color={"black"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EducationSection;
