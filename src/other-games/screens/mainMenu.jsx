import MenuButton from "../components/menuButton";
import "../components/menuButton.css";

const menuItems = [
  {
    text: "Text memory classification game",
    desc: "A memory game where you decide whether a word has already been shown or not.",
    navigationPath: "/textClassification",
  },
  {
    text: "Healthy habits classification game",
    desc: "A health-focused game where you decide whether habits depicted in images represent a healthy or unhealthy habit",
    navigationPath: "/healthQuiz",
  },
];
const MainMenu = () => {
  return (
    <div className="mainMenuPageContainer">
      <p style={{ fontSize: "30px", fontWeight: "700" }}>Classification Game</p>
      {menuItems.map((item) => {
        return (
          <MenuButton
            text={item.text}
            desc={item.desc}
            path={item.navigationPath}
          />
        );
      })}
    </div>
  );
};

export default MainMenu;
