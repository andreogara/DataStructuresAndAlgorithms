 const Stack = (function() {
  const items = new WeakMap();
	class Stack {
		constructor(){
    		items.set(this, []);
    	}
  
  		push(item) {
    		items.get(this).push(item);
    	}
  
  		pop(){
    		return items.get(this).pop();
    	}
      
      	isEmpty() {
        	return items.get(this).length < 1;
        }
	}
    return Stack;                        
})();

function convertToBinary(d) {
  let decimalNumber = Number(d);
  if(!isNaN(decimalNumber)){
     let _stack = new Stack();
	let binaryString = "";
	let remainder;
	let bin;
  	while(decimalNumber > 0){
    	  remainder = Math.floor(decimalNumber % 2);
      	_stack.push(remainder);
      	decimalNumber = Math.floor(decimalNumber / 2);
    }
  
  	while(!_stack.isEmpty()) {
    	bin = _stack.pop();
    	console.log(bin);
    }
  
  	return binaryString;
  }
  return `"${d}" is not a number!`;
}

console.log(convertToBinary("34"));
