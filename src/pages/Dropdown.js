import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function Ddown() {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Language
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">english</Dropdown.Item>
      <Dropdown.Item href="#/action-2">hindi</Dropdown.Item>
      <Dropdown.Item href="#/action-3">french</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}
   
