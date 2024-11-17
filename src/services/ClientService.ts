export interface ClientData {
    id: string,
    firstName: string,
    secondName?: string,
    lastName: string,
    birthDate?: string
}

const clientList: ClientData[] = [
    {
        id: "1",
        firstName: "Alexandr",
        lastName:"Serzhanov"
    },
    {
        id: "2",
        firstName: "Sergey",
        lastName:"Mazunin"
    },
    {
        id: "3",
        firstName: "Eduard",
        lastName:"Naumov"
    },
    {
        id: "4",
        firstName: "Iliya",
        lastName:"Usukevich"
    }
];

export async function getAllClients(filter?: string): Promise<ClientData[]> {
    if (filter !== undefined) {
        return clientList.filter(client => client.firstName.indexOf(filter) >= 0 || client.lastName.indexOf(filter) >= 0)
    } else {
        return clientList;
    }
}

export async function getClient(id:string): Promise<ClientData> {
    const client = clientList.find(client => client.id === id);
    if (client == undefined) {
        throw new Error("Client was not found");
    } else {
        return client;
    }
}

export async function createClient(): Promise<ClientData> {
    const id: number = clientList.length + 1;
    const client: ClientData = { id: id.toString(), firstName: "New Client First Name", lastName: "New Client LastName" };
    clientList.push(client);
    return client;
}

export async function addClient(client: ClientData): Promise<void> {
    clientList.push(client);
}

export async function updateClient(id:string, client: ClientData) : Promise<void> {
    const index: number = clientList.findIndex((client: ClientData) => client.id === id);
    if (index >= 0) {
        client.id = id;
        clientList[index] = client;
    } else {
        throw new Error("The updated client was not found")
    }
}

export async function removeClient(id:string) {
    const index: number = clientList.findIndex((client: ClientData) => client.id === id);
    if (index >= 0) {
        clientList.splice(index, 1);
    }
}

export default {};