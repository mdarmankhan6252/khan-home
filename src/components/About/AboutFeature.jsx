
const AboutFeature = ({feature}) => {
    // console.log(feature);
    return (
        <div className="overflow-hidden">
            <img src={feature.image} alt="" className="hover:-rotate-3 duration-500 hover:scale-105" />
        </div>
    );
};

export default AboutFeature;