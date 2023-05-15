import React, {useState, useEffect} from "react";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);   

    useEffect(() => {
        console.log('state:', activeIndex);
    }, [activeIndex])

    const items = [
        {
            Q: "What is WasteAway?",
            A: "WasteAway is a mobile application that helps you study for tests and quizzes related to waste management and environmental science. It functions similarly to Quizlet, with flashcards, quizzes, and other study tools."
        },
        {
            Q: "How do I use WasteAway?",
            A: "To use WasteAway, simply download the app and create an account. Then, you can start browsing study materials, including flashcards, quizzes, and other resources. You can also create your own study materials and share them with other WasteAway users."
        },
        {
            Q: "Is WasteAway free to use?",
            A: "Yes, WasteAway is completely free to use. There are no hidden fees or in-app purchases."
        },
        {
            Q: "Can I access WasteAway on my computer?",
            A: "Currently, WasteAway is only available as a mobile app for iOS and Android devices. However, we may develop a web version in the future."
        },
        {
            Q: "What kinds of study materials are available on WasteAway?",
            A: "WasteAway offers a wide range of study materials related to waste management and environmental science. This includes flashcards, quizzes, and other resources created by WasteAway users, as well as official study materials from environmental organizations and waste management agencies."
        },
        {
            Q: "Can I collaborate with other WasteAway users?",
            A: "Yes, WasteAway allows you to collaborate with other users by sharing study materials and participating in study groups. You can also connect with other WasteAway users through the app's messaging feature."
        },
    ];

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
  
  return (
    <div className="landing-content-area">
      <div className="landing-top-container">
        <div className="landing-middle-content">
            <div className="landing-bottom-text">
                <h1>Frequently Asked Questions:</h1>
                    <div className="accordion">
                        {items.map((item, index) => (
                            <div key={index} className="accordion-item">
                                <div className={`accordion-header ${index === activeIndex ? 'active' : ''}`} onClick={() => handleItemClick(index)}>
                                    {item.Q}
                                </div>
                                <div className={`accordion-content ${index === activeIndex ? 'active' : ''}`}>
                                    {item.A}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};
  
export default FAQ;