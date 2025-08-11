import { useEffect, useState } from "react";
import { fetchHello } from "../services/exampleService";
import { Logo, Button, Input } from "../components";
import { FaHome, FaSearch } from "react-icons/fa";

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
        <div style={{ maxWidth: 400, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            <Logo image="/logo.svg" brand="Cartzilla" width={36} height={36} /><br />

            <Button typeStyle="primary" size="sm" variant="solid" icon={<FaHome />} iconPosition="left">
                Small Primary Left Icon
            </Button>

            <Input
                size="md"
                placeholder="Search..."
                icon={<FaSearch />}
                iconPosition="left"
                state="idle"
                mode="light"
            />

            <Input
                size="lg"
                placeholder="Disabled input"
                icon={<FaSearch />}
                iconPosition="right"
                state="disabled"
                mode="light"
            />

            <Input
                size="md"
                placeholder="Error input"
                icon={<FaSearch />}
                iconPosition="left"
                state="error"
                mode="light"
            />

            <Input
                size="md"
                placeholder="Dark mode input"
                icon={<FaSearch />}
                iconPosition="left"
                state="idle"
                mode="dark"
            />

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {helloData && <p>{helloData.message}</p>}
        </div>
    );
}