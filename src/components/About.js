import "./About.css"
import Footer from "./Footer";
import pics from "./pics.jpg"
const About = () => {
    return(
        <div>
                    <div id="about">
            <div className="About-text">
               <h1>Hello</h1>
               <h3>About Us</h3>
               <p>welcome to our photography website where we bring to
                you best photography services both outdoor and within our 
                studios we also  do makeup and offer the best and most recent
                fashions to our clients,in our outdoor services we offer discounts
                to our clients with wedding,birthday and many more events
                welcome one welcome all.

               </p>
               <div className="but">
                <button>Learn more</button>
            </div>
        </div>
        <div className="About-pic">
            <img src={pics} alt="gallery"/>

        </div>
            
        </div>
        <Footer />
        </div>
    );
}
export default About;