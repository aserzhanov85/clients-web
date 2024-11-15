import Client from '../components/ClientComponent';
import { getClient } from '../services/ClientService';

export async function clientLoader({ params } : { params: any }) {
    const client = await getClient(params.clientId);
    return { client };
}

export default function ClientRoute() {
    return (
        <Client/>
    );
}