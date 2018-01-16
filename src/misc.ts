export function getQueryString (params: any): string {
  return Object
  .keys(params)
  .map((k: any) => {
    if (Array.isArray(params[k])) {
      return params[k]
        .map((val: any) => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
        .join('&')
    }

    return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
  })
  .join('&')
}

export function fromDot (obj: any, path: string): any {
  if (!path) return obj
  return path.split('.').reduce((o: any, i: any) => typeof o === 'object'? o[i] : o, obj)
}
