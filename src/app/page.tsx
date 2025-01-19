import { SessionWrapper } from "../../components/SessionWrapper";
import SignInPage from "../../components/login/loginComponent";
import SignOutPage from "../../components/login/signOutcomponent";
import { auth } from "../../lib/auth";

 export default async function Home() {
   const session = await auth();
   const isAuthenticated = !!session?.user;

   return (
     <div>
       <SessionWrapper>
         {isAuthenticated
           ? <SignOutPage />
          : <SignInPage />
         }
       </SessionWrapper>
    </div>
  );
 }

