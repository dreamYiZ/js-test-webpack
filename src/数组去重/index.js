var arr = [
  { province: "湖南省", cityID: [] },
  { province: "湖北省", cityID: [111] },
  { province: "湖南省", cityID: [] },
  { province: "湖南省", cityID: [222] },
  { province: "湖南省", cityID: [] },
  { province: "湖南省", cityID: [3333] },
];

function removeRepeat(arr, repeatK, vK){

	console.log("arr", arr);
	
	var map = new Map();
	
	for (const v of arr) {
		map.set(v[repeatK], v[vK]);
	}
	
	var newArr= [];
	map.forEach(function(mV,mK,map){
		newArr.push({
			[repeatK]: mK, [vK]: mV
		})
	})
	console.log('newArr', newArr)
	return newArr
}

var arr2 = removeRepeat(arr, 'province', 'cityID')

console.log('arr2', arr2)