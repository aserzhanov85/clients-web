import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ClientsRoute, { clientsLoader, createClientAction } from './routes/ClientsRoute';
import ClientRoute, { clientLoader } from './routes/ClientRoute';
import ClientUpdateRoute, { updateClientAction } from './routes/ClientUpdateRoute';
import ErrorPage from './routes/ErrorPage';
import { removeClientAction } from './routes/ClientRemoveRoute';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route 
        path="/" 
        element={<ClientsRoute/>}
        loader={clientsLoader}
        action={createClientAction}
        errorElement={<ErrorPage />}
      >
        <Route errorElement={<ErrorPage />}>
          <Route path='/clients'>
            <Route 
              path="/clients/:clientId" 
              element={<ClientRoute/>}
              loader={clientLoader}
            />
            <Route 
              path="/clients/:clientId/update" 
              element={<ClientUpdateRoute/>}
              loader={clientLoader}
              action={updateClientAction}
            />
            <Route 
              path="/clients/:clientId/remove" 
              action={removeClientAction}
            />
          </Route>
        </Route>
      </Route>
  )
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={ router }/>
  </ThemeProvider>
);