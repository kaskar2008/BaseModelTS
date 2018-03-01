export function getQueryString (params: any): string {
  return Object
  .keys(params)
  .map((k: any) => {
    if (Array.isArray(params[k])) {
      return params[k]
        .map((val: any) => val ? `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}` : '')
        .join('&')
    }

    return params[k] ? `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}` : ''
  })
  .join('&')
}

export function fromDot<T> (obj: T, path: string): T {
  if (!path) return obj
  return path.split('.').reduce((o, i) => typeof o === 'object'? o[i] : o, obj)
}
