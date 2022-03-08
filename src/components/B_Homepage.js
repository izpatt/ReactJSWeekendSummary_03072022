import '../styles/homepage.css';

const Homepage = () => {
    
    
    return(
      
        <>
           <div className="jumbotron">
                <h1 className="display-4">Hey, it's Pat!</h1>
                <p className="lead">Today, I'm going to share my simple weekend last March 6, 2022 to March 7, 2022. Honestly, nothing much had happened to me, we only did casual things and enjoyed family time together. Welp, if you want to know more about my weekend, go take a look at the weekend section! But wait a minute, I'm pretty curious about you 🤔... </p>
                <hr className="my-4"/>
                <p>How's your weekend so far? Press any emoji that best fits your weekend vibe!</p>
               
            </div>

            <div className="jumbotron jumbotron-fluid ">
               
                <p className="lead">

                    <a tabindex="0" class="btn btn-lg btn btn-light mr-5" role="button" data-placement="left" data-toggle="popover" data-trigger="focus" title="Wonderful" data-content="I'm glad that you had a wonderful week, cheers to more precious days!"><span className="emoji">🤩</span></a>

                    
                    <a tabindex="0" class="btn btn-lg btn btn-light mr-5" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="Rest Day" data-content="Yasss! Finally, the most awaited rest day for you. Nice one, fam "><span className="emoji">😴</span></a>

                    <a tabindex="0" class="btn btn-lg btn btn-light mr-5" role="button" data-placement="bottom" data-toggle="popover" data-trigger="focus" title="Exercise" data-content="Go flex those muscles bruhh 👀  "><span className="emoji">💪</span></a>

                    
                    <a tabindex="0" class="btn btn-lg btn btn-light mr-5" role="button" data-placement="right" data-toggle="popover" data-trigger="focus" title="Road trip" data-content="Hope all, man. More than cash, I need some time to travel too"><span className="emoji">🚙</span></a>

                </p>
            </div>

        </>
    );
}

export default Homepage;