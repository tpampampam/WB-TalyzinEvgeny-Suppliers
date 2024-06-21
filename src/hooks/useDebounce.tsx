
import { useEffect, useState } from "react"

export const useDebounce = (value: string, delay: number) => {
    const [debValue, setValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debValue
}