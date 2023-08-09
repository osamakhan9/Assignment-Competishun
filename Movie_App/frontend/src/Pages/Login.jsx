
import { signInWithGoogle } from '../FireBase/firebase';
import { Box, Button, Heading } from '@chakra-ui/react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let details = JSON.parse(localStorage.getItem("details"));
    let navigate = useNavigate();
    const handleGoogle = () => {
        signInWithGoogle().then((res) => {
            console.log(res.user);
            let arr = [];
            arr.push(res.user._delegate.accessToken);
            arr.push(res.user._delegate.displayName);
            arr.push(res.user._delegate.email);
            arr.push(res.user._delegate.photoURL);
            localStorage.setItem("details", JSON.stringify(arr));
            return navigate("/");
        }).catch((error) => {
            console.log(error.message)
        });
    }
    if (details) {
        return navigate("/");
    } else {
        return (
            <Box bg='black'>
                <Heading color='white' textAlign='center'>Movie App</Heading>
                <Box display="grid"
                    height="120vh"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="-40">
                    <Button padding={[5, 5, 5, 9]} onClick={handleGoogle}>Login with Google <FcGoogle style={{ fontSize: "35px", margin: "2px" }} /></Button>
                </Box>
            </Box>
        )
    }

}

export default Login