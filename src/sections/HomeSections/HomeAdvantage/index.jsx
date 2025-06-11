import './index.scss'
import AdvantageCardDark from "../../../components/UserComponents/AdvantageCardDark/index.jsx";
import AdvantageCardWhite from "../../../components/UserComponents/AdvantageCardWhite/index.jsx";
import image from "/src/assets/Group 22.svg"
import image2 from "/src/assets/Group 26.png"
import image3 from "/src/assets/Group 25.png"
import image4 from "/src/assets/team.png"
import {useNavigate} from "react-router-dom";
function HomeAdvantage() {
    const navigate = useNavigate();
    const arr = [
        {
            img:image,
            desc1:"Etibarlı və sistemli tədris mühitinin təmin edilməsi ",
            desc2:"Zəngin tədris materialları və resurs bazası",
        },
        {
            img:image2,
            desc1:"Yüksək nəticələr və uğurlu qəbul göstəriciləri ilə sübut olunmuş uğurlar",
            desc2:"Peşəkar və təcrübəli müəllim heyəti",
        },
        {
            img:image3,
            desc1:"Etibarlı və sistemli tədris mühitinin təmin edilməsi",
            desc2:"Peşəkar SAT hazırlığının həyata keçirilməsi",
        },
        {
            img:image4,
            desc1:"Tələbələrə fərdi yanaşmanın tətbiqi və mentorluq dəstəyinin göstərilməsi",
            desc2:"Hər ay ödənişsiz sınaq imtahanlarının təşkili",
        }
    ]
    return (
        <div id={'homeAdvantage'}>
            <div className={'container'}>
                <div className={"head"}>
                    <h3>Victory Colleges-də Təhsilin Üstünlükləri</h3>
                </div>
                <div style={{marginBottom: '90px'}}>
                    <div className={"row"}>
                        <AdvantageCardDark img={arr[0].img} desc1={arr[0].desc1} desc2={arr[0].desc2}/>
                        <AdvantageCardWhite img={arr[1].img} desc1={arr[1].desc1} desc2={arr[1].desc2}/>
                    </div>
                    <div className={"row"}>
                        <AdvantageCardWhite img={arr[2].img} desc1={arr[2].desc1} desc2={arr[2].desc2}/>
                        <AdvantageCardDark img={arr[3].img} desc1={arr[3].desc1} desc2={arr[3].desc2}/>
                    </div>
                </div>
                <button onClick={()=>navigate("/form")}>Müraciət et</button>
            </div>
        </div>
    );
}

export default HomeAdvantage;