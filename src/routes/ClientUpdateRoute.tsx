import { redirect } from "react-router-dom";
import ClientUpdateComponent from "../components/ClientUpdateComponent";
import { ClientData, updateClient } from "../services/ClientService";

export async function updateClientAction({ request, params } : { request: any, params: any}) {
    const formData = await request.formData();
    const updates: ClientData = Object.fromEntries(formData) as ClientData;
    await updateClient(params.clientId, updates);
    return redirect(`/clients/${params.clientId}`);
}

export default function ClientUpdateRoute() {
    return (
        <ClientUpdateComponent/>
    );
}