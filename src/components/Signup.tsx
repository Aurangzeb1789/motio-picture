import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";

import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";


 async function SignUp()
{

  const session = await getServerSession(authOptions);
  
    return <>
               {session === null ?<SignupButton/> : <LoginButton session={session}/>}
                
                
    </>
}

export default SignUp;