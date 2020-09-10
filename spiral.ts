export default function spiral(size: number): string {
	let numberList: number[] = [];
	for( let counter: number = 1; counter < Math.pow(size, 2) + 1; counter++) {
		numberList.push(counter);
	}
	let numberSpiral: string[][] = [];
	for( let counter: number = 0; counter < size; counter++) {
		let numberSpiralRow: string[] = [];
		for( let counter: number = 0; counter < size; counter++) {
			numberSpiralRow.push('');
		}
		numberSpiral.push(numberSpiralRow);
	}

	let rowIndex: number = 0;
	let colIndex: number = 0;
	let rowDelta: number = 0;
	let colDelta: number = 1;
	let maxDigits = Math.pow(size, 2).toString().length;
	for(let num of numberList) {
		numberSpiral[rowIndex][colIndex] = num.toString().padStart(maxDigits, ' ');
		if (colDelta == 1 && (colIndex + colDelta > size - 1 || numberSpiral[rowIndex][colIndex + colDelta])) {
			rowDelta = 1;
			colDelta = 0;
		} else if (rowDelta == 1 && (rowIndex + rowDelta > size - 1 || numberSpiral[rowIndex + rowDelta][colIndex])) {
			rowDelta = 0;
			colDelta = -1;
		} else if (colDelta == -1 && (colIndex + colDelta < 0 || numberSpiral[rowIndex][colIndex + colDelta])) {
			rowDelta = -1;
			colDelta = 0;
		}else if (rowDelta == -1 && (rowIndex + rowDelta < 0 || numberSpiral[rowIndex + rowDelta][colIndex])) {
			rowDelta = 0;
			colDelta = 1;
		}
		rowIndex += rowDelta;
		colIndex += colDelta;
	}

	let numberSpiralString: string = numberSpiral.map(row => row.join(' ')).join('\n');
	console.log(numberSpiralString);
	return numberSpiralString;
}