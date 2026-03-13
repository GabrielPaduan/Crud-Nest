import { Box } from "@mui/material";

interface BodyGenericoProps {
    children: React.ReactNode;
}

export function BodyGenerico({ children }: BodyGenericoProps) {
    return (
        <Box display={"flex"} alignItems={"center"} height={"100vh"} width={"100vw"} flexDirection={"column"} gap={10}>
            {children}
        </Box>
    )
}