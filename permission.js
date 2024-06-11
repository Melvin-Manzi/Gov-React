import '../style/permission.css';
export default function Permission(){
    return(
        <div className='back'>
        <div className='division'>
        <h1 className="building">Building Permission</h1>
        <h1 className="applicant">Applicant</h1>
        <input type="text" placeholder="First Name" className="premier"/>
        <input type="text" placeholder="Last Name" className="deuxieme"/>
        <h1 className="proposed">Proposed Use</h1>
        <p className="text-single">(i.e.,Single Family Dwelling, Townhouse, Restaurant, Retail store, Warehouse, Office)</p>
        <input type="text" className="trois" />
        <h1 className="location-text">Location</h1>
        <p className="text-single singles">(i.e.,Kimihurura,Nyarutarama...)</p>
        <input type="text" className="trois troi" />
        <button className="submit-btn">Submit</button>
        </div>
        </div>
    );
}