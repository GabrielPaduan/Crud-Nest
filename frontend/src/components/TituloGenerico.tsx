import { Typography } from "@mui/material";

export function TituloGenerico({ value }: { value: string }) {
    return (
        <Typography variant="h1" fontSize={48} paddingTop={10}>
            {value}
        </Typography>
    )
}