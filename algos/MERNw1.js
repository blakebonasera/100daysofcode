// Bubble Sort 
function bubbleSort(array){
    
        for(let i =0; i < array.length -1;i++){
        for( let j=0;j<array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j]=array[j+1];
                array[j+1]= temp;
            }
        }
    }
    return array;
    }
console.log(bubbleSort([387,45,32,66,5]))