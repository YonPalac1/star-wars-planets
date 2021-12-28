import { useState, useEffect, useRef } from 'react'

function useFetch(url) {

    const isMount = useRef(true);

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    })

    useEffect(() => {
        return () => {
            isMount.current = false
        }
    }, [])

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        })

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (isMount.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })

                }
            })

    }, [url]);

    return state
}

export default useFetch
