
import './index.css'

function Spinner(props) {

    const { imgUrl = "", height = "50px", width = "", borderColor ="#F9423A"} = props;
    return (
        <>
            <div aria-hidden="true" className="mainDiv" style={{ opacity: "1", transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}>
                <span className="inside_div">
                    <div><span className="Loading__spinner" style={{ zIndex: "999", borderColor: borderColor }}>
                    </span>


                        {/*     <img className="logo" style={{ width: width, height: height ,top:"50%"}} src={`https://me-apps.corp.pbwan.net/Branding/Images/logo.png`} alt="WSP" />*/}
                        <p className="logo" style={{top:"46%"} }>tedst</p>

                    </div>
                </span>
            </div>
        </>
    );
};
export default Spinner;
