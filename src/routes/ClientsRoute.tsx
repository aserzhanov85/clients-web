import { redirect } from 'react-router-dom';
import Clients from '../components/ClientsComponent';
import { getAllClients, createClient } from '../services/ClientService';


export async function clientsLoader({ request }: any) {
    const url = new URL(request.url);
    const filter = url.searchParams.get("filter") ?? undefined;
    const clients = await getAllClients(filter);
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