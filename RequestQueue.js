/**
 * Classe que representa uma fila de requisições.
 */
export class RequestsQueue {
	/**
	 * Cria uma nova instância da fila de requisições.
	 */
	constructor() {
		this.requests = {}
		this.nextIndex = 0
		this.previousIndex = 0
		this.isProcessing = false
	}

	/**
	 * Adiciona uma request à fila.
	 * @param {Function} request - A request a ser enfileirada.
	 */
	enqueue(request) {
		this.requests[this.previousIndex] = request
		this.previousIndex++
	}

	/**
	 * "Atende" a primeira request da fila
	 */
	dequeue() {
		delete this.requests[this.nextIndex]
		this.nextIndex++
	}

	/**
	 * Retorna a próxima request da fila sem removê-la.
	 * @returns {*} A próxima request da fila.
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

	async processQueue() {
		if (this.isProcessing) return;

		this.isProcessing = true;

		while (this.nextIndex < this.previousIndex) {
			const request = this.peek();
			try {
				await request();
			} catch (error) {
				console.error('Erro na requisição:', error);
			}
			this.dequeue();
		}

		this.isProcessing = false;
	}
}