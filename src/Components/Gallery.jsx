import ImageCard from "./ImageCard";

export default function Gallery(){
    return(
        <section className="gallery">
        <ImageCard title="Omnifood" cssClass="omnifood" link="https://thesubodh1.netlify.app/"/>
        <ImageCard title="Blog" cssClass="blog" link="https://subodh-blog.vercel.app/"/>
        <ImageCard title="Api" cssClass="api" link="https://github.com/thesubodh1/Rest_APIS"/>
        <ImageCard title="Image Classification" cssClass="imageClassification" link="https://github.com/thesubodh1/Image_Processing"/>
        <ImageCard title="Prece Prediction" cssClass="pricePrediction" link="https://github.com/thesubodh1/Bulldozer_price_prediction"/>
        <ImageCard title="Heart Disease Analysis" cssClass="heartDiseaseAnalysis" link="https://github.com/thesubodh1/Heart_Disese_analysis"/>
        </section>
    );
}