import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

function CampaignsCard() {
  return (
    <VStack>
        <Image alt='Campaign Image'/>
        <Text>Help Build A Church</Text>
        <HStack>
            <Text>Start Date</Text>
            <Text>January 13, 2022</Text>
        </HStack>
        <HStack>
            <Text>End Date</Text>
            <Text>January 13, 2022</Text>
        </HStack>
        <HStack>
            <Text>Status</Text>
            <Text>Success <Icon/></Text>
        </HStack>
    </VStack>
  )
}

export default CampaignsCard;