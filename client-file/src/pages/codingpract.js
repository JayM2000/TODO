// let obj = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven'}
// const func = (num,obj) => {
//     let conv,rem=0,res='';
    
//     for(;num != 0;num = Math.floor(num/10)){
//         conv = num%10;
//         rem = rem*10 + conv;
//     }

//     for(;rem != 0;rem = Math.floor(rem/10)){
//         conv = rem%10;
//         res = res +obj[`${conv}`]+' ';
//     }

//     return res;
// };
// // 325
// console.log(func(521,obj));
let single_digits = ["zero", "one", "two", "three",
                     "four", "five", "six", "seven",
                     "eight", "nine"];

function func(num,arr) {
    let str = num.toString();
    let cnt =0,res='';

    while(true){
        let ele = (str.charCodeAt(cnt) - 48);
        res = res + arr[ele]+ ' ';

        if((cnt+1) == str.length) {
            break;
        }
        cnt++;
    }
    return res;
};

// console.log(cr.charCodeAt(2)-48);
console.log(func(424,single_digits));

