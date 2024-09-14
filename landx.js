import "../style/land.css";
import SvgCircle from "./svgcircle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
export default function Land(){
    return(
        <div>
  <div className="w-full h-[105vh] bg-[url('../components/images/radisson group.jpg')] bg-cover bg-center bg-no-repeat relative">
  <div className="absolute top-[19%] left-0 w-full h-[105%] bg-[rgba(0,59,73,0.65)] z-1">
  <p className="absolute top-[54%] left-[7.5%] text-white text-[19px] z-11">
  Local Government Online Services</p>
  <h1 className="absolute top-[50%] left-[7%] text-white text-[85px] text-left w-[50vw] z-11 leading-[90px]">
  Fastest Growing City Kigali</h1>
  <button className="absolute bottom-[4%] left-[7.5%] w-[12vw] h-[8vh] z-11 bg-[#2dcd7c] text-white border-none text-[17.5px] hover:bg-[#003b49] hover:cursor-pointer transition-[0.75s_ease]">
  Log in
</button>
  </div>


</div>

            <div className="box">
                <SvgCircle />
                <div className="public-record">
                <FontAwesomeIcon icon={faClipboard}  style={{color: "#2dcd7c",width: '28px', height: '50px'}}  className="board" />
                <p className="record-text">Public Record</p>
                </div>
                <div className="gov-service">
                <FontAwesomeIcon icon={ faBriefcase}  style={{color: "#2dcd7c",width: '29px', height: '50px'}}  className="boards" />
        <p className="service-text">Services</p>
        </div>
        <div className="reg-comliance">
        <FontAwesomeIcon icon={ faScaleBalanced }  style={{color: "#2dcd7c",width: '38px', height: '50px'}}  className="boardx" />
        <p className="compliance-text">Regulatory Compliance</p>
        </div>
            </div>
            <input type="text" name="services" className="service-input" placeholder="Get our quick services from your home"/>
            <button className="viewing">View All Services</button>
        </div>
    );
}