"use client"
import React from 'react'
import { Flex} from '@chakra-ui/react'
import { Stack, Button } from '@chakra-ui/react'
import Link from 'next/link'
import '../styles.css'
import {FormControl,FormLabel,Input,} from '@chakra-ui/react'
import { useState } from 'react'
import {Alert,AlertIcon,AlertTitle,AlertDescription,} from '@chakra-ui/react'


function page() {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const [errors, setErrors] = useState({
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const newErrors = {};
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        newErrors.allFields = 'Please fill all fields.';
      } else {
        if (!formData.email.includes('@')) {
          newErrors.email = 'Please enter a valid email address.';
        }
        if (formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters long.';
        }
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match.';
        }
      }
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        setSuccess(true);
      }
    };

    const [success, setSuccess] = useState(false);
  
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

       <form onSubmit={handleSubmit}>

       <FormControl>

       <FormLabel  
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Name
       </FormLabel>

       <Input 
       width={"300px"} 
       type="text"
       name="name"
       value={formData.name}
       onChange={handleChange} mb={5} />


       <FormLabel  
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Email
       </FormLabel>

       <Input 
       width={"300px"} 
       type="email"
       name="email"
       value={formData.email}
       onChange={handleChange} 
       mb={5} />

       <FormLabel>
       {errors.email && <span style={{ color: 'red' , fontSize: '12px'}}>{errors.email}</span>}
       </FormLabel>
       

    
       <FormLabel 
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Password
       </FormLabel>


       <Input 
       width={"300px"} 
       type="password"
       name="password"
       value={formData.password}
       onChange={handleChange} 
       mb={5} />


      <FormLabel>
      {errors.password && <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span>}
      </FormLabel>


       <FormLabel 
         fontSize={"12px"} 
         color={"rgba(20,174,203,255)"} 
         fontWeight="bold">
         Comfirm Password
       </FormLabel>


       <Input 
       width={"300px"} 
       type="password"
       name="confirmPassword"
       value={formData.confirmPassword}
       onChange={handleChange} 
       mb={5} 
       />

      <FormLabel>
       {errors.confirmPassword && <span style={{ color: 'red',  fontSize: '12px' }}>{errors.confirmPassword}</span>}
       </FormLabel>

       <FormLabel>
       {errors.allFields && 
       <Alert status='error'>
       <AlertIcon />
       <AlertDescription>Fill the form fields.</AlertDescription>
       </Alert>}
       </FormLabel>
          
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
       type="submit" 
       >
       Sign Up
       </Button>
       
       </Stack>
       </form>
       <Link className='link'  href={"/"}>If you have already account, please Sign In.</Link>

       {success && (
       <Alert status='success' mt={5} variant='left-accent'>
       <AlertIcon />
       Sign Up Success!
       </Alert>
       )}

       </Flex>
       </Flex>

      );
}

export default page