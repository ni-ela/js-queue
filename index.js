/**
 * Classe que representa uma fila de requisições.
 */
class RequestsQueue {
	/**
	 * Cria uma nova instância da fila de requisições.
	 */
	constructor() {
		this.requests = {}
		this.nextIndex = 0
		this.previousIndex = 0
	}

	/**
	 * Adiciona um item à fila.
	 * @param {*} item - O item a ser enfileirado.
	 */
	enqueue(item) { // enfileira um item
		this.requests[this.previousIndex] = item
		this.previousIndex++
	}

	/**
	 * "Atende" o primeiro item da fila
	 */
	dequeue() { 
		delete this.requests[this.nextIndex]
		this.nextIndex++
	}
	
	/**
	 * Retorna o próximo item da fila sem removê-lo.
	 * @returns {*} O próximo item da fila.
	 */
	peek() {
		return this.requests[this.nextIndex]
	}

	/**
	 * Imprime a fila de requisições no console.
	 */
	get print() {
		console.log(this.requests);
	}
}

// Cria a fila de requisições
const queue = new RequestsQueue()

/**
 * Função que inclui novas requisições na fila
 */
function createRequest() {
	let prompt = document.getElementById('prompt').value
	queue.enqueue(prompt)
	queue.print;
}

function atende() {
	queue.dequeue()
	queue.print;
}
