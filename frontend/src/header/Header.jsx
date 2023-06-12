import React, { useState } from 'react'
import { Menu, Title } from '@mantine/core'
import { Ticket, UserCircle, History, Logout } from 'tabler-icons-react';
import './Header.css'

const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className="head_container">
            <div className="head_title">
                <Title order={3} size="h2">
                    Flight Ticket Booking
                </Title>
            </div>
            <div className="head_profile">
                <Menu opened={open} onChange={setOpen} shadow="md" width={200} position="left-start">
                    <Menu.Target >
                        <UserCircle
                            size={30}
                            strokeWidth={2}
                            color={' rgb(203, 202, 202)'}
                        />
                    </Menu.Target>
                    <Menu.Dropdown >
                        <Menu.Label>
                            User Profile
                        </Menu.Label>
                        <Menu.Item icon={<Ticket
                            size={20}
                            strokeWidth={2}
                            color={'black'}
                        />}>
                            My Bookings
                        </Menu.Item>
                        <Menu.Item icon={<History
                            size={20}
                            strokeWidth={2}
                            color={'black'}
                        />}>
                            History
                        </Menu.Item>
                        <Menu.Item icon={<Logout
                            size={20}
                            strokeWidth={2}
                            color={'black'}
                        />}>
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </div>
    )
}

export default Header