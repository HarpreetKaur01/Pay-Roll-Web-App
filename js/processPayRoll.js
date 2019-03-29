function GenerateSal()
{
	var eNumber, eName, eDepartment, eHours, eCode, eQual_code, eRegFixSal , grossSalary ,payRate, over_time, deduction, netPay;

	eNumber = document.getElementById("eNumber_id").value;
	eNumber = parseInt(eNumber);
	eName = document.getElementById("eName_id").value;
	eDepartment = document.getElementById("eDepartment_id").value;
	eHours = document.getElementById("eHours_id").value;
	eHours = parseInt(eHours);
	eCode = document.getElementById("eCode_id").value;
	eQual_code = document.getElementById("eQual_code_id").value;
	eRegFixSal = document.getElementById("eRegFixSal_id").value;
	eRegFixSal = parseInt(eRegFixSal);
	payRate = eRegFixSal/160;

	function INCOMETAX()
	{
		if(grossSalary>=5000)
			{
				deduction = (((grossSalary-5000)*25)/100)+33;
				netPay = grossSalary-deduction;
				
			}
		else
			{
				if(grossSalary>499.99)
				{
					deduction = 33
					netPay = grossSalary-deduction;
				}
				else
				{
					deduction = 19.20;
					netPay = grossSalary-deduction;
				}
			}	
		alert("------Employee Pay Slip------- \n\n"+"Number: "+eNumber+"\n"+"Name: "+eName+"\n"+"Department: "+eDepartment+"\n"+"Employee Type: "+eCode+"\n"+"Work Hours: "+eHours+"\n"+"Gross Salary: "+grossSalary+"\n"+"Deduction: "+deduction+"\n"+"Net Pay: "+netPay);
	}

	if(eCode=="L" || eCode=="l")
	{
			if(eQual_code=="MASTER")
			{
				grossSalary = (575*eHours)+2500;
				INCOMETAX();
			}
			else if(eQual_code=="BACHELOR")
			{
				grossSalary = (325*eHours)+1250;
				INCOMETAX();
			}
			else
			{
				alert("Please enter the valid qualification code");
			}
	}
	
	else if(eCode=="R" || eCode=="r")
	{	
		if(eHours==160)
		{
			grossSalary = eRegFixSal;
			INCOMETAX();
		}
		else if(eHours<160)
		{
			grossSalary = payRate*eHours;
			INCOMETAX();
		}
		else 
		{
			over_time = eHours-160;
			grossSalary = (payRate*160)+(over_time*payRate*2);
			INCOMETAX();
		}
	}
	
	else
	{
	alert("Please enter valid employee code");
	}
		
}
document.getElementById("genSal_id").onclick = GenerateSal;