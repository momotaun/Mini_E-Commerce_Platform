import { useEffect, useState } from "react";
import { fetchHello } from "../services/exampleService";
import { 
    Logo,
    Button,
    Input,
    Radio,
    RadioGroup,
    CheckboxGroup
} from "../components";
import {
    FaHome,
    FaSearch
} from "react-icons/fa";

interface HelloResponse {
  message: string;
}

export default function HelloPage() {
    const [helloData, setHelloData] = useState<HelloResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selected, setSelected] = useState("option1");
    const [checked, setChecked] = useState<string[]>(["option1"]);

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

            <Radio label="Idle" state="idle" mode="light" name="demo" />
            <Radio label="Checked" state="checked" mode="light" name="demo" defaultChecked />
            <Radio label="Disabled" state="disabled" mode="light" name="demo" disabled />
            <Radio label="Dark Mode" state="idle" mode="dark" name="demo2" />

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

            <RadioGroup
                name="demoGroup"
                value={selected}
                onChange={setSelected}
                options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Disabled", value: "disabled", state: "disabled" },
                ]}
                mode="light"
            />

            <CheckboxGroup
                name="demoCheckboxGroup"
                values={checked}
                onChange={setChecked}
                options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Disabled", value: "disabled", state: "disabled" },
                ]}
                mode="light"
            />

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {helloData && <p>{helloData.message}</p>}
        </div>
    );
}