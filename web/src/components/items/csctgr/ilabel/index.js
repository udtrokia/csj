
import React from 'react'
import {
    FormGroup,
    Col,
    Input,
    Label,
}from 'reactstrap'


const Ilabel=()=>(
        <FormGroup row>
	<Col xs={2} />
	
	<Col xs={2}><Label>商品标签</Label></Col>
	
	<Col xs={6}>
        <Input type="text" name="label" />{' '}
	</Col>	

	
	<Col xs={2}/>
        </FormGroup>
)

export default Ilabel
