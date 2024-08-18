import React from 'react';
import { IconButton, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

function EmailPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          icon={<FaEnvelope size={"30px"} />}
          color={"white"}
          variant="outline"
          border={"none"}
          aria-label="Email"
          _hover={{}}
          _active={{}}
        />
      </PopoverTrigger>
      <PopoverContent bg="gray.700" color="white" borderColor={"whiteAlpha.300"}>
        <PopoverArrow bg="gray.700" borderColor={"whiteAlpha.300"} />
        <PopoverCloseButton color="white" />
        <PopoverHeader>Contact Me</PopoverHeader>
        <PopoverBody borderColor={"whiteAlpha.300"}>
          <a href="mailto:info@guydahan.com" style={{ color: "white" }}>info@guydahan.com</a>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default EmailPopover;
