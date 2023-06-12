import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Center, Button, Grid, Input } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import './Router.css'
import { DateInput } from '@mantine/dates'
import { ArrowsExchange } from 'tabler-icons-react';

const Router = () => {
    const [date, setDate] = useState('')
    const [from, setFrom] = useState('Chennai')
    const [to, setTo] = useState('Mumbai')
    return (
        <div>
            <Switch>
                <Route exact path='/home'>
                    <Center maw={700} h={100} mx="auto">
                        <h1>Welcome to Santhosh Booking Site</h1>
                    </Center>
                    <Center>
                        <NavLink to='/home/booking'>
                            <Button variant="outline" color="green">
                                Click To Booking
                            </Button>
                        </NavLink>
                    </Center>
                </Route>
                <Route path='/home/booking'>
                    <div className="booking_table">
                        <div className="fromto">
                            <Input
                                component="select"
                                placeholder="From"
                                radius="md"
                                size='xs'
                                style={{ minWidth: '150px' }}
                                defaultValue={from}
                                onChange={(e) => setFrom(e.target.value)}
                            >
                                <option value="Chennai">Chennai</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Banglore">Bengalore</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Goa">Goa</option>
                                <option value="Salem">Salem</option>
                                <option value="Assam">Assam</option>
                                <option value="West Bengal">West Bengal</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                            </Input>
                            <ArrowsExchange
                                size={24}
                                className='arrowIcon'
                                strokeWidth={2}
                                color={'black'}
                            />
                            <Input
                                component="select"
                                placeholder="From"
                                radius="md"
                                size='xs'
                                style={{ minWidth: '150px' }}
                                defaultValue={to}
                                onChange={(e) => setTo(e.target.value)}
                            >
                                <option value="Chennai">Chennai</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Banglore">Bengalore</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Goa">Goa</option>
                                <option value="Salem">Salem</option>
                                <option value="Assam">Assam</option>
                                <option value="West Bengal">West Bengal</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                            </Input>
                        </div>
                        <DateInput
                            value={date}
                            valueFormat='YYYY MMM DD'
                            onChange={setDate}
                            minDate={new Date()}
                            placeholder="Date input"
                            mx="auto"
                        />
                        <Button onClick={(e)=>console.log(date)}>
                            Search
                        </Button>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Router