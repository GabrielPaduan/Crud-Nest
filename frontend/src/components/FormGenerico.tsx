import { Box } from "@mui/material";

interface FormGenericoProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

export function FormGenerico({ onSubmit, children }: FormGenericoProps) {
    return (
        <Box 
            component="form"
            onSubmit={onSubmit}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            width={"100%"}
            maxWidth={"480px"}
        >
            {children}
        </Box>
    )
}