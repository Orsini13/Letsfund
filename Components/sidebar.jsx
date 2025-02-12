'use client'
import logo from '../public/logo1.jpg'
import React, { ReactNode } from 'react';
import Search from './search';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import {
  FiTrendingUp,
  FiSettings,
  FiMenu,
  FiUser,
} from 'react-icons/fi'
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { MdAccountCircle } from 'react-icons/md';
import { useRouter } from 'next/navigation';


const LinkItems = [
  // { name: "Profile", icon: FiUser },
  { name: "Campaigns", icon: FiTrendingUp, href: "/campaigns" },
  // { name: "Analytics", icon: TbBrandGoogleAnalytics },
];
const LinkItems2 = [
    { name: 'Settings', icon: FiSettings },
    { name: 'Account', icon: MdAccountCircle },
  ]

export default function SimpleSidebar({children}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} w={'100%'}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <VStack ml={{ base: 0, md: 60 }} p="4" alignItems={'flex-start'} >
        {/* Content */}
        <Search />
        <VStack w={'100%'} pt={'20px'}>
          {children}
        </VStack>
      </VStack>
    </Box>
  )
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="40" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" >
          Weavers
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <Text color={'green'} mx={'8'}  fontStyle={600}>General</Text>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}

      <Box my={'280'}>
      <Text color={'green'} mx={'8'} fontStyle={600}>Settings and Account</Text>
      {LinkItems2.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      </Box>
     
    </Box>
  )
}


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href={children.toLowerCase() === 'profile' ? '/': children.toLowerCase()}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        // bg={currentRoute === children.toLowerCase() && 'green.400'}
        // color={currentRoute === children.toLowerCase() && 'white'}
        _hover={{
          bg: 'green.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}


const MobileNav = ({ onOpen, ...rest }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        fontSize="2xl"
        ml="8"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Weavers
      </Text>
    </Flex>
  );
}