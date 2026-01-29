import { ScrollView } from "react-native";
import PortfolioItem from "./PortfolioItem";
import { ImageSourcePropType } from "react-native";

type PortfolioData = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  link?: string;
};

export default function PortfolioList() {
  const portfolioData: PortfolioData[] = [
    {
      title: "Weather App",
      description: "A React Native app that displays live weather data.",
      image: require("../assets/IMG_8965.jpg"),
      link: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Personal Website",
      description: "A responsive website built with HTML, CSS, and JavaScript.",
      image: require("../assets/IMG_8965.jpg"),
      link: "https://yourwebsite.com",
    },
    {
      title: "JavaScript Skills",
      description: "Experience with ES6, APIs, and async programming.",
      image: require("../assets/IMG_8965.jpg"),
    },
  ];

  return (
    <ScrollView>
      {portfolioData.map((item, index) => (
        <PortfolioItem
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </ScrollView>
  );
}
