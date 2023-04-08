const buildURL = (baseUrl, resource) => {
    if (typeof resource === 'string' && !resource.startsWith("https://")) {
        resource = baseUrl + resource
    }
    return resource
}

export const api = (uri) => buildURL("https://vlrggapi.vercel.app", uri)
export const api2 = (uri) => buildURL("https://vlrgg.cyclic.app/api", uri)
