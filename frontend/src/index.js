import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import Router_Auth from "./Router_Auth";

ReactDOM.render(
    <React.StrictMode>
        <MantineProvider withNormalizeCSS withGlobalStyles>
            <ModalsProvider>
                <Router_Auth />
            </ModalsProvider>
        </MantineProvider>
    </React.StrictMode>
    , document.getElementById("root"));
