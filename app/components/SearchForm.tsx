import React from 'react'
import Form from "next/form";
import {reset} from "next/dist/lib/picocolors";
import SearchFormReset from "@/app/components/SearchFormReset";

const SearchForm = ({query}: {query?: string}) => {

    return (
        <Form action={"/"} scroll={false} className={"search-form"}>
            <input
                name={"query"}
                defaultValue={query}
                className={"search-input"}
                placeholder={"Search Posts"}
            />

            <div className={"flex gap-2"}>
                {query &&  <SearchFormReset/> }

                <button type={"submit"} className={"search-btn text-white"}>
                    S
                </button>
            </div>
        </Form>
    )
}
export default SearchForm
