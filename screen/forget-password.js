import React, { useState } from 'react';
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
        Welcome
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
        Enter email to recover your account
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Email ID</FormControl.Label>
          <Input
          onChangeText={text => setEmail(text)}
          />
        </FormControl>
        <Button mt="2" colorScheme="primary">
          Submit
        </Button>
      </VStack>
    </Box>
    </Center>
    </NativeBaseProvider> 
  )
}

export default login;

