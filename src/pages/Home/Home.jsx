import { Link } from "react-router-dom"
import EventSection from "../../Components/EventSection/EventSection"
import { FeatureSection } from "../../Components/FeatureSection/FeatureSection"
import { Helmet } from "react-helmet-async"


const Home = () => {
  return (
    
    <>
    <Helmet>
        <title>BizEvent | Home</title>
    </Helmet>
    <section className="py-14 h-[85vh] bg-cover bg-no-repeat bg-center bg-[url('./bg.png')]">
            <div className="max-w-screen-xl mx-auto my-40 px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Build the future with us
                    </h3>
                    <p className="mt-3 text-white">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <Link to={"/register"} className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Get started
                    </Link>
                </div>
            </div>
        </section>
        <FeatureSection></FeatureSection>
        <EventSection/>
      </>
  )
}

export default Home