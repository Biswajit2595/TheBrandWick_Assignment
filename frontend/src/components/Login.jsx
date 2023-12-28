
import {
    Heading,
    Input,
    Button,
    FormLabel,
    Box,
    FormControl,
    useToast,
    FormHelperText,
  } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
  
  const Login = () => {
    const toast=useToast()
    const [user,setUser]=useState({
        email:'',
        password:''
    })


    const handleChange=(e)=>{
        const { name,value }=e.target;

        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`https://thebrandwick.onrender.com/user/login`,user)
        .then(res=>{
            // console.log(res.data)
            if(res.data.data=='User does not Exist.Please try Again' || res.data.data=="Invalid Credentials. Please try Again"){
                toast({
                    position:'top',
                    title: 'Please Try Again.',
                    description: `${res.data.data}`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }else{
                toast({
                    position:'top',
                    title: 'Login Successfull.',
                    description: `${res.data.data}`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    
                })
            }
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
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input bgColor={'white'} p={5} type="email" name="email" placeholder="Email address" onChange={handleChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password:</FormLabel>
            <Input type={"password"} p={5} bgColor={'white'} name="password" placeholder="Password" onChange={handleChange} />
            <FormHelperText textAlign="right">
              <Link color="teal.500">Forgot password?</Link>
            </FormHelperText>
          </FormControl>
          <Button
            bgColor={"#364e98"}
            _hover={{bgColor:"#3294ea"}}
            variant="solid"
            width="full"
            mt={6}
            type="submit"
          >
            Login
          </Button>
        </form>
        <Box mt={4} color="#364e98" textAlign="center">
          New here? <Link to={`/`}>Sign Up</Link>
        </Box>
      </Box>

    );
  };
  
  export default Login;
  
