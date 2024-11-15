import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { ClientData } from "../services/ClientService";

export default function Clients() {
    const { clients } = useLoaderData() as { clients: ClientData[]};
    return (
        <Stack direction={"row"} spacing={2}>
            <Stack direction={"column"} spacing={2}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Client list
                </Typography>
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