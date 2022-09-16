import React, {useEffect, useState} from "react";
import {Navbar} from "../components/Navbar";
import {documents, documentType} from "../mock-data/documents";

export const MainPage = () => {

    const SetupPageDocs = () => { // setup page function
        let result: documentType[] = []
        for (let i = 6 * page - 6; Number((page - 1) * 6) <= Number(i) && Number(i) < Number(6 * (page)); i++) {
            if (scopedDocs[i]) {
                result.push(scopedDocs[i])
            }
        }
        setPageDocs(result.map(i => i))
    }

    // data layers
    let [docs, setDocs] = useState(documents) // default docs (can be fetched or mock)
    let [sortedDocs, setSortedDocs] = useState(documents.data) // sort default docs
    let [filteredDocs, setFilteredDocs] = useState(sortedDocs) // filter by date sorted docs
    let [scopedDocs, setScopedDocs] = useState(filteredDocs) // scoped by name filtered by date docs
    let [pageDocs, setPageDocs] = useState<Array<documentType>>([]) // docs per page from scoped docs

    // pagination // per page 6
    let [pag, setPag] = useState<number[]>([])
    let [page, setPage] = useState(0)
    useEffect(() => {
        if (scopedDocs) {
            let l = Math.ceil(scopedDocs.length / 6)
            let pArr = []
            for (let i = 1; i <= l; i++) {
                pArr.push(i)
            }
            setPag(pArr)
            setPage(pArr[0])
        }
    }, [scopedDocs])

    // inputs
    let [filter, setFilter] = useState("")
    let [order, setOrder] = useState("")
    let [documentId, setDocumentId] = useState("")
    let [documentName, setDocumentName] = useState("")
    let [dateStart, setDateStart] = useState("")
    let [dateEnd, setDateEnd] = useState("")

    /* document logic
    -is doc id?
    -- yes -> show just one document
    -- no -> sort docs -> filter docs by date -> scoped docs with name -> setup page
    */
    useEffect(() => { // sorted
        setDocumentId("")
        let result: documentType[] = []
        if (filter === "id") {
            if (order === "asc") {
                result = (docs.data.sort((a, b) => a.id - b.id))
            }
            if (order === "desc") {
                result = (docs.data.sort((a, b) => a.id - b.id).reverse())
            }
        }
        if (filter === "name") {
            if (order === "asc") {
                result = (docs.data.sort((a, b) => a.name.localeCompare(b.name)))
            }
            if (order === "desc") {
                result = (docs.data.sort((a, b) => a.name.localeCompare(b.name)).reverse())
            }
        }
        if (filter === "created") {
            if (order === "asc") {
                result = (docs.data.sort((a, b) => new Date(a.date.split(".")
                    .reverse().join("-")).getTime() - new Date(b.date.split(".").reverse().join("-")).getTime()))
            }
            if (order === "desc") {
                result = (docs.data.sort((a, b) => new Date(a.date.split(".")
                    .reverse().join("-")).getTime() - new Date(b.date.split(".").reverse().join("-")).getTime()).reverse())
            }
        }
        if (!filter[1] || !order[1]) {
            result = docs.data.map(i => i)
        }
        setSortedDocs(result.map(i => i))
    }, [filter, order, dateStart, dateEnd, docs])

    useEffect(() => { // filtered by date
        setDocumentId("")
        let start = (dateStart) ? new Date(dateStart) : new Date(0)
        let end = (dateEnd) ? new Date(dateEnd) : new Date(999999999999999)
        let result: documentType[] = []
        sortedDocs.map((d: documentType) => {
            let date = new Date(d.date.split(".").reverse().join("-")).getTime()
            if (
                (date <= end.getTime())
                &&
                (date >= start.getTime())
            ) {
                result.push(d)
            }
        })
        setFilteredDocs(result.map(i => i))
    }, [filter, order, dateStart, dateEnd, sortedDocs])

    useEffect(() => { // scoped by name
        setDocumentId("")
        let result: documentType[] = []
        filteredDocs.map((d: documentType) => {
            if (
                d.name.toLowerCase().indexOf(documentName.toLowerCase()) !== -1
            ) {
                result.push(d)
            }
        })
        setScopedDocs(result.map(i => i))
    }, [filter, order, dateStart, dateEnd, documentName, filteredDocs])

    useEffect(() => { // setup page
        SetupPageDocs()
    }, [page, order, filter, sortedDocs, filteredDocs, scopedDocs])

    // scoped by ID exception
    useEffect(() => {
        if (documentId[0]) {
            let result = docs.data.filter((d: documentType) => {
                return d.id === Number(documentId)
            })
            setPageDocs(result)
        } else {
            SetupPageDocs()
        }
    }, [documentId])

    return (
        <>
            <Navbar
                page={"Document Search"}
                path={"Menu"}
                url={"./menu"}
            />

            <div
                className={"main-page__content"}
            >
                <div
                    className={"main-page__content__filter"}
                >
                    <div
                        className={"main-page__content__filter__input_id"}
                    >
                        <p>Document ID</p>
                        <input
                            type="number"
                            min={0}
                            placeholder={"id"}
                            value={documentId}
                            onChange={
                                (e) => {
                                    setDocumentId(e.currentTarget.value.trim())
                                }
                            }
                        />
                        <p
                            style={{color: "firebrick", fontSize: 12, margin: 4}}
                        >if document id filled - other fields will be ignored</p>
                    </div>

                    <div className={"main-page__content__filter__input_name__wrap"}>
                        <p>Created</p>

                        <div className={"main-page__content__filter__input_date"}>
                            <div
                                className={"main-page__content__filter__input_date-1"}
                            >
                                <input
                                    type="date"
                                    value={dateStart}
                                    onChange={
                                        (e) => {
                                            setDateStart(e.currentTarget.value)
                                            console.log(dateStart)
                                        }
                                    }
                                />
                            </div>
                            <div
                                className={"main-page__content__filter__input_date-2"}
                            >
                                <input
                                    type="date"
                                    value={dateEnd}
                                    onChange={
                                        (e) => {
                                            setDateEnd(e.currentTarget.value)
                                            console.log(dateEnd)
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={"main-page__content__filter__input_doc-name"}
                    >
                        <p>Document Name</p>
                        <input
                            type="text"
                            placeholder={"name"}
                            value={documentName}
                            onChange={
                                (e) => {
                                    setDocumentName(e.currentTarget.value)
                                }
                            }
                        />
                    </div>


                    <div
                        className={"main-page__content__filter__input_filter__wrap"}
                    >
                        <p>Filter</p>
                        <div className={"main-page__content__filter__input_filter"}>
                            <select
                                name="" id=""
                                value={filter}
                                onChange={
                                    (e) => {
                                        setFilter(e.currentTarget.value)
                                        console.log(filter)
                                    }
                                }
                            >
                                <option value="" disabled={true}>chose field</option>
                                <option value="id">by ID</option>
                                <option value="created">by Created</option>
                                <option value="name">by Name</option>
                            </select>

                            <select
                                name="" id=""
                                value={order}
                                onChange={
                                    (e) => {
                                        setOrder(e.currentTarget.value)
                                        console.log(order)
                                    }
                                }
                            >
                                <option value="" disabled={true}>order by</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div
                    className={"main-page__content__docs"}
                >

                    {
                        (documentId)
                            ? []
                            : <div
                                className={"main-page__content__docs__item__pagination"}
                            >
                                <div className={"main-page__content__docs__item__pagination__open-btn"}
                                     onClick={
                                         () => {
                                             document.querySelectorAll(".main-page__content__docs__item").forEach((n: any) => {
                                                     n.open = true
                                                 }
                                             )
                                         }
                                     }
                                >
                                    open all
                                </div>
                                {
                                    pag.map((p: number) => {
                                        return (
                                            <div
                                                className={`main-page__content__docs__item__pagination__item ${(page === p) ? 'selected' : ''}`}
                                                key={`main-page__content__docs__item__pagination__item=${p}`}
                                                onClick={(e) => setPage(p)}
                                            >
                                                {p}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    }

                    {
                        (pageDocs[0])
                            ? pageDocs.map((d: documentType) => {
                                return (
                                    <details
                                        className={"main-page__content__docs__item"}
                                        key={`main-page__content__docs__item-${d.id}`}
                                    >
                                        <summary>{d.name}</summary>
                                        <p><b>text:</b>{` ${d.text}`}</p>
                                        <p><b>id:</b>{` ${d.id}`}</p>
                                        <p><b>date:</b>{` ${d.date}`}</p>
                                    </details>
                                )
                            })
                            : <p style={{margin: 20}}><b>no documents =(</b></p>
                    }
                </div>
            </div>

        </>
    )
}