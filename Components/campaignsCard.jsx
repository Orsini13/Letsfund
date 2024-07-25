import { Button, HStack, Icon, Text, VStack} from '@chakra-ui/react';
import Image  from 'next/image';
import React from 'react'

function CampaignsCard() {
  return (
    <VStack rounded={'lg'} bg={'white'} gap={'10px'} pb={'20px'} boxShadow={'lg'}>
        <Image src={'/Bearport.jpg'} alt='Campaign Image' width={300} height={150} objectFit='cover' style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
        <Text color={'green.600'} textTransform={'capitalize'} fontWeight={700} textAlign={'left'} w={'100%'} px={'20px'}>Help Build A Church</Text>
        <HStack width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={'20px'}>
            <Text fontWeight={700}>Start Date</Text>
            <Text fontWeight={600}>January 13, 2022</Text>
        </HStack>
        <HStack width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={'20px'}>
            <Text fontWeight={700}>End Date</Text>
            <Text fontWeight={600}>January 13, 2022</Text>
        </HStack>
        <HStack width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={'20px'}>
            <Text fontWeight={700}>Status</Text>
            <Text fontWeight={600}>Success <Icon/></Text>
        </HStack>
        <Button colorScheme={'green'} boxShadow={'lg'}>View More</Button>
    </VStack>
  )
}

export default CampaignsCard;