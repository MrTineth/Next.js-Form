"use client"
import { Button, Flex} from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import Link from "next/link";
import './styles.css'
import {FormControl,FormLabel,Input} from '@chakra-ui/react'
import { useState } from 'react';
import {Alert,AlertIcon,AlertTitle,AlertDescription,} from '@chakra-ui/react'



export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSignIn = () => {
    if (!username.trim() || !password.trim()) {
      setError(true);
    } else {
      
      setSuccess(true); 
      setError(false);
    }
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setSuccess('');
    setError('');
  };

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
            User Name 
          </FormLabel>
          <Input  
            width={"330px"} 
            type='text' 
            mb={5} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <FormLabel 
            fontSize={"12px"} 
            color={"rgba(20,174,203,255)"} 
            fontWeight="bold">
            Password
          </FormLabel>
          <Input 
            width={"330px"} 
            type='password' 
            mb={5} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        
        <Stack direction='row' spacing={8} mt={5}>

        <Button  
          backgroundColor={"rgba(20,174,203,255)"}  
          color={"white"} 
          outline={"none"} 
          padding={"8px"} 
          rounded={6} 
          width={"150px"} 
          colorScheme="teal" 
          variant="solid" 
          cursor={"pointer"}  
          _hover={{backgroundColor: "rgba(20,174,203,0.8)" }} 
          onClick={handleSignIn} 
        >
          Sign In
        </Button>

        <Button 
          rounded={6} 
          width={"150px"} 
          padding={"8px"} 
          cursor={"pointer"} 
          colorScheme={"teal"}
          variant={"outline"}
          _hover={{backgroundColor: "rgba(20,174,203,0.8)", color: "white"}} 
          onClick={handleReset}
        >
          Reset
        </Button>
        </Stack>

       {error && (
       <Alert status='error' mt={5} variant='left-accent'>
       <AlertIcon />
       Login Error!
       </Alert>
       )}

       {success && (
       <Alert status='success' mt={5} variant='left-accent'>
       <AlertIcon />
       Sign In Success!
       </Alert>
       )}
        
        <Link className='link' href={"/signup"}>If you don&apos;t have an account, please Sign up.</Link>
      </Flex>
    </Flex>
  );
}