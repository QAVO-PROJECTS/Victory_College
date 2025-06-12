import './index.scss'
import image from "/src/assets/Group13.png"
import {useNavigate} from "react-router-dom";

function HomeAbout() {
    const navigate = useNavigate();
    return (
        <div id={"home-about"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6 col-md-12 col-sm-12 col-xs-12"}>
                        <div className={"image"}>
                            <h3>Bir Addımda Təhsil İmkanını Yaxala!</h3>
                            <img src={image}/>
                        </div>
                    </div>
                    <div className={"col-6 col-md-12 col-sm-12 col-xs-12"}>
                        <div className={"content"}>
                            <h3>Bir Addımda Təhsil İmkanını Yaxala!</h3>
                            <p>Victory Colleges olaraq məqsədimiz yalnız bilik vermək deyil, eyni zamanda səni
                                ilhamlandırmaq, dəstəkləmək və gələcəyini inamla qurmaq üçün gücləndirməkdir. Bu yol
                                fərdi inkişaf, əzm və yönlü dəstəklə mümkün olur – və biz bu yolculuqda sənə bələdçilik
                                etmək üçün buradayıq.</p>
                            <button onClick={()=>navigate("/form")}>Məlumat Al</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;