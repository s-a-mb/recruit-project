import React from "react";

function ViewProfile(){
    return(
      <div>
        <form action="">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" value="John"></input>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" value="Doe"></input>
            <input type="submit" value="Submit"></input>
        </form> 
        <form action="">
            <label for="fname">Education</label>
            <select name="edLevel" id="edLevel">
                <option value="None"> </option>
                <option value="HighSchool">HighSchool Diploma</option>
                <option value="Certification">Certification</option>
                <option value="Bachelors">Bachelors Degree</option>
                <option value="Masters">Masters Degree</option>
                <option value="PhD">PhD</option>
            </select>
            <input type="submit" value="Submit"></input>
        </form> 
      </div>  
    );
}

export default ViewProfile;