import React from 'react';
import { CheckCircleIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

function ResponseModal({handleClick, buttonLabel, title, description}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const handleSubmit = () => {
      handleClick();
      onOpen();
    };
  return (
    <Box>
      <Button colorScheme='green' mr={3} onClick={handleSubmit}>
        {buttonLabel}
      </Button>
      <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Box textAlign="center" py={10} px={6}>
                  {title === "success" ? <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                  : title === "info" ?<InfoIcon boxSize={'50px'} color={'blue.500'} />
                  :<CloseIcon boxSize={'20px'} color={'white'} />}
                  <Heading as="h2" size="xl" mt={6} mb={2} textTransform={'capitalize'}>
                      {title}
                  </Heading>
                  <Text color={'gray.500'}>
                      {description}
                  </Text>
              </Box>
            </ModalBody>
            
          </ModalContent>
        </Modal>
    </Box>
   
  )
}

export default ResponseModal;