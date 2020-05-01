    import React, { useState, useEffect } from "react";
    import { NativeSelect, FormControl } from "@material-ui/core";
    import styles from "./CountryPicker.module.css";
    import { countries } from "../../api";

    const CountryPicker = () => {
    const CountryPicker = () => {
        const [FetchCountries, setFetchCountries] = useState([]);
    };
    useEffect(() => {
        const fetchCountries = async () => {
        setFetchCountries(await countries);
        };

        fetchCountries();
    }, [setFetchCountries]);

    return (
        <FormControl className={styles.FormControl}>
        <NativeSelect>
            <optoin value="global">Global</optoin>
        </NativeSelect>
        </FormControl>
    );
    };

    export default CountryPicker;
