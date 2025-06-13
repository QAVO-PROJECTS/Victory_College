import "./index.scss"
function AdvantageCardDark2({img, desc1, desc2}) {
    return (
        <div >
             <div id={"advantageCardDark2"}>
                 <div className={"content"}>
                     <div className={"text"}>
                         <div>
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                 <path d="M4.16675 12.2502L6.86091 14.271C7.03288 14.3999 7.24802 14.4574 7.46138 14.4315C7.67475 14.4056 7.86984 14.2982 8.00591 14.1318L15.0001 5.5835" stroke="#35384C" stroke-width="1.5" stroke-linecap="round"/>
                             </svg>
                         </div>
                         <p>{desc1}</p>
                     </div>
                     <div className={"text"}>
                         <div>
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                 <path d="M4.16675 12.2502L6.86091 14.271C7.03288 14.3999 7.24802 14.4574 7.46138 14.4315C7.67475 14.4056 7.86984 14.2982 8.00591 14.1318L15.0001 5.5835" stroke="#35384C" stroke-width="1.5" stroke-linecap="round"/>
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

export default AdvantageCardDark2;