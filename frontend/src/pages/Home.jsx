import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BackgroundLines } from "../components/ui/background-lines";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

    <div >
      
      <div className="flex justify-center items-center min-h-[calc(100svh-64px-40px)] relative">
        <div className="text-center py-10 max-w-3xl mx-4">
         
          {user ? (
            <>
            
              <h1 className="text-3xl xl:text-5xl font-bold text-primary">
                Welcome Back, {user.data.firstName}
              </h1>
              <p className="text-lg mt-4">
                Hey! Great to have you back 😊 Your entries are safe, private,
                and always within reach. No rules just your thoughts, your way.
                Keep writing, keep growing! 🚀✨
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Go to Your Entries
              </Link>
            </>
          ) : (
            <>
              <h1 className="text-3xl xl:text-5xl font-bold text-primary">
                Welcome to DayBook
              </h1>
              <p className="text-lg mt-4">
                Hey! Great to have you here 😊 Log in to keep your entries safe,
                private, and always within reach. Write freely, your thoughts
                your way! 🚀✨
              </p>
              <Link to="/entries" className="btn btn-primary mt-6">
                Get Started
              </Link>
            </>
          )}
                

        </div>
        {/* <div className="absolute bottom-10 animate-bounce">
          <span className="text-gray-500 text-sm">
            Scroll down to discover more ↓
          </span>
        </div> */}
        
      </div>

        
      
    </div>
       
    </BackgroundLines>

  );
};

export default Home;
