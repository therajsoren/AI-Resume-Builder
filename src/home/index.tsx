import Header from "@/components/ui/custom/Header";

import { Button } from "@/components/ui/button";
import { ArrowRight, Atom, LucideShare2, Video } from "lucide-react";
import { FaProductHunt, FaReddit, FaRegEdit } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

interface FeaturedInProps {
  icon: React.ReactNode;
  title: string;
}

const Featured : FeaturedInProps[] = [
  {
    icon: <IoLogoYoutube size={50} />,
    title: "YouTube",
  },
  {
    icon: <FaProductHunt size={50} />,
    title: "Product Hunt",
  },
  {
    icon: <FaReddit size={50} />,
    title: "reddit",
  },
]


interface StepsContentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepsContent : StepsContentProps[] = [
  {
    icon: <Atom size={30} />,
    title: "Write promot for your resume",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in, explicabo error eum, magni quae beatae at labore aut rerum doloremque quod, ipsa officia?",
  },
  {
    icon: <FaRegEdit size={30} />,
    title: "Edit your form",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci iusto ipsam neque molestiae nobis iure, saepe sunt. Atque, obcaecati totam!",
  },
  {
    icon: <LucideShare2 size={30} />,
    title: "Share & Start Accepting Responses",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quo sapiente quia iusto est. Tempora id, qui vitae sapiente praesentium excepturi neque consequuntur eveniet, sed sunt adipisci optio. Earum, rerum!",
  },
]

const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-center pt-16">
        <h1 className="capitalize md:text-6xl pb-2 text-4xl font-bold">
          build you resume <span className="text-purple-600">With AI</span>
        </h1>
        <h2 className="leading-normal md:text-2xl text-xl text-gray-500">
          Effortlessly Craft a Standout Resume with Our AI-Powered Builder
        </h2>
      </div>
      <div className="pt-8">
        <div className="flex justify-center gap-4">
          <div>
            <Button className="p-8 bg-purple-600">
              Get Started{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
          </div>
          <div>
            <Button className="p-8 border-2 " variant="ghost">
              <span>
                <Video />
              </span>{" "}
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="text-center text-gray-400">
          <h1 className="uppercase font-bold">Featured in</h1>
          <div className="mt-8 text-gray-500 ">
            <div className="flex flex-wrap justify-center items-center lg:gap-30 gap-10 font-bold text-2xl leading-relaxed lg:tracking-widest">

              {Featured.map((featured, index) => (
                <div className="flex items-center gap-2" key={index}>
                  {featured.icon}
                  <span>{featured.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mx-auto lg:px-12 max-w-screen-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">How it Works?</h1>
          <h2 className="text-lg pt-2 text-gray-400 ">
            Give mock interview in just 3 simpler easy step
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-8 max-w-7xl p-4">
            {StepsContent.map((step, index) => (
              <div className="border shadow-lg border-gray-300 rounded-lg p-8 text-center" key={index}>
                {step.icon}
                <h1 className="text-2xl font-bold">{step.title}</h1>
                <p className="text-gray-400 text-base p-4">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center p-4 mb-4">
            <Button className="bg-red-600 tracking-widest px-16 py-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
