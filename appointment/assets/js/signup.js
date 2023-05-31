function validate(frm) {
	//read from data
  var name = frm.patientFirstName.value;
  var last=frm.patientFirstName.value;
  var ic=frm.icPatient.value;
  var pass=frm.password.value;
  var cpass=frm.confirm_password.value;
//   var mob=frm.phone.value;
  var d=frm.year.value;

 if (name == " ") {
    document.getElementById("fnameErr").innerHTML ="<b>This field is required</b>";
    //alert("First Name is required..!")
    frm.patientFirstName.focus();
    return false;
  }
  else{
  document.getElementById("fnameErr").innerHTML ="";
  }
  
  if(last==" "){
     document.getElementById("snameErr").innerHTML ="<b>This field is required</b>";
    //alert("Last Name is required..!");
    frm.patientLastName.focus();
    return false;
  }
  else{
  document.getElementById("snameErr").innerHTML ="";
  }
  
  if(ic==" "){
    document.getElementById("icErr").innerHTML ="<b>This field is required</b>";
   //alert("Last Name is required..!");
   frm.icPatient.focus();
   return false;
 }
 else{
 document.getElementById("icErr").innerHTML ="";
 }

  if(pass==" "){
  document.getElementById("passErr").innerHTML ="<b>This field is required</b>";
    frm.password.focus();
    return false;
  }
  else{
  document.getElementById("passErr").innerHTML ="";
  }
  
  if(cpass==" "){
  document.getElementById("cpassErr").innerHTML ="<b>This field is required</b>";
    frm.confirm_password.focus();
    return false;
  }
  else{
  document.getElementById("cpassErr").innerHTML ="";
  }
  
	if(pass.length<8){
	document.getElementById("passErr1").innerHTML ="<b>Password length must be 8</b>";
    frm.password.focus();
    return false;
	}
	else{
	document.getElementById("passErr1").innerHTML ="";
  }
  
	 if(pass.length>15){
	document.getElementById("passErr2").innerHTML ="<b>Password length must not exceed 15 characters</b>";
    frm.password.focus();
    return false;
	}
	else{
	document.getElementById("passErr2").innerHTML ="";
  }
  
  if(pass!=cpass){
  document.getElementById("cpassErr1").innerHTML ="<b>Confirm Password not matching</b>";
    frm.confirm_password.focus();
    return false;
  }
	else{
	document.getElementById("cpassErr1").innerHTML ="";
  }
  
   
  
	 if(d>2005){
		document.getElementById("dobErr").innerHTML ="<b>Eligibility 18 years only</b>";
    frm.year.focus();
    return false;
	}
	else{
	document.getElementById("dobErr").innerHTML ="";
  }
  

return true;
}