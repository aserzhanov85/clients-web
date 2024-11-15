import { redirect } from 'react-router-dom';
import Clients from '../components/ClientsComponent';
import { getAllClients, createClient } from '../services/ClientService';


export async function clientsLoader() {
    const clients = await getAllClients();
    return { clients };
}

export async function createClientAction() {
    const client = await createClient();
    return redirect(`/clients/${client.id}/update`);
}

export default function ClientsRoute() {
    return (
        <Clients/>
    );
}