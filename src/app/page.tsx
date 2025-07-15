//when you open starting page (localhost:3001)
import AppWelcome from "./components/AppWelcome";

export default function Home() {
  return (
    
    <>
      <h1 className="text-3xl font-bold text-blue-600">Home Page </h1>
      <hr />
     <AppWelcome headTitle="SWU" isShow={true}/>

    </>
  );
}
