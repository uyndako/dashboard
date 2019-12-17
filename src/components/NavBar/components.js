import React from "react"
import "../NavBar/style.css"
import { Link } from "react-router-dom"

export const NavHeader = () => {
  return (
    <div>
      <div className="header">
			<div className="logo">
				<i className="fa fa-tachometer"></i>
				<span>Dashboard</span>
			</div>
			<Link to="#" className="nav-trigger"><span></span></Link>
		</div>
    </div>
  )
}

export const SideNav = () => {
  return (
    <div className="side-nav">
			<div class="logo">
				<i className="fa fa-tachometer"></i>
				<span>Dashboard</span>
			</div>
			<nav>
				<ul>
        <li className="active">
						<Link to="#">
							<span><i className="fa fa-bar-chart"></i></span>
							<span>Analytics</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span><i className="fa fa-user"></i></span>
							<span>Users</span>
						</Link>
					</li>
					<li>
						<Link to="#">

							<span><i className="fa fa-envelope"></i></span>
							<span>Messages</span>
						</Link>
					</li>
					<li>
						<Link to="#">
							<span><i className="fa fa-credit-card-alt"></i></span>
							<span>Payments</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
  )
}

export const MainContent = () => {
  return (
    <div class="main-content">
			<div class="title">
				SUMMARY
			</div>
      <div className="main">
				<div className="widget">
					<div className="title">User Data Analytics</div>
					<div className="chart"></div>
				</div>
				<div className="widget">
					<div className="title">Financial Data</div>
					<div className="chart"></div>
				</div>
				<div className="widget">
					<div className="title">Summary</div>
					<div className="chart"></div>
				</div>
			</div>
      </div>
  )
}
