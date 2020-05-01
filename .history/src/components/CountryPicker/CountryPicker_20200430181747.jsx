    import React, { useState, useEffect } from "react";
    import { NativeSelect, FormControl } from "@material-ui/core";
    import styles from "./CountryPicker.module.css";
    import { countries } from "../../api";

    const CountryPicker = () => {
        const [FetchedCountries, setFetchedCountries] = useState([]);
    };
    useEffect(() => {
        const FetchedCountries = async () => {
            setFetchedCountries(await countries);
        };

        FetchedCountries();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.FormControl}>
        <NativeSelect>
            <optoin value="global">Global</optoin>
        </NativeSelect>
        </FormControl>
    );
    };

    export default CountryPicker;
