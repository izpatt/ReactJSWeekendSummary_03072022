import '../styles/weekend.css';
import visitors1 from '../assets/visitors1.jpg';
import visitors2 from '../assets/visitors2.jpg';
import visitors3 from '../assets/visitors3.jpg';

const Weekend = () => {
    return(
        <>
              <div className="row d-flex justify-content-center align-content-center py-5 container-fluid">
                            
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src={visitors1} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src={visitors2} alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src={visitors3} alt="Second slide"/>
                                </div>
                                
                            </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>      
            </div>
                       
            <div className="row py-5 wholeCard container-fluid">
                
                <div className="card">
                    <div className="card-header card-date-one">
                    March 5, 2022
                    </div>
                    <div className="card-body card-body-one">
                        <h5 className="card-title">My Saturday</h5>
                        <p className="card-text">
                                This Saturday was a jump packed day for our family. Came morning, we had our usual weekend routines which are general cleaning and refilling of food supplies. So, while my parents were out to buy some groceries for the week, the three of us sibling were cleaning the whole house. As always, we have our assigned wherein I was assigned to sweep the floor, my sister was tasked in wiping glass windows and other furnitures. While my brother was tasked in mopping the floor. <br /> <br /> 
                                When my parents came home, we readily fix the groceries and they are now busy cooking and preparing meals since we have a visitor today. Came afternoon, visitors came and they ate lunch and snacks in the house. The meals that we prepared were Mixed Vegetables, Sinigang na Hipon, Chicken Barbeque, Pesto and Ginataan. For desserts, we prepared Buko Pandan and Cake. We also set-up a karaoke for them to enjoy. After all the preparation, my siblings and I were just doing our personal stuffs such as doing school works, coding, playing, resting and we're also helping around. Came evening, the visitors went home already and it's our time for karaoke bonding! My family and I were able to sing a couple of songs and after that, we prayed the rosary and continued doing personal stuffs. 
                                I can say that this was a great day especially there are lots of food which I really love. 
                        </p>
                    </div>
                </div> 
            </div>

            <div className="row pb-5 wholeCard container-fluid">
                <div className="card">
                    <div className="card-header card-date-two">
                    March 6, 2022
                    </div>
                    <div className="card-body card-body-two">
                        <h5 className="card-title">My Sunday</h5>
                        <p className="card-text">        
                                This Sunday was just a simple day for our family. As usual, we needed to do our household chores and we needed also to fold the clothes in the basket. After those activites, we had our lunch for the day which are yesterday's left-overs foods such as Sinigang na Hipon, Mixed Vegatables and my brother prepared fried chicken too. Now, we needed to take a bath because we will pray the rosary and attend virtual mass. <br /><br />
                                The mass that we our attending was from Fr. Jerry Orbos, SVD which we just met online this pandemic. He's kind of an old priest yet a very cool and humble one. The homily was just about temptations, Fr. Jerry said that in order to resist temptation, we must have an early warning device (which is a triangle shaped that we see in the roads). Since a triangle has 3 sides, we also need to have these 3 things to combat temptations and these are: Prayer, Flee and Humility. To pray is to ask for God's guidance and make the evil spirit go away whereas to flee means to stay away from the temptation and to be humble in accepting that we are a sinner and God is a merciful forgiver as well.
                                After the mass, we had our merienda which are the foods yesterday again: Pesto, Ginatan and Cake. Then, we just stream ASAP from ABS-CBN Kapamilya online and did some slight karaoke. I was also doing my coding for this homework and handling the status of our seminar.
                                Overall, today was a simple yet great one again because I had spent time with my family and just enjoy their company.



                        </p>
                    </div>
                </div>
            </div>

          
        </>
    );
}

export default Weekend;