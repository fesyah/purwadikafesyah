// let str = ''
// for (let x =1; x<=10;x++) 
//  {
//     if (x % 2 == 1){
//        str = str + x
//     } else {
//         str = str + x
//     }
// } 
// console.log(str)


// let str = ''
// for (let x =1; x<=10;x++) 
//  {
//     if (x % 2 == 0){
//        str = str + ("*") 
//     } else {
//         str = str + ("#") 
//     }
// } 
// console.log(str)

function pyramid () {
    var height = 10;
    var output = '';
        for (var i = 1; i <= height; i++) {
            

            for (var j = 1; j <= i; j++) {
                
                
                if (j % 2 == 0) {
                    output += "*"
                } else {
                    output += "#"
                }
            }
            output += '\n'
            // break
        }
        console.log(output);
        
}

pyramid();
