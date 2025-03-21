import { useLocation } from 'react-router-dom';
import React from "react";

export default function Login() {
    const location = useLocation();
    const selectedRows = location.state?.selectedRows || [];

    return (
        <div>
            <h2>Selected Rows</h2>
            {selectedRows.length > 0 ? (
                <ul>
                    {selectedRows.map((row) => (
                        <li key={row.id}>
                            {row.name} - {row.age}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No rows selected.</p>
            )}
        </div>
    );
}
