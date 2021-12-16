import React, { useState } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
  } from 'cdbreact';
  import { NavLink} from 'react-router-dom';
  
  


 
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Sidebar  () {
    //const [isOpen, setIsOpen] = useState()
    
    return (
      
      <div style={{ display: 'flex', position:'absolute', height: '100vh', overflow: 'scroll initial' }}>
        <div className="sideNav">  
        <CDBSidebar textColor="#000000" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Food For All
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
            <NavLink exact to="/search"  style={{ textDecoration: "none" }}className="Nav-Link">
                <CDBSidebarMenuItem icon="columns">Recipe Search</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/nutrition" style={{ textDecoration: "none" }}className="Nav-Link">
                <CDBSidebarMenuItem icon="table">Nutrition Data</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" style={{ textDecoration: "none" }}className="Nav-Link">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
              <a href="https://www.webmd.com/diet/a-z/evaluate-latest-diets" style={{ textDecoration: "none" }}className="Nav-Link">
                <CDBSidebarMenuItem icon="chart-line">Diet Information</CDBSidebarMenuItem></a>
              
              
            </CDBSidebarMenu>
          </CDBSidebarContent>
          
          <CDBSidebarFooter style={{ textAlign: "center" }}>
                <div
                  className="sidebar-btn-wrapper"
                  style={{
                    padding: "20px 5px"
                  }}
                >
                  Sidebar Footer
                </div>
              </CDBSidebarFooter>
        </CDBSidebar>
        </div>
      </div>
      
    );
  };
  export default Sidebar;