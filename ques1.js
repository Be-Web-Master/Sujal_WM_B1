// There will be voting tommorow. Before voting we need to check eligible voters. We have name and age of the voter. The voter age less than 18 will be consider as not eligible.
// const voters = [ { name:"a", age:18 }, { name:"b", age:15 }, { name:"c", age:21 }, { name:"d", age:17 }, { name:"e", age:19 } ]
// function updateVotersEligibilty(voters) - this function will return array of objects
// output - [ { name:"a", age:18, "eligible":true }, { name:"b", age:15, "eligible":false }, { name:"c", age:21, "eligible":true }, { name:"d", age:17, "eligible":false}, { name:"e", age:19, "eligible":true } ]

const voters = [ { name:"a", age:18 }, { name:"b", age:15 }, { name:"c", age:21 }, { name:"d", age:17 }, { name:"e", age:19 } ]

function updateVotersEligibilty(voters){
    voters.forEach(elem => {
        if(elem.age>=18) elem.eligible = true;
        else elem.eligible = false;
    });
    return voters
}

console.log(updateVotersEligibilty(voters));