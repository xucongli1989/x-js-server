/**
 * 判断是否为生产环境（process.env.NODE_ENV==production）
 */
export function isProduction() {
    return process.env.NODE_ENV?.toLowerCase() == "production"
}

/**
 * 判断是否为开发环境（process.env.NODE_ENV==development）
 */
export function isDevelopment() {
    return process.env.NODE_ENV?.toLowerCase() == "development"
}
