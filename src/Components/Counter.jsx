import React, { useState } from 'react';
import {Card, Button} from 'react-bootstrap'; 
const Counter =()=>{
    const[count, setCount] = useState({
        value:0
    })
    const increment =()=>{
        setCount({
            value: count.value+1
        })
    }
    const decrement =()=>{
        setCount({
            value: count.value-1
        })
    }
    return(
        <>
            <Card style={{ width: '250px' }}>
                <Card.Body>
                    <Card.Title>{count.value}</Card.Title>
                    <Button onClick={increment} varient='primary' className='m-1'> Increment</Button>
                    <Button onClick={decrement}  variant="success">Decrement</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default Counter;