import { redirect } from "react-router-dom";
import ClientUpdateComponent from "../components/ClientUpdateComponent";
import { ClientData, updateClient } from "../services/ClientService";

export async function updateClientAction({ request, params } : { request: any, params: any}) {
    console.log(request);
    const formData = await request.formData();
    let name = formData.get("firstName");
    console.log(name);
    console.log(formData);
    const updates: ClientData = Object.fromEntries(formData) as ClientData;
    console.log(updates);
    await updateClient(params.clientId, updates);
    return redirect(`/clients/${params.clientId}`);
}

export default function ClientUpdateRoute() {
    return (
        <ClientUpdateComponent/>
    );
}