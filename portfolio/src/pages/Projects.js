import React from "react";
import appHome from "../assets/WasteAwayHome.png";
import appGame from "../assets/GarbageToss.png";

const Projects = () => {
  return (
    <div className="landing-content-area">
      <div className="landing-top-container">
        <h1>Mobile App Home:</h1>
        <div className="landing-middle-content">
            <div className="landing-right">
            <img src={appHome} className="landing-top-image-container" alt="app home page" />
            </div>
            <div className="landing-bottom-text">
                <div className="tutorial-text">
                    Open the WasteAway application on your mobile device and navigate to the home page.
                </div>
                <div className="tutorial-text">
                    Take a moment to familiarize yourself with the layout of the home page. You'll notice that it extends vertically, allowing you to scroll down to see more content.
                </div>
                <div className="tutorial-text">
                    At the top of the home page, you'll see a search bar. You can use this search bar to search for specific study materials, such as flashcards or quizzes, by typing in keywords or phrases.
                </div>
                <div className="tutorial-text">
                    Below the search bar, you'll see several categories, such as "Games," "Study Sets," and "Recommended". You can use the horizontal scroll feature to browse through these categories and see more study materials related to each topic.
                </div>
                <div className="tutorial-text">
                    To access a study set, game, or flashcard deck, simply tap on the item you're interested in. This will take you to a new page where you can begin studying or playing.
                </div>
                <div className="tutorial-text">
                    As you explore the home page, take note of any study materials that catch your interest. You can save these materials for later by adding them to your favorites list, which you can access by tapping the heart icon in the top right corner of the screen.
                </div>
                <div className="tutorial-text">
                    When you're ready to continue studying, simply return to the home page by tapping the "Home" button in the bottom left corner of the screen. From here, you can continue browsing study materials, playing games, or reviewing flashcards.
                </div>
            </div>
        </div>
        <div>
            <h1>Waste Toss Game:</h1>
        </div>
        <div className="landing-middle-content">
            <div className="landing-right">
                <img src={appGame} className="landing-top-image-container" alt="app game page" />
            </div>
            <div className="landing-bottom-text">
                <div className="tutorial-text">
                    Open the WasteAway application on your mobile device and navigate to the waste toss game.
                </div>
                <div className="tutorial-text">
                    Take a moment to familiarize yourself with the game's layout. You'll notice that there is a timer in the top middle of the screen, which shows you how much time you have left to play.
                </div>
                <div className="tutorial-text">
                    You'll also notice a variety of waste items that can appear on the screen, such as paper cups, plastic bottles, and food wrappers. Your goal is to toss as many of these items into the correct bin as possible before the timer runs out.
                </div>
                <div className="tutorial-text">
                    To toss an item, simply swipe up on the screen with your finger. You can adjust the angle and speed of your swipe to aim the item more accurately.
                </div>
                <div className="tutorial-text">
                    Each time you successfully toss an item into the right bin, you'll earn points. The more items you toss, the higher your score will be.
                </div>
                <div className="tutorial-text">
                    Be careful not to toss items into the wrong bin, as this will result in a penalty to your score.
                </div>
                <div className="tutorial-text">
                    If you need to exit the game before the timer runs out, simply tap the "Exit" button in the top left corner of the screen. This will take you back to the main menu.
                </div>
                <div className="tutorial-text">
                    When the timer runs out, your game will end and your score will be displayed on the screen. If you scored high enough, you may be able to add your name to the game's high score list.
                </div>
                <div className="tutorial-text">
                    If you'd like to play again, simply tap the "Play Again" button on the screen. This will reset the game and allow you to try to beat your previous score.
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
  
export default Projects;