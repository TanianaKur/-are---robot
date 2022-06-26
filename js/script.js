const userName = 'Волк';
const sleep = (ms) => {
	return new Promise((res) => setTimeout(res, ms));
};

const myAsyncFunc = async () => {
	for (let num = 0; num < 10; num++) {
		console.log('Заяц');
		await sleep(1500);
		console.log(userName);
		await sleep(1500);
	}
	console.log('Я сломался.....');
};

myAsyncFunc();
