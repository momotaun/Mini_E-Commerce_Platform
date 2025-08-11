import { useEffect, useState } from "react";
import { fetchHello } from "../services/exampleService";
import { Logo, Button } from "../components";
import { FaHome } from "react-icons/fa";

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
            <Logo image="/logo.svg" brand="Cartzilla" width={36} height={36} /><br />
            <Button typeStyle="primary" size="sm" variant="solid" icon={<FaHome />} iconPosition="left">
                Small Primary Left Icon
            </Button>
            <Button typeStyle="info" size="md" variant="solid" icon={<FaHome />} iconPosition="right">
                Medium Info Right Icon
            </Button>
            <Button typeStyle="success" size="lg" variant="solid" icon={<FaHome />} iconPosition="left">
                Large Success Left Icon
            </Button>
            <Button typeStyle="dark" size="sm" variant="solid" icon={<FaHome />} iconPosition="right">
                Small Dark Right Icon
            </Button>
            <Button typeStyle="primary" size="sm" variant="solid" icon={<FaHome />} aria-label="Home" />
            <Button typeStyle="primary" size="sm" variant="outline" icon={<FaHome />} iconPosition="left">
                Small Primary Outline Left Icon
            </Button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {helloData && <p>{helloData.message}</p>}
        </div>
    );
}