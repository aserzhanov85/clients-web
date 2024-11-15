import { Button, Grid2, Paper, Stack, Typography } from "@mui/material";
import { Form, useLoaderData } from "react-router-dom";
import { ClientData } from "../services/ClientService";

export default function Client() {
    const { client } = useLoaderData() as { client: ClientData };
    return (
        <Paper>
            <Stack direction={"column"}>
                <Grid2 container spacing={2}>
                    <Grid2 size={4}>
                        <Typography>
                            First Name:
                        </Typography>
                    </Grid2>
                    <Grid2 size={8}>
                        <Typography>
                            {client.firstName}
                        </Typography>
                    </Grid2>
                    <Grid2 size={4}>
                        <Typography>
                            Second Name:
                        </Typography>
                    </Grid2>
                    <Grid2 size={8}>
                        <Typography>
                            {client.lastName}
                        </Typography>
                    </Grid2>
                    <Grid2 size={4}>
                        <Typography>
                            Birthday:
                        </Typography>
                    </Grid2>
                    <Grid2 size={8}>
                        <Typography>
                            {client.birthDate}
                        </Typography>
                    </Grid2>
                </Grid2>
                <Stack direction="row">
                    <Form action="update">
                        <Button type="submit">Edit</Button>
                    </Form>
                    <Form method="post" action="remove">
                        <Button color = "error">Remove</Button>
                    </Form>
                    {/* onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }} */}
                </Stack>
            </Stack>
        </Paper>
    );
}