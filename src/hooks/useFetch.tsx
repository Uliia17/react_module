import {useState, useEffect} from "react";

export const useFetch = <T,>(url: string) => { // <T,> з комою після T - обов'язково
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async ():Promise<void> => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Error");
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError("Error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

