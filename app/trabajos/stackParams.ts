import { createLoader, parseAsArrayOf, parseAsString } from 'nuqs/server'

export const stackParams = {
    stack: parseAsArrayOf(parseAsString),
}

export const loadStackParams = createLoader(stackParams)