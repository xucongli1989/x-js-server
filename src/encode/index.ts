/**
 * 将字符串转转为 base64 编码
 */
export function base64Encode(str: string) {
    if (!str) {
        return ""
    }
    return Buffer.from(str).toString("base64")
}

/**
 * 将对象转为 base64 编码
 */
export function base64EncodeObject(obj: any) {
    if (!obj) {
        return ""
    }
    return base64Encode(JSON.stringify(obj))
}
