import {
    Heading,
    Input,
    Button,
    FormLabel,
    Box,
    FormControl,
    useToast
  } from "@chakra-ui/react";
import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

  const SignUp = () => {
    const toast=useToast()
    const [user,setUser]=useState({
        name:'',
        phone:'',
        username:'',
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setUser((prev)=>({
            ...prev,
            [name]: name=='phone' ? +value : value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`https://thebrandwick.onrender.com/user/signup`,user)
        .then(res=>{
            if(res.data.data=='User has been successfully registered'){
                toast({
                    position:'top',
                    title: 'Account created.',
                    description: `${res.data.data}`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
            }else{
                toast({
                    position:'top',
                    title: 'Please Try Again.',
                    description: `${res.data.data}`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  })
            }
            setUser({
                name:'',
                phone:'',
                username:'',
                email:'',
                password:''
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
      <Box
      maxW={{ base: "90%", md: "480px" }}
      mx="auto"
      m={"auto"}
      mt={20}
      bgColor={'#dde7f4'}
      p={8}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
      >
        <Heading color="#364e98" textAlign="center" mb={4}>
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input type="text" p={5} bgColor={'white'} name="name" value={user.name} placeholder="Enter Name" onChange={handleChange}/>
          </FormControl>
        <FormControl>
            <FormLabel>Username:</FormLabel>
            <Input name="username" p={5} bgColor={'white'} type="text" placeholder="Enter Username" value={user.username} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input type="email" p={5} bgColor={'white'} name="email" value={user.email} placeholder="Email address" onChange={handleChange}/>
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number:</FormLabel>
            <Input type="text" p={5} bgColor={'white'} maxLength={10} name="phone" value={user.phone} placeholder="Enter Phone Number" onChange={handleChange}/>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password:</FormLabel>
            <Input type="password" p={5} bgColor={'white'} name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
          </FormControl>
          <Button
            bgColor={"#364e98"}
             _hover={{bgColor:"#3294ea"}}
            variant="solid"
            width="full"
            mt={6}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <Box mt={4} color="#364e98" textAlign="center">
          Registered User?{" "}
          <Link to={`/login`}>
            Log In
          </Link>
        </Box>
      </Box>
    );
};

export default SignUp;
