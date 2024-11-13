import AlumniStory from "../components/AlumniStory"
import Hero from "../components/Hero"
import HomeDiscover from "../components/HomeDiscover"
import HomeHighlight from "../components/HomeHighlight"
import HomeLearn from "../components/HomeLearn"
import HomePrograms from "../components/HomePrograms"
import HomeQuestions from "../components/HomeQuestions"
import Partners from "../components/Partners"


const Home = () => {
  return (
    <div className="w-full h-max mb-10">
      <Hero/>
      <HomeDiscover/>
      <HomeHighlight/>
      <HomePrograms/>
      <HomeQuestions/>
      <AlumniStory/>
      <HomeLearn/>
      <Partners/>
    </div>
  )
}

export default Home