import React from 'react';
import { IconButton, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

function EmailPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          icon={<FaEnvelope size={"30px"} />}
          variant="outline"
          border={"none"}
          aria-label="Email"
          _hover={{}}
          _active={{}}
        />
      </PopoverTrigger>
      <PopoverContent bg="gray.700" color="white">  {/* Set background and text color here */}
        <PopoverArrow bg="gray.700" />  {/* Set arrow background color */}
        <PopoverCloseButton color="white" />  {/* Set close button color */}
        <PopoverHeader borderBottomColor="gray.700">Contact Me</PopoverHeader>  {/* Optional: Set border bottom color */}
        <PopoverBody>
          <a href="mailto:info@guydahan.com" style={{ color: "white" }}>Send an Email</a> {/* Set link color */}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default EmailPopover;
