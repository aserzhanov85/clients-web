import { Button, Paper, Stack, TextField } from "@mui/material";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { ClientData } from "../services/ClientService";

export default function ClientUpdate() {
    const { client } = useLoaderData() as { client: ClientData };
    const navigate = useNavigate();
    return (
        <Paper>
            <Form method="post" id="client-form">
                <Stack direction={"column"} spacing={2}>
                    <TextField id="firstName" 
                        name="firstName"
                        label="FirstName" 
                        variant="outlined" 
                        defaultValue={client.firstName} 
                    />
                    <TextField id="lastName" 
                        name="lastName"
                        label="LastName" 
                        variant="outlined" 
                        defaultValue={client.lastName}
                    />
                    <TextField id="birthDate" 
                        name="birthDate"
                        label="Birthdate" 
                        variant="outlined" 
                        defaultValue={client.birthDate}
                    />
                    <Stack direction="row">
                        <Button type="submit">Save</Button>
                        <Button type="button"
                            onClick={() => {
                                navigate(-1);
                            }} 
                            color = "error">Cancel</Button>
                    </Stack>
                </Stack>
            </Form>
        </Paper>
    );
}