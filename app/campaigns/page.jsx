'use client';
import React from 'react';
import { Button,Stack,Box,Wrap,WrapItem, ButtonGroup, HStack, VStack, Heading, Text, Center, Icon } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi';
import { GiLighthouse } from 'react-icons/gi';

function Campaign() {
    const [hasContent, setHasContent] = React.useState(false);
    if(hasContent){
        return <div>campaign has content</div>
    }
  return (
    <Box width={'100%'}>
        <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'} px={'20px'}>
          <VStack alignItems={'flex-start'} gap={0}>
            <Heading as={'h3'} fontSize={'30px'} color={'green.600'}>campaigns</Heading>
            <Text fontWeight={600}>let create your first campaign</Text>
          </VStack>
          <Button leftIcon={<FiPlus/>} colorScheme={'green'}>
            Create Campaign
          </Button>
        </HStack>
        <VStack w={'100%'} height={'70vh'} alignContent={'center'} justifyContent={'center'}>
          <Icon as={GiLighthouse} fontSize={[300,500]} color={'green.900'}/>
          <Text fontWeight={700} color={'green.900'}>OOPS!!</Text>
          <Text fontWeight={700}>You Don&apos;t Have Any Recent Campaigns </Text>
        </VStack>
    </Box>
  )
}

export default Campaign;