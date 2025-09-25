// iterative approach
function fibs (n) {
	let sequence = [0];
	if (n <= 1) {
		return sequence;
	} else if (n === 2) {
		sequence.push(1);
		return sequence;
	}

	sequence.push(1);
	for(let i = 2;i < n; i++) {
		let next = sequence[i - 1] + sequence[i - 2];
		sequence.push(next);
	}
	return sequence;
}

// recursive approach
function fibsRec (n) {
	if (n <= 1) {
		return [0];
	} else if (n === 2) {
		return [0,1];
	}

	let sequence = fibsRec(n - 1);
	next = sequence[n - 2] + sequence[n - 3]
	sequence.push(next);

	return sequence;
}


console.log(fibs(5));
console.log(fibsRec(5));