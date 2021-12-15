import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';


 
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Sidebar () {
    const [isOpen, setIsOpen] = useState()
    
    return (

      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
         
        <CDBSidebar textColor="#000000" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Food For All
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
            <Link to="/search"  style={{ textDecoration: "none" }}className="nav-link">
                <CDBSidebarMenuItem icon="columns">Recipe Search</CDBSidebarMenuItem>
              </Link>
              <Link  to="/nutrition" style={{ textDecoration: "none" }}className="nav-link">
                <CDBSidebarMenuItem icon="table">Nutrition Data</CDBSidebarMenuItem>
              </Link>
              <Link to="/profile" style={{ textDecoration: "none" }}className="nav-link">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </Link>
              <a href="https://www.webmd.com/diet/a-z/evaluate-latest-diets" target="_blank"style={{ textDecoration: "none" }}className="nav-link">
                <CDBSidebarMenuItem icon="chart-line">Diet Information</CDBSidebarMenuItem></a>
              
              
            </CDBSidebarMenu>
          </CDBSidebarContent>
          
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
              
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
        
      </div>
      
    );
  };
  export default Sidebar;