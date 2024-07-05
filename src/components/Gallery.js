import datamain from "./data";
import Footer from "./Footer";
import "./Gallery.css"
export default function Gallery({heading,title,data}){
    console.log(data);

    return(
        <div>
             <div className="head">
            <h1>{heading}</h1>
            <h2>{title}</h2>
            <div id="gallery">
            {
            datamain.data.map((result) => {
                return(
                    <div className="img1">
                       <img src={result.image}/>
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
