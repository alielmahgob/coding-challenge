import { useState } from "react"
import {
  Home,
  DollarSign,
  Circle,
  Globe,
  Settings,
  StopCircle,
  ArrowLeft,
  ChevronDown,
  User,
  X,
  HelpCircle,
  Search,
  Filter,
  File,
  Calendar,
} from "react-feather"
import MainTable from "./components/main table/MainTable.component"
import DatePicker from "react-flatpickr"

import "./App.scss"
import "flatpickr/dist/themes/material_blue.css"

export default () => {
  const [search, setSearch] = useState("")
  return (
    <div className="my-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-icon"></div>
          <h3 className="sidebar-header-title">beyonic</h3>
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-content-items">
            <li className="item item-selected">
              <div>
                <Home className="icon" size={17} /> <span>Dashboard</span>
              </div>
            </li>
            <li className="item">
              <div>
                <DollarSign className="icon" size={17} /> <span>Balance</span>
              </div>
              <ChevronDown size={17} />
            </li>
            <li className="item">
              <div>
                <ArrowLeft className="icon" size={17} />{" "}
                <span>Transactions</span>
              </div>
              <ChevronDown size={17} />
            </li>
            <li className="item">
              <div>
                <Circle className="icon" size={17} /> <span>Orginazations</span>
              </div>
            </li>
            <li className="item">
              <div>
                <StopCircle className="icon" size={17} /> <span>Groups</span>
              </div>
            </li>
            <li className="item">
              <div>
                <Globe className="icon" size={17} /> <span>Zones</span>
              </div>
            </li>
            <li className="item">
              <div>
                <Settings className="icon" size={17} /> <span>Settings</span>
              </div>
            </li>
          </ul>
          <div className="sidebar-content-footer">
            <User size={25} />
            <div className="sidebar-content-footer-credentials">
              <h6>John kowalski</h6>
              <small>Administrator</small>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-content">
          <ArrowLeft className="arrow" size={20} />
          <h2>Transaction</h2>
          <div className={`input-container ${search && "value"}`}>
            <input value={search} onChange={e => setSearch(e.target.value)} />
            <X size={15} onClick={() => setSearch("")} />
          </div>
          <HelpCircle size={18} />
        </div>
      </div>
      <div className="content">
        <div className="content-info">
          <h4>Country of interest</h4>
          <hr />
          <small>Kenya</small>
        </div>
        <div className="content-info">
          <h4>Edit transactions</h4>
          <hr />
          <small>
            Edit the transaction below to match theright infortmation
          </small>
        </div>
        <div className="content-table">
          <div className="content-table-header">
            <div className="search-container">
              <div className="toggle">
                <span>Local</span>
                <ChevronDown size={15} />{" "}
              </div>
              <div className="search">
                <Search size={15} />
              </div>
              <input placeholder="Search" />
            </div>
            <div className="content-table-header-right_side">
              <div className="button-container">
                <div class="button-container-left_side">
                  <Filter size={15} />
                  <span>Filter</span>
                </div>
                <ChevronDown size={15} />
              </div>
              <div className="button-container">
                <div class="button-container-left_side">
                  <File size={15} />
                  <span>Export as</span>
                </div>
                <ChevronDown size={15} />
              </div>
              <div className="date-container">
                <Calendar size={15} />
                <DatePicker
                  options={{
                    mode: "range",
                  }}
                  placeholder="start date - end date"
                />
              </div>
            </div>
          </div>
          <div className="content-table-main">
            <MainTable />
          </div>
        </div>
      </div>
    </div>
  )
}
