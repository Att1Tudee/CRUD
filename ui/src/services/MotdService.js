export async function getAllMotds() {

    const response = await fetch('/api/motds');
    return await response.json();
}

export async function createMotd(data) {
    const response = await fetch(`/api/motd`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({motd: data})
    })
    return await response.json();
}

export async function deleteMotd(motdId) {
    const response = await fetch(`/api/motd/${motdId}`, {method: 'DELETE'})
    return await response.json();
}

export async function editMotd(data) {
    const response = await fetch(`/api/motd`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({motd: data})
    })
    return await response.json();
}

export async function fetchSettings() {

    const response = await fetch('/api/settings');
    return await response.json();
}