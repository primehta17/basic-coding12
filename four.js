// program to extract value as an array from an array of objects

const array1 = [1, 3, 5, 6];
const array2 = [1, 3, 5, 6];
function compare(array1,array2){
    if(array1.length != array2.length){
        return false;
        }else{
        for(let i=0;i<array1.length;i++){
             if(array1[i] !== array2[i]){
               return false;
             }
        }
       return true;
    }
}

console.log(compare(array1,array2));

