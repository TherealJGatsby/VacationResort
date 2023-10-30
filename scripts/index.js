window.onload = function() {
    // gathering personal details
    const form = document.getElementById("form");
    form.onsubmit = getForm;
}

function getForm(event) {
    event.preventDefault();

    // console.log(event);
    // console.log("form submitted");

    // get My details and event details
    let firstName = document.getElementById("firstName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let numberOfNights = parseInt(document.getElementById("numberOfNights").value.trim());
    let checkInDate = document.getElementById("checkInDate");

   // get the bed size.
    let sizeQueen = document.getElementById("queen");
    let sizeKing = document.getElementById("king");
    let sizeSuite = document.getElementById("suite");

    // Room rate 
    let roomRate = 0;

    if(sizeQueen.checked) {
        roomRate = 150.00;
    } else if(sizeKing.checked) {
        roomRate = 150.00;
    } else {
        roomRate = 210.00;
    }

    let cost = roomRate * numberOfNights;

    // console.log(cost);



    // console.log("firstName",firstName);
    // console.log("email",email);
    // console.log("phoneNumber",phoneNumber);
    // console.log("numberOfNights",numberOfNights);
    // console.log("checkInDate",checkInDate);

    // grab room rate
    // grab discount
    // grab number of nights
    // grab check in date
    // calculate discounted room cost
    // total cost.


     // If discount applied
     let discount = 0;

     const militaryDiscountRadio = document.getElementById("militaryDiscount");
     const seniorDiscountRadio = document.getElementById("seniorDiscount");
     const noDiscountRadio = document.getElementById("noDiscount");
 
     if (militaryDiscountRadio.checked) {
         discount = cost * .2;
     } else if (seniorDiscountRadio.checked) {
         discount = cost * .1;
     }

     let newCost = cost - discount;

     console.log(cost);
     console.log(discount);
     console.log(newCost);

}





