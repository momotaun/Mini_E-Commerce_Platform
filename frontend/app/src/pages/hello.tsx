import { useEffect, useState } from "react";
import { fetchHello } from "../services/exampleService";

interface HelloResponse {
  message: string;
}

export default function HelloPage() {
    const [helloData, setHelloData] = useState<HelloResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchHello()
        .then((data) => {
            setHelloData(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {helloData && <p>{helloData.message}</p>}
        </div>
    );
}