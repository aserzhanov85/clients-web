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

export async function getAllClients(): Promise<ClientData[]> {
    return clientList;
}

export async function getClient(id:string): Promise<ClientData | undefined> {
    return clientList.find(client => client.id === id);
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

export default {};