import { redirect } from "react-router-dom";
import { removeClient } from "../services/ClientService";

export async function removeClientAction({ params } : any) {
    await removeClient(params.clientId);
    return redirect("/");
}