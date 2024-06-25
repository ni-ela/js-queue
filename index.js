import { api, getAuthHeader } from "./api.js"
import { RequestsQueue } from "./RequestQueue.js"

// Cria a fila de requisições
const queue = new RequestsQueue()

/**
 * Função que inclui novas requisições na fila
 */
export function createRequest() {
	let prompt = document.getElementById('prompt').value
	queue.enqueue(() => sendQuestion(prompt));

	
	document.getElementById('prompt').value = ''
	queue.print;
}

export function atende() {
	document.getElementById('queue').style.display = 'block'
	queue.processQueue();
	queue.print;
}

const PLUGIN_TYPE = 'EXCEL'
const CHAT_ENDPOINT = '/v1/chat'

const sendQuestion = async (question) => {
	let data
	const body = formatRequest(question);
	const headers = await getAuthHeader()
	const response = await api.post(CHAT_ENDPOINT, body, {
		headers: headers,
		requestType: "stream",
		responseEncoding: "utf8",
		timeout: 150000
	});
	data = response?.data[0].message.content
	document.getElementById('queue').innerHTML += `<li>${data}</li>`;
}


const formatRequest = (question) => {
	return {
		message: question,
		properties: {
			temperature: 0,
			stream: false,
			formatStreamResponse: false,
			pluginContent: null,
			pluginType: PLUGIN_TYPE,
		},
	};
};
