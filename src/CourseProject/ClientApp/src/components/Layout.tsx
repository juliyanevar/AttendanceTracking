import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import LayoutDefault from "./LayoutDefault";


export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <LayoutDefault>
            <NavMenu />
            <Container>
                {props.children}
            </Container>
        </LayoutDefault>
    </React.Fragment>
);
