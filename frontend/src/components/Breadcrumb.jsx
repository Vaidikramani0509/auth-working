import React from 'react';
import { Link } from 'react-router-dom'; // or use next/link for Next.js

const Breadcrumb = ({ items }) => {

    return (
        <nav className="bg-gray-100 p-4 rounded-md">
            <ol className="flex space-x-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && <span className="mx-2">/</span>}
                        <Link to={item.href} className="text-blue-600 hover:underline">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
