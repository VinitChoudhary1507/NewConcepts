import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function TableRowSelection() {
    const [selectedRows, setSelectedRows] = useState([]);
    const navigate = useNavigate();

        const data = [
            { id: 1, name: 'John', age: 25 },
            { id: 2, name: 'Jane', age: 30 },
            { id: 3, name: 'Mike', age: 28 },
        ];

    const handleSelect = (row) => {
        setSelectedRows((prev) =>
            prev.some((r) => r.id === row.id)
                ? prev.filter((r) => r.id !== row.id)
                : [...prev, row]
                
        );
      
    };
    useEffect(() => {
        console.log("Updated selectedRows:", selectedRows);
    }, [selectedRows]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login', { state: { selectedRows } });
    };

    return (
        <div>
            <h2>Select Rows and Submit</h2>
            <form onSubmit={handleSubmit}>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleSelect(row)}
                                        checked={selectedRows.some((r) => r.id === row.id)}
                                    />
                                </td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
