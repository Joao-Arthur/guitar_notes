import React from 'react';

import { Container, Label, Box } from './Cell.styles';

interface props {
    text: string;
    size: number;
    active: boolean;
}

export default ({ text, size, active }: props) => (
    <Container size={size}>
        <Box active={active}>
            <Label>{text}</Label>
        </Box>
    </Container>
);