import "./index.scss"
import image from "/src/assets/aea4cffa4597b4e10ba34611af39b83d5ade2c32.jpg"

function StudentCard() {
    return (
        <div >
            <div className={"studentCard"}>
                <div className={"image"}>
                    <img src={image}/>
                </div>
                <div className={'content'}>
                    <h6>Jon Kantner</h6>
                    <p>SAT</p>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;