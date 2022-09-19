// List of Bills
bills = [bill_1 = { A: 2000, B: 200, C: 1000 },
bill_2 = { A: 1500, B: 0, C: 0, D: 1300 },
bill_3 = { B: 1000, C: 0 },
bill_4 = { X: 400, Y: 3000, Z: 400 },
bill_5 = { E: 500, F: 700, G: 800 }]
//------------------------------------------------------------------------------------
// Average of each Bill 
const averageOfEachBill = (object) => {
    rateList = [] // List of Amount
    sumOfList = 0 // For sum of rate list
    average = 0
    for (i in object) {
        rateList.push(object[i])
    }
    for (i of rateList) {
        sumOfList = sumOfList + i
    }
    average = sumOfList / rateList.length // calculating average of the bill
    return average
}
//------------------------------------------------------------------------------------
//Paid amount of the user in each bill
const paidByEachBill = (object) => {
    average = averageOfEachBill(object) // Average Function
    for (i in object) {
        object[i] = object[i] - average
    }
    return object
}
//------------------------------------------------------------------------------------
// Paid by each Bill
for (i in bills) {
    bills[i] = paidByEachBill(bills[i])
}
//------------------------------------------------------------------------------------
settlement = {}//Final Settlement Object
for (i = 0; i < bills.length; i++) {
    for (e in bills[i]) {
        if (e in settlement) {
            settlement[e] = settlement[e] + bills[i][e]
        }
        else {
            settlement[e] = bills[i][e]
        }
    }
}
//------------------------------------------------------------------------------------
personToPay = {} // have to pay
personToGet = {} // have to get
for (i in settlement) {
    if (settlement[i] == 0) {
        console.log(i + " no need to pay or get Amount...")  // no need to pay if settlement is zero
    }
    else if (settlement[i] < 0) {
        personToPay[i] = settlement[i] // have to pay
    }
    else if (settlement[i] > 0) {
        personToGet[i] = settlement[i]  // have to get
    }
}
//------------------------------------------------------------------------------------
// Sorting the object 
const objectSorting = (Object) => {
    l = []
    for (i in Object) {
        l.push(Object[i])
    }
    function sort(a, b) {
        return a - b
    }
    l.sort(sort) //sorted list
    sortedObject = {}
    for (e of l) {
        for (i in Object) {
            if (Object[i] == e) {
                sortedObject[i] = e
            }
        }
    }
    return (sortedObject)
}
//------------------------------------------------------------------------------------
// Sorting the object in Reverse
const objectSortingReverse = (Object) => {
    l = []
    for (i in Object) {
        l.push(Object[i])
    }
    function sort(a, b) {
        return a - b
    }
    l.sort(sort)
    l.reverse() //reverse the sorted list
    reverseSortedObject = {}
    for (e of l) {
        for (i in Object) {
            if (Object[i] == e) {
                reverseSortedObject[i] = e
            }
        }
    }
    return (reverseSortedObject)
}
//------------------------------------------------------------------------------------
//Sorting the Object
personToGet = objectSortingReverse(personToGet)
personToPay = objectSorting(personToPay)
console.log("Payment have to Get:", personToGet) // Who have to Get Amount
console.log("Payment have to Pay:", personToPay) // Who have to Pay Amount
//------------------------------------------------------------------------------------
// Zero Remove function for Object
const zeroRemove = (object) => {
    zeroRemovedObject = {}
    for (i in object) {
        if (object[i] != 0) {
            zeroRemovedObject[i] = object[i]
        }
    }
    return zeroRemovedObject
}
//------------------------------------------------------------------------------------
// Settling the Amount
for (p in personToPay) {
    for (g in personToGet) {
        if (personToGet[g] > Math.abs(personToPay[p])) {
            console.log(`Amount, ${p} has to pay to ${g}  :  ${Math.abs(personToPay[p]).toFixed(2)} rs/-`)
            personToGet[g] = (personToGet[g]) - (Math.abs(personToPay[p]))
            personToPay[p] = 0
            personToPay = zeroRemove(personToPay)
        }
        else if (personToGet[g] < Math.abs(personToPay[p])) {
            console.log(`Amount, ${p} has to pay to ${g}  :  ${Math.abs(personToGet[g]).toFixed(2)} rs/- `)
            personToPay[p] = Math.floor((personToGet[g])) - Math.floor(Math.abs(personToPay[p]))
            personToGet[g] = 0
            personToGet = zeroRemove(personToGet)
        }
        else if (personToGet[g] == Math.abs(personToPay[p])) {
            console.log(`Amount, ${p} has to pay to ${g}  :  ${Math.abs(personToPay[p]).toFixed(2)} rs/- `)
            personToGet[g] = 0
            personToPay[p] = 0
            personToGet = zeroRemove(personToGet)
            personToPay = zeroRemove(personToPay)
        }
    }
}
//----------------- X ---------------- X --- Thank You --- X -------------------- X --------------------