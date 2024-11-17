import { Button, List, ListItem, ListItemIcon, ListItemText, Stack, TextField } from "@mui/material";
import { Form, Link, Outlet, useLoaderData } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { ClientData } from "../services/ClientService";
import { useEffect, useState } from "react";

export default function Clients() {
    const { clients, filter } = useLoaderData() as { clients: ClientData[], filter: string | undefined};
    const [query, setQuery] = useState(filter);

    useEffect(() => {
        setQuery(filter);
    }, [filter]);

    return (
        <Stack direction={"row"} spacing={2}>
            <Stack direction={"column"} spacing={2}>
                <Stack direction={"row"}>
                    <Form id="search-form" role="search">
                        <TextField 
                            name="filter" 
                            variant="outlined" 
                            value={query?? ""} 
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }} 
                        />
                    </Form>
                    <Form method="post">
                        <Button type="submit">Add</Button>
                    </Form>
                </Stack>
                <List>
                    {clients.map((client) => (
                        
                            <Link to={`clients/${client.id}`} key={client.id}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PermIdentityOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={`${client.firstName} ${client.lastName}`}
                                    />
                                </ListItem>
                            </Link>
                        
                    ))}
                </List>
            </Stack>
            <Outlet/>
        </Stack>
    );
}