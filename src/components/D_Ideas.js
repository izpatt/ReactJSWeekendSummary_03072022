import week1 from '../assets/week1.jpg';
import week2 from '../assets/week2.jpg';
import week3 from '../assets/week3.jpg';
import week4 from '../assets/week4.jpg';
import week5 from '../assets/week5.jpg';
import week6 from '../assets/week6.jpg';
import week7 from '../assets/week7.jpg';
import '../styles/ideas.css';

const Ideas = () => {
    return(
        <>
            <div className="jumbotron">
                <span className="lead">👋🏻 &nbsp; These are some of my past weekend experiences that you might want to try! Follow me on my social media accounts for weekend updates
                &nbsp; 
                    
                    <a href="https://www.facebook.com/Trisha8180" rel="noreferrer"><i class="fa-brands fa-facebook-f"></i> </a>
                    &nbsp; 
                    <a href="https://twitter.com/izpatt" rel="noreferrer"> <i class="fa-brands fa-twitter"></i> </a>
                    &nbsp;
                    <a href="https://www.instagram.com/izpattt_/" rel="noreferrer"><i class="fa-brands fa-instagram"></i> </a>
                
                </span>            
            </div>

              <div className="row d-flex justify-content-center align-content-center py-1 container-fluid ">
                            
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                            </ol>
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={week1} alt="Second slide"/>
                                </div>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src={week2} alt="Second slide"/>
                                </div>
                                
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={week3} alt="Second slide"/>
                                </div>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src={week4} alt="Second slide"/>
                                </div>
                                
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={week5} alt="Second slide"/>
                                </div>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src={week6} alt="Second slide"/>
                                </div>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src={week7} alt="Second slide"/>
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
                       
        </>
    );
}

export default Ideas;