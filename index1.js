// evenNum = 11;

// function even (num) {

//     if (num%2 != 0){
//         console.log(num + ' is not an even number');
//         console.log(`${num} is not an even number`);
//     } else {
//         for (i = 0; i < num; i++) {
//             if (i % 2 == 0) {
//                 console.log(i);
//             };
//         };
//     };
    
// };


// even(evenNum);

arruserInput = [];
document.getElementById('input-button').addEventListener("click", () => {
    var userInput = document.getElementById('input-box').value;
    let arrelements = userInput.split(',');
    let max = Math.max.apply(null, arrelements);
    console.log(max);
    document.getElementById('output-box').innerHTML=`Highest value is ${max}`;
    document.getElementById('input-box').value = '';
});
