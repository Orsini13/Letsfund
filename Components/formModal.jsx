import { Button, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react';
import React from 'react'

function FormModal({isOpen, onClose}) {
    const initialRef = React.useRef(null);
    const [formValue, setFormValue] = React.useState({
        title: '',
        image: '',
        description: '',
        goal: '',
        start: '',
        end: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(value);
        setFormValue({...formValue, [name]: value});
    } 

    const isDateError = new Date(formValue.end) <= new Date(formValue.start);

  return (
    <Modal
        initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your campaign</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel requiredIndicator>Campaign Title</FormLabel>
              <Input ref={initialRef} name='title' placeholder='Campaign Title' required value={formValue.title} onChange={handleChange}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel requiredIndicator>Campaign Image Url</FormLabel>
              <Input name='image' placeholder='https://' value={formValue.image} onChange={handleChange}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel requiredIndicator>Description</FormLabel>
              <Textarea name='description' placeholder='About the campaign...' rows={3} value={formValue.description} onChange={handleChange}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel requiredIndicator>Goal</FormLabel>
              <InputGroup>
                <InputLeftAddon>ETH</InputLeftAddon>
              <Input type='number' name='goal' placeholder='3 ETH' value={formValue.goal} onChange={handleChange}/>
              </InputGroup>
            </FormControl>

            <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} mt={4}>
            <FormControl>
              <FormLabel requiredIndicator>Start Date</FormLabel>
              <Input type='date' name='start' value={formValue.start} onChange={handleChange}/>
            </FormControl>
            <FormControl isInvalid={isDateError}>
              <FormLabel requiredIndicator>End Date</FormLabel>
              <Input type='date' name='end' value={formValue.end} onChange={handleChange}/>
            </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default FormModal;