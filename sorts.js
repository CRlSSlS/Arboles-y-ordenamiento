(function(global){
    'use strict';

    function bubbleSort(arr){
        let a = arr.slice();
        for(let i=0;i<a.length-1;i++){
            for(let j=0;j<a.length-1-i;j++){
                if(a[j]>a[j+1]){
                    [a[j],a[j+1]]=[a[j+1],a[j]];
                }
            }
        }
        return a;
    }

    function quickSort(arr){
        if(arr.length<=1) return arr.slice();
        let a = arr.slice();
        let pivot = a[a.length-1];
        let left = [], right = [];
        for(let i=0;i<a.length-1;i++){
            if(a[i]<pivot) left.push(a[i]);
            else right.push(a[i]);
        }
        return quickSort(left).concat([pivot], quickSort(right));
    }

    function shellSort(arr){
        let a = arr.slice();
        let gap = Math.floor(a.length/2);
        while(gap>0){
            for(let i=gap;i<a.length;i++){
                let temp = a[i];
                let j=i;
                while(j>=gap && a[j-gap]>temp){
                    a[j]=a[j-gap];
                    j-=gap;
                }
                a[j]=temp;
            }
            gap = Math.floor(gap/2);
        }
        return a;
    }

    function radixSort(arr){
        let a = arr.slice();
        let max = Math.max(...a);
        let exp = 1;
        while(Math.floor(max/exp)>0){
            let buckets = Array.from({length:10},()=>[]);
            for(let i=0;i<a.length;i++){
                let digit = Math.floor(a[i]/exp)%10;
                buckets[digit].push(a[i]);
            }
            a = [].concat(...buckets);
            exp*=10;
        }
        return a;
    }

    global.Sorts = {
        bubbleSort,
        quickSort,
        shellSort,
        radixSort
    };

})(this);
