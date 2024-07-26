import { Button, HStack, Icon, Text, VStack} from '@chakra-ui/react';
import Image  from 'next/image';
import React from 'react'
import { CiCircleCheck, CiClock2 } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';

function CampaignsCard({campaign}) {
  function formatDate(date) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()]; // Get the month name from the array
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}
  return (
    <VStack rounded={'lg'} bg={'white'} gap={'10px'} pb={'20px'} boxShadow={'lg'}>
        <Image src={campaign.image} alt='Campaign Image' width={300} height={150} objectFit='cover' style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}/>
        <Text color={'green.600'} textTransform={'capitalize'} fontWeight={700} textAlign={'left'} w={'100%'} px={'20px'}>{campaign.title}</Text>
        <HStack width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={'20px'}>
            <Text fontWeight={700}>Start Date</Text>
            <Text fontWeight={600}>{formatDate(new Date(campaign.start))}</Text>
        </HStack>
        <HStack width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={'20px'}>
            <Text fontWeight={700}>End Date</Text>
            <Text fontWeight={600}>{formatDate(new Date(campaign.end))}</Text>
        </HStack>
        <HStack width={'100%'} alignItems={'center'} justifyContent={'space-between'} px={'20px'}>
            <Text fontWeight={700}>Status</Text>
            <Text fontWeight={600} textTransform={'capitalize'} verticalAlign={'top'} color={campaign.status === "success"? 'green.600': campaign.status === "pending"? "red.400": "red" }>{campaign.status} <Icon as={campaign.status === "success"? CiCircleCheck: campaign.status === "pending"? CiClock2: MdOutlineCancel }/></Text>
        </HStack>
        <Button colorScheme={'green'} boxShadow={'lg'}>View More</Button>
    </VStack>
  )
}

export default CampaignsCard;