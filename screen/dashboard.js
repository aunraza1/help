import React from "react"
import { authentication } from "../firebase"
import { signOut } from "firebase/auth";
import { Center, NativeBaseProvider, Button } from "native-base"


const dashboard = ({navigation}) => {


  const SignOutUser = () => {

    signOut(authentication)
    .then((re)=>{
      navigation.push("Login");
      console.log("logout")
    })
    .catch((err)=>{
      console.log(err);
      console.log("Cannot logout")
    })
  }

  const handlepress = () => {
    navigation.push("KYC");
  }

  return (
    <NativeBaseProvider>
     <Center flex={1} px="3">
    <Center
      bg="white"
      _text={{
        color: "black",
        fontWeight: "bold",
      }}
      height={500}
      width={{
        base: 400,
        lg: 400,
      }}
    >
      Welcome to Dashboard 
      <Button mt="2" colorScheme="primary" onPress={SignOutUser}>
          Log out
      </Button>
      Register your business details
      <Button mt="2" colorScheme="primary" onPress={handlepress}>
          Click here
      </Button>
    </Center>
    </Center>
    </NativeBaseProvider>
    
  )
}

export default dashboard ;

