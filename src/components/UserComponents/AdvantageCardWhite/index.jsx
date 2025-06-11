import "./index.scss"
function AdvantageCardWhite({ img, desc1, desc2 }) {
    return (
        <div className={'col-6 col-md-12 col-sm-12 col-xs-12'}>
            <div id={"advantageCardWhite"}>
                <div className={"content"}>
                    <div className={"text"}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M4.16675 11.7502L6.86091 13.771C7.03288 13.8999 7.24802 13.9574 7.46138 13.9315C7.67475 13.9056 7.86984 13.7982 8.00591 13.6318L15.0001 5.0835" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <p>{desc1}</p>
                    </div>
                    <div className={"text"}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M4.16675 11.7502L6.86091 13.771C7.03288 13.8999 7.24802 13.9574 7.46138 13.9315C7.67475 13.9056 7.86984 13.7982 8.00591 13.6318L15.0001 5.0835" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <p>{desc2}</p>
                    </div>
                </div>
                <div className={"image"}>
                    <img src={img} />
                </div>
            </div>
        </div>
    );
}

export default AdvantageCardWhite;