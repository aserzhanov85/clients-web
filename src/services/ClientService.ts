export interface ClientData {
    id?: string,
    firstName: string,
    secondName?: string,
    lastName: string,
    birthDate?: string
}

const BACK_HOST: string = "http://localhost:8080";

export async function getAllClients(filter?: string): Promise<ClientData[]> {
    try {
        const response = await fetch(`${BACK_HOST}/clients`, {
          method: 'GET',
        //   mode: 'no-cors',
          headers: {
            Accept: 'application/json'
          }
        });
    
        if (!response.ok) {
          throw new Error(`Error on clients request, status: ${response.status}`);
        }
    
        const clientList: ClientData[] = (await response.json()) as ClientData[];
    
        console.log('Clients were found: ', JSON.stringify(clientList, null, 4));

        //TODO Перенести фильтрацию на бэк
        if (filter !== undefined) {
            return clientList.filter(client => client.firstName.indexOf(filter) >= 0 || client.lastName.indexOf(filter) >= 0)
        } else {
            return clientList;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getClient(id:string): Promise<ClientData> {    
    try {
        const response = await fetch(`${BACK_HOST}/clients/${id}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        });
    
        if (!response.ok) {
          throw new Error(`Client was not found, status: ${response.status}`);
        }
    
        const client: ClientData = (await response.json()) as ClientData;
    
        console.log('Client was found: ', JSON.stringify(client, null, 4));

        return client;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createClient(): Promise<ClientData> {
    try {
        const newClient: ClientData = { 
            firstName: "New Client First Name", 
            secondName: "New Client SecondName", 
            lastName: "New Client LastName" 
        };
    
        const response = await fetch(`${BACK_HOST}/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newClient)
        });

        if (!response.ok) {
            throw new Error(`Client was not created, status: ${response.status}`);
          }
      
          const client: ClientData = (await response.json()) as ClientData;
    
          console.log('Client was created: ', JSON.stringify(client, null, 4));
  
          return client;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function updateClient(id:string, client: ClientData) : Promise<void> {
    //TODO Починить костыли
    client.id = id;
    client.secondName = "secondName";

    await fetch(`${BACK_HOST}/clients/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(client)
    })
    .catch(error => { console.log(error); throw error; });
}

export async function removeClient(id:string) : Promise<void> {
    await fetch(`${BACK_HOST}/clients/${id}`, {
        method: 'DELETE',
    })
    .catch(error => { console.log(error); throw error; });
}

export default {};