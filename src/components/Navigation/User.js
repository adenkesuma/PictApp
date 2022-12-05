import React from 'react';
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Heading
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';


const User = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

    return (
        <aside className="relative">
            <Button className="xs:px-2 xs:py-1 sm:px-4 sm:py-1 sm:text-sm sm:font-normal md:px-6 md:py-2 bg-black text-white px-8 py-2 rounded-lg font-serif font-bold hover:bg-gray-900" ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Info
            </Button>
            <Drawer
                className="z-[999]"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                >
                <DrawerOverlay />
                <DrawerContent className="xs:mt-20 md:mt-28 lg:mt-32 relative bg-white shadow-2xl flex justify-center items-center p-8 mt-10" style={{width: "340px"}}>
                    <span className='flex justify-between items-center w-full absolute top-4 px-8'>
                        <DrawerHeader className='sm:text-sm sm:font-normal md:text-lg md:font-semibold font-semibold text-lg font-serif'>
                            Info:
                        </DrawerHeader>
                        <DrawerCloseButton className="text-sm"/>
                    </span>

                    <div className='absolute top-16 flex flex-col gap-4 px-8'>
                        <span className='bg-blue-400 p-4 rounded-lg block'>
                            <Heading className='sm:text-sm lg:text-lg text-lg font-bold font-serif mb-1 text-white'>Photos for everyone</Heading>
                            <p className='sm:text-xs lg:text-sm text-sm font-normal font text-white'>There are only 10 photos available for each category, but all the photos you are looking for will be available on this website</p>
                        </span>
                        <span className='bg-blue-400 p-4 rounded-lg block'>
                            <Heading className='sm:text-sm lg:text-lg text-lg font-bold font-serif mb-1 text-white'>Important !</Heading>
                            <p className='sm:text-xs lg:text-sm text-sm font-normal font text-white'>
                                I took the API photos and images from Unsplash, you can directly visit the website
                                is <a className="underline font-semibold" href="https://unsplash.com/">Unsplash.com</a> there is a very complete platform available that you can visit
                                for your needs, I also thank Unsplash for providing free fire for anyone who wants
                                to retrieve data. pictures and photos but all data is limited, thanks for unsplash
                            </p>
                        </span>
                    </div>
                </DrawerContent>
            </Drawer>
        </aside>
    )

}

export default User;
