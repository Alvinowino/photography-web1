import "./Contacts.css"
import Footer from "./Footer";
// let btn = document.getElementById("btn")
// let names = document.getElementById("myName")
// console.log(names);
// console.log(btn);
// btn.addEventListener('click',(e) => {
// e.preventDefault();
// alert(`Submitted succesfuly, ${names.value}`)
// })

const Form = (props) =>{
    return(
       <div>
         <section id="contact">
            <div className="Container">
                <h1>My Contact</h1>
        <div className="Contact-wrapper">
            <div className="contact-form">
                <h3>contact me</h3>
                <form>
                    <div className="form-group">
                        <input type="text" name="names"
                        placeholder="Your Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="Email"
                        placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <input type="subject" name="subject"
                        placeholder="subject"/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="your
                        message"></textarea>
                    </div>
                    <div>
                    <button id="btn" type="submit">message me</button>
                    </div>
                </form>
            </div>
           </div>
        </div>
        </section>
        <Footer />
       </div>
    )
}
export default Form;