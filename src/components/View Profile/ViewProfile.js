import React from "react";
import './style.css'

function ViewProfile(){
    return(
      <div className="form">
        <div className="form-body">
          <form action="">
              <label className="form__label" for="fname">First name:</label>
              <input className="form__input" type="text" id="fname" name="fname" value="John"></input>
              <label className="form__label" for="lname">Last name:</label>
              <input className="form__input" type="text" id="lname" name="lname" value="Doe"></input>
                <input className="form__submit" type="submit" value="Submit"></input>
          </form> 
          <form action="">
              <label className="form__label" for="fname">Education:</label>
              <select className="form__input" name="edLevel" id="edLevel">
                  <option value="None"> </option>
                  <option value="HighSchool">HighSchool Diploma</option>
                  <option value="Certification">Certification</option>
                  <option value="Bachelors">Bachelors Degree</option>
                  <option value="Masters">Masters Degree</option>
                  <option value="PhD">PhD</option>
              </select>
                <input className="form__submit" type="submit" value="Submit"></input>
          </form>
        </div> 
      </div>  
    );
}

export default ViewProfile;