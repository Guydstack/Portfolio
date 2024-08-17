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
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Contact Me</PopoverHeader>
        <PopoverBody>
          <a href="mailto:info@guydahan.com">info@guydahan.com</a>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default EmailPopover;
