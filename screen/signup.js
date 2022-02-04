import React from 'react';
import { useState } from 'react';
import { authentication } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
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

const signup = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')


    const RegisterUser = (e) => {
      let newArray = data.filter(doctor => {
        if (
          doctor.first_name
            .toUpperCase()
            .trim()
            .includes(szabist.pk) ||
          doctor.last_name
            .toUpperCase()
            .trim()
            .includes(szabist.pk) ||
          doctor.speciality
            ?.toUpperCase()
            .trim()
            .includes(szabist.pk)
        ) {
          return true;
        }
      });
        //For adding a user
        if(password === confirm_password){
        createUserWithEmailAndPassword(authentication,email,password)
        .then((re)=>{
          console.log(re);
          alert("User successfully added...")
          //this.setState({signup_status: true})
          navigation.push("Login"); 
        })
        .catch((re)=>{
          console.log(re);
        })}
        else {
          alert("Password does not match...")
        }
      }

    const handlepress = () => {
        navigation.push("Login");
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
        Welcome to Zab Parksssssssss
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
          value={email}
          onChangeText={text => setEmail(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input 
          value={password}
          onChangeText={text => setPassword(text)}
          type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input
          value={confirm_password} 
          onChangeText={text => setConfirm_password(text)}
          type="password" />
        </FormControl>
        <Button mt="2" colorScheme="primary" onPress={RegisterUser}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            If you already have an account.{" "}
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
            login
          </Link>
        </HStack>
      </VStack>
    </Box>
    </Center>
    </NativeBaseProvider> 
  )
}

export default signup;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifycontent: 'center'
//   },
// });