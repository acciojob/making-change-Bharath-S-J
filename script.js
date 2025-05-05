const makeChange = (c) => {
  // your name here
	  const coins = [
    ['q', 25],
    ['d', 10],
    ['n', 5],
    ['p', 1],
  ];

	let res={}
	for(let [char,coin] of coins){
		let count=0
		while(c>=coin){
			c-=coin
			count++
		}
		res[char]=count
	}
return res

	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
