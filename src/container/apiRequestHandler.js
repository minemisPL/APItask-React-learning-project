import { requests, panelNames } from "../config";

const API_URL = "https://jsonplaceholder.typicode.com"

const requestsMap = new Map()
const requestFields = []
const panelNamesFields = []

for (const [, panelName] of Object.entries(panelNames)) {
    panelNamesFields.push(panelName)
}

for (const [, request] of Object.entries(requests)) {
    requestFields.push(request)
}

for (let i = 0; i < panelNamesFields.length; i++) {
    requestsMap.set(panelNamesFields[i], requestFields[i])
}

export const getDataFromApi = async (panelName) => {
    const request = requestsMap.get(panelName)

    const response = await fetch(`${API_URL}${request}`)
    return await response.json()
}
