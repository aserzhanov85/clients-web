import Clients from '../components/ClientsComponent';
import { getAllClients } from '../services/ClientService';


export async function clientsLoader() {
    const clients = await getAllClients();
    return { clients };
}

export default function ClientsRoute() {
    return (
        <Clients/>
    );
}