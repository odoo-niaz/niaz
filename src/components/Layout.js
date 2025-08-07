'use client';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="d-flex">
            <Sidebar />
            {children}
        </div>
    );
};

export default Layout;
