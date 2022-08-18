function sumTwo(arr, sum){
const hash = new Set();

for(let num of arr){
	if(hash.has(num)) return true;

	hash.add(sum - num)
}

 return false;
}