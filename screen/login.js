import React, { useState } from 'react';
import { authentication } from "../firebase"
import { signInWithEmailAndPassword} from "firebase/auth";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base"
const login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handlepress = () => {
      navigation.push("Signup");
      console.log(email);
  }

  const handlepress2 = () => {
    navigation.push("Forget");
    console.log(email);
}

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication,email,password)
    .then((re)=>{
      navigation.navigate("Dashboard") 
    })
    .catch((err)=>{
      console.log(err);
      alert("Password or email is not correct...")
    })
  }


  return (
    <NativeBaseProvider>
    <Center flex={1} px="3"> 
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: "warmGray.50",
        }}
      >
        Welcome to Zab Parking 
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input
          onChangeText={text => setEmail(text)}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input
          onChangeText={text => setPassword(text)}
          type="password" />
          <Link
            _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "primary.500",
            }}
            alignSelf="flex-end"
            mt="1"
            onPress={handlepress2}
          >
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="primary" onPress={SignInUser}>
          Login
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            I'm a new user.{" "}
          </Text>
          <Link
            _text={{
              color: "primary.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            href="#"
            onPress={handlepress}
          >
           Sign up
          </Link>
        </HStack>
      </VStack>
    </Box>
    </Center>
    </NativeBaseProvider> 
  )
}

export default login;

