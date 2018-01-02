// функция случайного выбора элемента
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

let keyTrainer = {
	chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
	// проверка на правильность ввода колличества букв
	checkPositiveInteger(number) {
		while (true) {
			if (number < 1 && number > 26){
				alert('Введите колличество букв от 1 до 26');
			} else if(Math.ceil(number) - number > 0){
				alert('Введите целое число');
				break;
			} else {
				return this.chars;
			};
		};
	},
	// ввод колличества букв
	charCount(number) {
		number = prompt('Введите необходимое количество букв', '');
		return this.setCharCount = number;//this.checkPositiveInteger(setCharCount);	
	},
	// создание массива из случайных элементов значения chars
	task() {
		let arr = [];
		let n = this.charCount()
		for (let index = 0; index < n; index ++){
			arr.push(this.chars[getRandomInt(index, this.chars.length - 1)]);
		};
		return this.createTask = arr;
	},
	// вывод массива task и набор строки из выведенных букв
	startTask() {
		return this.start = prompt(`Наберите эту строку ${this.task()}`, );
	},

	userInput() {
		return this.str = this.startTask().split('')
	},
	userError() {		
		let arr = [];
		let arr1 = this.task();
		let arr2 = this.userInput();
		for (let indexTask = 0; indexTask < arr1.length; indexTask++){
			for (let indexUserInput = 0; indexUserInput < arr2.length; indexUserInput++){
		 		if( arr1[indexTask] !== arr2[indexUserInput]) {
		 			arr.push(arr2[indexUserInput]);
		 			return alert(`Колличество ошибок ${arr.length}. Успехов в следующей тренировке`);
		 		}; 
		 			return alert('Поздравляем у Вас 0 ошибок');				
		 	};
		 	return console.log(arr);
		 };
	}

};
function run(){
	this.setCharCount = keyTrainer.charCount();
	this.task = keyTrainer.task();
	this.startTask = keyTrainer.startTask();
	this.userInput = keyTrainer.userInput();
	this.user.Error = keyTrainer.userError();
};


run();