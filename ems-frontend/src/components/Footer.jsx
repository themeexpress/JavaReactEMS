import React from 'react'

export const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="#">
          © {year}. All Rights reserved by Employee Management System
          </a>
        </div>
      </nav>
    </footer>
  )
}
