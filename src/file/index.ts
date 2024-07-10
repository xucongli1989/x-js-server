import fs from "fs-extra"
import path from "path"
import JsKit from "x-js-kit"
import { format as formatUrl } from "url"
import * as rra from "recursive-readdir-async"

/**
 * 判断一个磁盘路径对象是否为【文件】
 */
export async function isFilePath(p: string) {
    if (!p) {
        return false
    }
    try {
        const stat = await fs.stat(p)
        return stat.isFile()
    } catch {
        return false
    }
}

/**
 * 判断一个磁盘路径对象是否为【文件夹】
 */
export async function isFolderPath(p: string) {
    if (!p) {
        return false
    }
    try {
        const stat = await fs.stat(p)
        return !stat.isFile()
    } catch {
        return false
    }
}

/**
 * 获取文件名（包含扩展名），如：test.mp4
 */
export function getFileName(p: string) {
    return path.basename(p)
}

/**
 * 获取文件名（不包含扩展名），如：test
 */
export function getFileNameWithoutExt(p: string) {
    const fileName = getFileName(p)
    const lastDotIndex = fileName.lastIndexOf(".")
    if (lastDotIndex < 0) {
        return fileName
    }
    return fileName.substring(0, lastDotIndex)
}

/**
 * 获取扩展名（不带点）
 */
export function getExtName(p: string) {
    const fileName = getFileName(p)
    if (!fileName) {
        return ""
    }
    if (!fileName.includes(".")) {
        return ""
    }
    const arr = fileName.split(".")
    return arr[arr.length - 1]
}

/**
 * 获取文件所在的文件夹路径
 */
export function getFileDirPath(p: string) {
    return path.dirname(p)
}

/**
 * 生成一个文件名
 * @param fileNameWithoutExt 该文件的文件名（不包含扩展名）
 * @param extWithoutDot 该文件的扩展名（不包含点）
 * @returns
 */
export function createFileName(fileNameWithoutExt: string, extWithoutDot: string) {
    if (!extWithoutDot) {
        return fileNameWithoutExt
    }
    return `${fileNameWithoutExt}.${extWithoutDot}`
}

/**
 * 生成一个文件名路径
 * @param dirPath 该文件所在的文件夹路径
 * @param fileNameWithoutExt 该文件的文件名（不包含扩展名）
 * @param extWithoutDot 该文件的扩展名（不包含点）
 */
export function createFilePath(dirPath: string, fileNameWithoutExt: string, extWithoutDot: string) {
    return path.join(dirPath, createFileName(fileNameWithoutExt, extWithoutDot))
}

/**
 * 返回标准的路径
 */
export function getStandardPath(p: string, isFolder: boolean) {
    if (JsKit.common.data.isNullOrWhiteSpace(p)) {
        return ""
    }
    p = p.trim().replaceAll("/", "\\")
    p = JsKit.common.string.rTrimString(p, "\\")
    if (isFolder) {
        return p + "\\"
    }
    return p
}

/**
 * 将文件物理路径转换为 file 协议路径（如果路径中有#号，则也会将其转换为%23，从而避免浏览器加载时报错）
 */
export function convertFilePathToUrl(p: string) {
    return formatUrl({
        pathname: p,
        protocol: "file",
        slashes: true
    })
}

/**
 * 获取指定文件夹路径下的所有文件路径
 */
export async function getFilePathListInFolder(p: string, isRecursion: boolean = true): Promise<string[]> {
    //这里返回的都是文件，不需要通过 isDirectory 筛选
    return (await rra.list(p, { stats: false, ignoreFolders: true, recursive: isRecursion })).map((k: any) => k.fullname) || []
}

/**
 * 获取指定文件夹路径下的所有文件夹路径
 */
export async function getFolderPathListInFolder(p: string, isRecursion: boolean = true): Promise<string[]> {
    return (await rra.list(p, { stats: false, ignoreFolders: false, recursive: isRecursion })).filter((k: any) => k.isDirectory === true).map((k: any) => k.fullname) || []
}
