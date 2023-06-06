class SortFactory {
  doSort() {
    throw new Error("This must be implemented!");
  }
}
class InsertionSortFactory extends SortFactory {
  doSort() {
    return new InsertionSort();
  }
}
class BubbleSortFactory extends SortFactory {
  doSort() {
    return new BubbleSort();
  }
}
class Sort {
  sort() {
    throw new Error("This must be implemented!");
  }
}
class InsertionSort extends Sort {
  sort(array) {
    for(let j = 1; j<array.length; j++)
    {
      let key = array[j];
      let i = j-1;
      while(i>-1 && array[i]>key)
      {
         array[i+1] = array[i];
         i--;
      }
      array[i+1] = key;
    }
    console.log("Insertion Sort has been applied");
    console.log(array);
  }
}
class BubbleSort extends Sort {
  sort(array) {
    for(let i = 0; i<array.length; i++)
    {
      for(let j = i+1; j<array.length; j++)
      {
        if(array[i]>array[j])
        {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
      }
    }
    console.log("Bubble Sort has been applied");
    console.log(array);
  }
}

//Client code
const array = [5,4,3,2,1];
function setSortingAlgorithm(sF,array){
  const s = sF.doSort();
  s.sort(array)
}
const iS =  new InsertionSortFactory();
setSortingAlgorithm(iS, array);
const bS =  new BubbleSortFactory();
setSortingAlgorithm(bS, array);