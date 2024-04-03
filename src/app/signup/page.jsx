import React from 'react'
import { Flex} from '@chakra-ui/react'
import { Stack, Button } from '@chakra-ui/react'
import Link from 'next/link'
import '../styles.css'
import {FormControl,FormLabel,Input,} from '@chakra-ui/react'


function page() {
  
    return (
          <Flex 
          height={"100vh"} 
          alignItems={"center"} 
          justifyContent={"center"}
          >
          
          <Flex 
          height={"auto"}
          width={"auto"}
          direction={"column"}
          backgroundColor={"white"}
          p={6}
          rounded={3}
          position={"relative"}
          boxShadow={"rgba(20,174,203,255) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;"}
          >
    
       <FormControl>

       <FormLabel  
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Name
       </FormLabel>

       <Input width={"300px"} type='text' mb={5} />


       <FormLabel  
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Email
       </FormLabel>

       <Input width={"300px"} type='email' mb={5} />

    
       <FormLabel 
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Password
       </FormLabel>

       <Input width={"300px"} type='password' mb={5} />


       <FormLabel 
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Comfirm Password
       </FormLabel>


       <Input width={"300px"} type='password' mb={5} />
    
       </FormControl>

    
       <Stack direction='row' justify="center" spacing={8} mt={5} >

       <Button  
       backgroundColor={"rgba(20,174,203,255)"}  
       color={"white"} outline={"none"} 
       padding={"8px"} 
       rounded={6} 
       width={"150px"} 
       colorScheme="teal" 
       variant="solid" 
       _hover={{backgroundColor: "rgba(20,174,203,0.8)"}} 
       cursor={"pointer"} 
       type="submit" >
       Sign Up
       </Button>
       
       </Stack>

       <Link className='link'  href={"/"}>If you have already account, please Sign In.</Link>
       </Flex>
       </Flex>

      );
}

export default page