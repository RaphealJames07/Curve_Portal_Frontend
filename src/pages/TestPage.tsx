import { useState, ChangeEvent } from 'react';

// Define types for city and country
interface City {
    name: string;
    id: number;
}

interface Country {
    name: string;
    id: number;
    city: City[];
}

const TestPage = () => {
    const data: Country[] = [
        {
            name: "england",
            id: 1,
            city: [
                { name: "london", id: 1 },
                { name: "manchester", id: 2 },
                { name: "birmingham", id: 3 },
            ],
        },
        {
            name: "spain",
            id: 2,
            city: [
                { name: "madrid", id: 1 },
                { name: "barcelona", id: 2 },
                { name: "seville", id: 3 },
            ],
        },
        {
            name: "italy",
            id: 3,
            city: [
                { name: "turin", id: 1 },
                { name: "rome", id: 2 },
                { name: "milan", id: 3 },
            ],
        },
    ];

    // State to store selected cities
    const [selectedData, setSelectedData] = useState<City[]>([]);

    // Handler for country selection change
    const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryId = parseInt(event.target.value);

        // Find the selected country by its ID
        const selectedCountry = data.find((item) => item.id === selectedCountryId);

        // If the country is found, update the selectedData with its cities
        if (selectedCountry) {
            setSelectedData(selectedCountry.city);
        } else {
            // Clear selectedData if no country is selected
            setSelectedData([]);
        }
    };

    return (
        <div>
            <select name="country" onChange={handleCountryChange}>
                <option value="">--Select a country--</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <select name="city">
                <option value="">--Select a city--</option>
                {selectedData.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TestPage;
