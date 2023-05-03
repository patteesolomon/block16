const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
/*      PSUDOCODE       */
// always test
// functions as is
// dont use an array for singles
// dont iterate over an array
// until you have the code
// necessary to produce basic 
// functions
// then build on that

// checkoutSystem = (customer) =>
// {
//     totalCost = customer.pricePerRefill * refills;
//     customerHasSubscription = customer.subscription;
//     customerHasCoupon = customer.coupon;
//     if(customerHasSubscription && customerHasCoupon){
//         calculateCost1(totalCost, subscriptionDiscount);
//     }
//     else if(customerHasCoupon && !customerHasSubscription)
//     {
//         return calcCost2(totalCost);
//     }
//     else if (customerHasSubscription)
//     {
//         return totalCost -= subscriptionDiscount
//     }
// }

/**
 *  Time to setup the if statments- 
 * 
 *  If a customer has a subscription and a coupon.
 *  They get a 25% discount on their total cost.
 *  If a customer has a coupon but no subscription.
 *  They get a 10% discount on their total cost.
 *  If a customer has no subscription and no coupon.
 *  They pay full price.
 */

const consumer = (customer) => 
{
    // phase 1 all calc no instructions.
    let totalCost = customer.pricePerRefill * customer.refills;
    const subDis = totalCost * .25;
    
    // phase 2 discount for subscription and or coupon after refill
    // total calc
    if(customer.subscription)
    {
        totalCost -= subDis;
    }
    if (customer.coupon) 
    {
        totalCost -= 10;
    }
    return totalCost;
 
}

// phase 3 total amount printed

console.log(consumer(rocky));

// Remember to REALLY USE operators 
// because js won't assume anything.