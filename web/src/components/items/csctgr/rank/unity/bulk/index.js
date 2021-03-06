import React from 'react'
import {
    Col,
    Label,
    Input,
    InputGroup,
    FormGroup,
    InputGroupAddon
} from 'reactstrap'

const Bulk = () =>(
	<FormGroup row>
	<Col xs={2} />
	<Col xs={2}><Label>体积</Label></Col>
	<Col xs={6}>
	<InputGroup>
        <Input name="bulk" />
        <InputGroupAddon>m³</InputGroupAddon>
	</InputGroup>
	</Col>
	<Col xs={2}/>
	</FormGroup>
)

export default Bulk
