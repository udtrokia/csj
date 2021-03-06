/*
* rank/unity
*
*/

import React from 'react'
import {
    Col
}from 'reactstrap'

import Bulk from './bulk'
import Idcode from './idcode'
import Sprice from './sprice'
import Mprice from './mprice'
import Store from './store'
import Weight from './weight'
import Uppic from './uppic'

const Unity =()=> (
	<Col xs={12}>
	<hr className="hr"/>
	<Idcode />
	<hr className="hr"/>
	<Sprice />
	<hr className="hr"/>
	<Mprice />
	<hr className="hr"/>
	<Store />
	<hr className="hr"/>
	<Weight />
	<hr className="hr"/>
	<Bulk />
	<hr className="hr"/>
	<Uppic />
	</Col>
)

export default Unity
