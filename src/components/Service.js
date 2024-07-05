import data2main from "./data2";
import Footer from "./Footer";
import "./Service.css"
export default function Service({heading,title,data}){
    console.log(data);
    return(
        <div>
              <div className="head">
            <h1>{heading}</h1>
            <h2>{title}</h2>
            <div id="services">
            {
            data2main.data.map((result) => {
                return(
                    <div className="img2">
                       <img src={result.image} alt="gallery"/>
                       <p>{result.desc}</p>
                    </div>

                )
                })
        }   
            </div>
        </div>
        <Footer />
        </div>
    )
}

       
       